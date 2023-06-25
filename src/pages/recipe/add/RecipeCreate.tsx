import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { useResultModal } from "../../../hooks/useResultModal";
import { useSpinner } from "../../../hooks/useSpinner";

const RecipeCreate = () => {
  const resposeModal = useResultModal();
  const navigator = useNavigate();
  const spinner = useSpinner();

  const publishPost = async (post: PostCreateUpdate) => {
    spinner.startLoading({ text: "Creando receta..." });

    const projectedPost = {
      recipe: {
        ...post,
      },
    };

    console.log("post", projectedPost);
    createRecipe(projectedPost)
      .then((res) => {
        resposeModal.showResultModal("success", {
          title: "Receta creada",
          message: (
            <>
              Se ha creado la receta correctamente.
              <br />
              Puedes verla en tu perfil o haciendo click en el botón de abajo.
            </>
          ),
          showIcon: true,
          confirmText: "Ver receta",
          onConfirm: () => navigator(`/recipe/${res.data}`),
        });
      })
      .catch((err) => {
        resposeModal.showResultModal("danger", {
          title: "Ha sucecido un error",
          message: (
            <>
              No se ha podido crear la receta
              <br />
              Por favor intente más tarde
            </>
          ),
          showIcon: true,
        });
      })
      .finally(() => {
        spinner.stopLoading();
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
