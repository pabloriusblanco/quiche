import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../api/recipes";
import BackgroundHeader from "../../components/molecules/Background/Background";
import Skeleton from "../../components/molecules/Skeleton/Skeleton";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import { Post } from "../../types/Recipe";
import RecipeInfo from "./sections/RecipeInfo";
import RecipeComments from "./sections/RecipeComments";
import RecipeActions from "./sections/RecipeActions";
import RecipeSimilar from "./sections/RecipeSimilar";

// interface RecipeDetailProps {
//   postId: string;
// }

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [results, setResults] = useState<Post | null>(null);
  const [similarPosts, setSimilarPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (id) {
      getRecipe(id).then((res) => {
        setResults(res);
        // getSimilarRecipes(res.id).then((res) => {
        //   setSimilarPosts(res);
        // }
      });
    }
  }, [id]);

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <section className="container">
        <HomeSearch />
        {!results && (
          <Skeleton
            gap={2}
            gridCols={12}
            gridMatrix={[
              [4, 8],
              [1, 3, 8],
            ]}
            itemHeight={"20px"}
          />
        )}
        {results && (
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 flex flex-col gap-5">
              <RecipeInfo post={results} />
              <RecipeComments comments={results.comments} />
            </div>
            <div className="col-span-4 flex flex-col gap-5">
              <RecipeActions />
              <RecipeSimilar type="ingredients" />
              <RecipeSimilar type="categories" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RecipeDetail;
