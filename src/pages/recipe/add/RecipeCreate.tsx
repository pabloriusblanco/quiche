import { useState } from "react";
import { useParams } from "react-router-dom";
import Paragraph from "../../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import BackgroundHeader from "../../../components/molecules/Background/Background";
import RecipeCreateForm from "../../../components/molecules/Forms/RecipeCreateForm";
import HomeSearch from "../../../components/organisms/Search/SimpleSearch/HomeSearch";
import { Post } from "../../../types/Recipe";
import { createRecipe } from "../../../api/recipes";
import { PostCreateUpdate } from "../../../types/Api";

const RecipeCreate = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  const publishPost = async (post: PostCreateUpdate) => {
    post.image =
      "https://images.unsplash.com/photo-1551807501-1577675640e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218MHx8cGllfHx8fHx8MTY4NzEzMjk3Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=768";

    const projectedPost = {
      recipe: {
        ...post,
      },
    };

    console.log("post", projectedPost.recipe.image);
    createRecipe(projectedPost)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finalizado");
      });
  };

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <section className="container">
        <HomeSearch />
        <div className="flex flex-col gap-5">
          <div>
            <Title
              weight={TextWeightType.Bold}
              titleType={TitleType.H2}
              text="Crear receta"
              color="black"
            />
            <Paragraph color="gray" className="text-[12px]">
              Desde aquí podrás crear una receta nueva para que la comunidad
              pueda verla y disfrutarla.
            </Paragraph>
          </div>
          <div className="shadow-light grid grid-cols-12 gap-5 rounded-xl p-5">
            <RecipeCreateForm
              onSubmitCallback={publishPost}
              className="col-span-12"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeCreate;
