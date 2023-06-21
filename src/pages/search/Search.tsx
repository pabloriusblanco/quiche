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
import AdvanceSearch from "../../components/molecules/Forms/AdvanceSearch/AdvanceSearch";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import { useResultModal } from "../../hooks/useResultModal";
import { AdvanceSearchQuery, PostResponse } from "../../types/Api";
import AdvanceSearchResponseContainer from "./AdvanceSearchResponseContainer";
import { useSpinner } from "../../hooks/useSpinner";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";

const Search: React.FC = () => {
  const location = useLocation();
  // const { name, category, ingredient } = location.state;
  const [posts, setPosts] = useState<PostResponse[] | undefined>(undefined);
  const [currentSearch, setCurrentSearch] = useState<
    AdvanceSearchQuery | undefined
  >(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const resultModal = useResultModal();
  const spinner = useSpinner();
  const [areFiltersShowing, setAreFiltersShowing] = useState<boolean>(true);

  const searchRecipes = (values: AdvanceSearchQuery) => {
    spinner.startLoading({
      text: "Buscando recetas...",
    });
    console.log(values);    
    advancedSearch(values)
      .then((res) => {
        console.log(res);
        setCurrentSearch(values);
        setPosts(res.posts);
        setCurrentPage(res.pageNumber);
        setTotalPages(res.totalPages);
        setTotalPosts(res.totalItems);
        if (res.posts.length >= 1) {
          setAreFiltersShowing(false);
        }
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
            {posts && <AdvanceSearchResponseContainer posts={posts} />}
          </div>
        </section>
        <BannerQuicheApp />
      </div>
    </>
  );
};

export default Search;
