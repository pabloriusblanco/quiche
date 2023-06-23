import { useState } from "react";
import { useLocation } from "react-router-dom";
import { advancedSearch } from "../../api/search";
import Paragraph from "../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../components/atoms/Text/TextsTypes";
import Title from "../../components/atoms/Text/Title";
import BackgroundHeader from "../../components/molecules/Background/Background";
import AdvanceSearch, {
  AdvanceSearchFormQuery,
} from "../../components/molecules/Forms/AdvanceSearch/AdvanceSearch";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import { useResultModal } from "../../hooks/useResultModal";
import { AdvanceSearchQuery, PostResponse } from "../../types/Api";
import AdvanceSearchResponseContainer from "./AdvanceSearchResponseContainer";
import { useSpinner } from "../../hooks/useSpinner";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import Skeleton from "../../components/molecules/Skeleton/Skeleton";
import Button from "../../components/atoms/Buttons/Button";

const Search: React.FC = () => {
  const location = useLocation();
  // const { name, category, ingredient } = location.state;
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [currentSearch, setCurrentSearch] = useState<
    AdvanceSearchQuery | undefined
  >(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const resultModal = useResultModal();
  const spinner = useSpinner();
  const [areFiltersShowing, setAreFiltersShowing] = useState<boolean>(true);

  const searchRecipes = (values: AdvanceSearchQuery, newSearch = true) => {
    console.log(values);

    spinner.startLoading({
      text: "Buscando recetas...",
    });
    advancedSearch(values)
      .then((res) => {
        console.log(res);
        setCurrentSearch({ ...values, PageNumber: currentPage });
        setCurrentPage(res.pageNumber);
        setTotalPages(res.totalPages);
        setTotalPosts(res.totalItems);
        if (newSearch) setPosts(res.posts);
        else setPosts((prevPosts) => [...prevPosts, ...res.posts]);
        if (res.posts.length >= 1) setAreFiltersShowing(false);
      })
      .catch((err) => {
        console.log(err);
        resultModal.showResultModal("danger", {
          title: "Error",
          message: err.response.data,
        });
      })
      .finally(() => {
        spinner.stopLoading();
      });
  };

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <HomeSearch />
      <div className="space-y-8">
        <section className="container">
          <div className="flex flex-col gap-5">
            <div>
              <Title
                weight={TextWeightType.Bold}
                titleType={TitleType.H2}
                text={"Busqueda avanzada de recetas"}
                color="black"
              />
              <Paragraph color="gray" className="text-[12px]">
                Desde aquí podrás buscar recetas por nombre, categorías,
                ingredientes y mucho más.
              </Paragraph>
            </div>
            <div className="shadow-light grid grid-cols-12 gap-5 rounded-xl bg-white p-5">
              <AdvanceSearch
                onSubmitCallback={searchRecipes}
                initialValues={location}
                filterOpen={areFiltersShowing}
                setFilterOpen={setAreFiltersShowing}
              />
            </div>
            {posts && posts.length >= 1 && (
              <AdvanceSearchResponseContainer posts={posts} />
            )}
            {spinner.isLoading && (
              <Skeleton
                gap={4}
                gridCols={12}
                gridMatrix={[
                  [12],
                  [12],
                  [12],
                  [12],
                  [12],
                  [12],
                  [12],
                  [12],
                  [12],
                  [12],
                ]}
                itemHeight={"146px"}
              />
            )}
            {posts && posts.length >= 1 && currentPage < totalPages && (
              <div className="flex justify-center">
                <Button
                  buttonStyle="filled"
                  color="primary"
                  extraClasses="rounded-md px-4 py-2 text-white"
                  onClick={() => {
                    if (currentSearch) {
                      searchRecipes(
                        {
                          ...currentSearch,
                          PageNumber: currentPage + 1,
                        },
                        false
                      );
                    }
                  }}
                >
                  Ver más recetas
                </Button>
              </div>
            )}
          </div>
        </section>
        <BannerQuicheApp />
      </div>
    </>
  );
};

export default Search;
