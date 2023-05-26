import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../api/recipes";
import BackgroundHeader from "../../components/molecules/Background/Background";
import Skeleton from "../../components/molecules/Skeleton/Skeleton";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import { Post } from "../../types/Recipe";
import RecipeInfo from "./sections/RecipeInfo";

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
        console.log(res);
        setResults(res);
        // getSimilarRecipes(res.id).then((res) => {
        //   setSimilarPosts(res);
        // }
      });
    }
  }, [id]);

  console.log(id);

  return (
    <>
      <BackgroundHeader sectionHeight="215px"/>
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
          <div className="grid grid-cols-10">
            <RecipeInfo post={results} />
          </div>
        )}
      </section>
    </>
  );
};

export default RecipeDetail;
