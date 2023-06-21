import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import useModal from "../../../hooks/useModal";
import { useResultModal } from "../../../hooks/useResultModal";
import { genericErrorModalContent } from "../../../components/molecules/Modal/Auth/ResultsConfigAuth/ResultsAuthContents";
import { split } from "postcss/lib/list";

// interface RecipeDetailProps {
//   postId: string;
// }

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigator = useNavigate();
  const [post, setPost] = useState<PostResponse | null>(null);
  const [similarPosts, setSimilarPosts] = useState<Post[]>([]);
  const resultModal = useResultModal();

  useEffect(() => {
    if (id) {
      getRecipe(id)
        .then((res) => {
          setPost(res);
        })
        .catch((err) => {
          const message = split(err.response.data, ["-"], false)[1];
          resultModal.showResultModal(
            "danger",
            genericErrorModalContent(message, () => navigator("/"))
          );
        });
    }
  }, [id]);

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <section className="container">
        <HomeSearch />
        {!post && (
          <div className="flex flex-col gap-5">
            <Skeleton
              gap={4}
              gridCols={10}
              gridMatrix={[[6, 4]]}
              itemHeight={"466px"}
            />
            <Skeleton
              gap={4}
              gridCols={10}
              gridMatrix={[
                [6, 2, 2],
                [6, 2, 2],
                [6, 2, 2],
              ]}
              itemHeight={"372px"}
            />
          </div>
        )}
        {post && (
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 flex flex-col gap-5">
              <RecipeInfo post={post} />
              <RecipeComments comments={post.postsComments} postId={post.id} />
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
