import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeInfo from "./sections/RecipeInfo";
import RecipeComments from "./sections/RecipeComments";
import RecipeActions from "./sections/RecipeActions";
import RecipeSimilar from "./sections/RecipeSimilar";
import { getRecipe, getSimilarRecipes } from "../../../api/recipes";
import BackgroundHeader from "../../../components/molecules/Background/Background";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import HomeSearch from "../../../components/organisms/Search/SimpleSearch/HomeSearch";
import { Post } from "../../../types/Recipe";
import { PostResponse, PostResponseSimilar } from "../../../types/Api";
import useModal from "../../../hooks/useModal";
import { useResultModal } from "../../../hooks/useResultModal";
import { genericErrorModalContent } from "../../../components/molecules/Modal/Auth/ResultsConfigAuth/ResultsAuthContents";
import { useSpinner } from "../../../hooks/useSpinner";

// interface RecipeDetailProps {
//   postId: string;
// }

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigator = useNavigate();
  const [post, setPost] = useState<PostResponse | null>(null);
  const [similarPosts, setSimilarPosts] = useState<
    PostResponseSimilar | undefined
  >(undefined);
  const resultModal = useResultModal();
  const spinner = useSpinner();

  const getSimilarPosts = () => {
    getSimilarRecipes(id)
      .then((res) => {
        setSimilarPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id) {
      spinner.startLoading({ text: "Cargando receta..." });
      getRecipe(id)
        .then((res) => {
          setPost(res);
          getSimilarPosts();
        })
        .catch((err) => {
          const message = err.response.data.split(["-"]);
          resultModal.showResultModal("danger", {
            title: "Error",
            message: message[1],
            showIcon: true,
            cancelText: "Volver al inicio",
            onCancel: () => {
              navigator("/");
            },
            allowClose: false,
          });
        })
        .finally(() => spinner.stopLoading());
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
              <RecipeSimilar
                posts={
                  similarPosts ? similarPosts.postsByIngredients : undefined
                }
                type="ingredients"
              />
              <RecipeSimilar
                posts={similarPosts ? similarPosts.postsByCategory : undefined}
                type="categories"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RecipeDetail;
