import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeInfo from "./sections/RecipeInfo";
import RecipeComments from "./sections/RecipeComments";
import RecipeActions from "./sections/RecipeActions";
import RecipeSimilar from "./sections/RecipeSimilar";
import { getRecipe } from "../../../api/recipes";
import BackgroundHeader from "../../../components/molecules/Background/Background";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import HomeSearch from "../../../components/organisms/Search/SimpleSearch/HomeSearch";
import { Post } from "../../../types/Recipe";
import { PostResponse } from "../../../types/Api";

// interface RecipeDetailProps {
//   postId: string;
// }

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostResponse | null>(null);
  const [similarPosts, setSimilarPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (id) {
      getRecipe(id).then((res) => {
        setPost(res);
      });
    }
  }, [id]);

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <section className="container">
        <HomeSearch />
        {!post && (
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
        {post && (
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 flex flex-col gap-5">
              <RecipeInfo post={post} />
              <RecipeComments comments={post.postsComments} />
            </div>
            <div className="col-span-4 flex flex-col gap-5">
              <RecipeActions post={post} />
              <RecipeSimilar postId={post.id} type="ingredients" />
              <RecipeSimilar postId={post.id} type="categories" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RecipeDetail;
