import { isEmptyArray } from "formik";
import { SimpleSearchResponse } from "../../../../types/Api";
import Skeleton from "../../../molecules/Skeleton/Skeleton";
import CategoryResultSearchHome from "./results/CategoriesResultSearchHome";
import IngredientsResultSearchHome from "./results/IngredientsResultSearchHome";
import NoResultsSearchHome from "./results/NoResultsSearchHome";
import RecipeResultSearchHome from "./results/RecipeResultSearchHome";

interface ModalSearchResultsProps {
  showingResults: boolean;
  results: SimpleSearchResponse | null;
  isLoading: boolean;
}

const ModalSearchResults = ({
  showingResults,
  results,
  isLoading,
}: ModalSearchResultsProps) => {
  if (!results || isLoading)
    return (
      <div
        className={`fade-in-bottom ${
          !showingResults ? "hidden" : ""
        } shadow-light absolute top-[95px] w-full rounded-2xl bg-white p-5 transition-all`}
      >
        <Skeleton
          gridCols={12}
          gridMatrix={[
            [1, 2, 8, 1],
            [1, 2, 8, 1],
            [1, 2, 8, 1],
            [1, 2, 8, 1],
            [1, 2, 8, 1],
            [1, 2, 8, 1],
            [1, 2, 8, 1],
          ]}
        />
      </div>
    );

  const { posts, categories, ingredients } = results;
  const isPostEmpty = isEmptyArray(posts);
  const isCategoriesEmpty = isEmptyArray(categories);
  const isIngredientsEmpty = isEmptyArray(ingredients);
  const hasResults = !isPostEmpty || !isCategoriesEmpty || !isIngredientsEmpty;

  return (
    <div
      className={`fade-in-bottom ${
        !showingResults ? "hidden" : ""
      } shadow-light absolute top-[95px] w-full rounded-2xl bg-white p-5 transition-all`}
    >
      {!isLoading && !hasResults && <NoResultsSearchHome />}
      {!isLoading && !isPostEmpty && <RecipeResultSearchHome recipes={posts} />}
      {!isLoading && !isCategoriesEmpty && (
        <CategoryResultSearchHome categories={categories} />
      )}
      {!isLoading && !isIngredientsEmpty && (
        <IngredientsResultSearchHome ingredients={ingredients} />
      )}
    </div>
  );
};

export default ModalSearchResults;
