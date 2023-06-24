import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllCategories } from "../../api/categories";
import { advancedSearch } from "../../api/search";
import Button from "../../components/atoms/Buttons/Button";
import Paragraph from "../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../components/atoms/Text/TextsTypes";
import Title from "../../components/atoms/Text/Title";
import BackgroundHeader from "../../components/molecules/Background/Background";
import AdvanceSearch from "../../components/molecules/Forms/AdvanceSearch/AdvanceSearch";
import Skeleton from "../../components/molecules/Skeleton/Skeleton";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import { useResultModal } from "../../hooks/useResultModal";
import { useSpinner } from "../../hooks/useSpinner";
import { AdvanceSearchQuery, PostResponse } from "../../types/Api";
import { Category } from "../../types/Recipe";
import AdvanceSearchNoResponse from "./AdvanceSearchNoResponse";
import SortIsotope from "./SortIsotope/SortIsotope";

const Search: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const parameters = {
    name: searchParams.get("name") || undefined,
    category: searchParams.get("category") || undefined,
    ingredientid: searchParams.get("ingredientid") || undefined,
    ingredientname: searchParams.get("ingredientname") || undefined,
    username: searchParams.get("username") || undefined,
  };

  // const { name, category, ingredient } = location.state;
  const [posts, setPosts] = useState<PostResponse[] | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentSearch, setCurrentSearch] = useState<
    AdvanceSearchQuery | undefined
  >(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const resultModal = useResultModal();
  const spinner = useSpinner();
  const [areFiltersShowing, setAreFiltersShowing] = useState<boolean>(true);

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
        return []; // Return an empty array as a fallback in case of an error
      });
  }, []);

  const searchRecipes = (values: AdvanceSearchQuery, newSearch = true) => {
    spinner.startLoading({
      text: "Buscando recetas...",
    });
    advancedSearch(values)
      .then((res) => {
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
      <div className="space-y-8 mt-8">
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
                initialValues={parameters}
                filterOpen={areFiltersShowing}
                setFilterOpen={setAreFiltersShowing}
              />
            </div>
            {posts && posts.length >= 1 && (
              <div className="mt-5 flex items-center justify-between">
                <Title
                  weight={TextWeightType.SemiBold}
                  titleType={TitleType.H3}
                  text={`Resultados de la búsqueda: ${totalPosts} recetas`}
                  color="black"
                />
                <Paragraph color="gray" className="text-[12px]">
                  Mostrando {posts.length} de {totalPosts} recetas
                </Paragraph>
              </div>
            )}
            {posts && posts.length >= 1 && (
              <div className="flex w-full flex-col gap-5">
                <div className="w-full">
                  <SortIsotope posts={posts} categories={categories} />
                </div>
              </div>
            )}
            {posts && posts.length < 1 && <AdvanceSearchNoResponse />}
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
