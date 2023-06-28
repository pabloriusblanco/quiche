import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRecipe, getRecipe, updateRecipe } from "../../../api/recipes";
import Paragraph from "../../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import BackgroundHeader from "../../../components/molecules/Background/Background";
import RecipeCreateForm from "../../../components/molecules/Forms/RecipeCreateForm";
import HomeSearch from "../../../components/organisms/Search/SimpleSearch/HomeSearch";
import { useAuth } from "../../../hooks/useAuth";
import { useResultModal } from "../../../hooks/useResultModal";
import { useSpinner } from "../../../hooks/useSpinner";
import { PostCreateUpdate, PostResponse } from "../../../types/Api";

const RecipeEdit = () => {
  const { id } = useParams<{ id: string }>();
  const auth = useAuth();
  const [post, setPost] = useState<PostResponse | null>(null);
  const responseModal = useResultModal();
  const navigator = useNavigate();
  const spinner = useSpinner();

  useEffect(() => {
    spinner.startLoading({ text: "Obteniendo datos..." });
    if (auth.isAuthenticated && !auth.isLoading) {
      getRecipe(id)
        .then((res) => {
          if (res.user.userName !== auth.username) {
            responseModal.showResultModal("danger", {
              title: "Ha sucecido un error",
              message: "No tienes permisos para editar esta receta",
              showIcon: true,
              cancelText: "Volver",
              onCancel() {
                navigator("/");
              },
            });
          } else {
            setPost(res);
          }
        })
        .catch((err) => {
          responseModal.showResultModal("danger", {
            title: "Ha sucecido un error",
            message: (
              <>
                No se ha podido editar la receta
                <br />
                {err.message}
              </>
            ),
            showIcon: true,
          });
        })
        .finally(() => {
          spinner.stopLoading();
        });
    }
  }, [auth.isAuthenticated]);

  const publishPost = async (post: PostCreateUpdate) => {
    spinner.startLoading({ text: "Editando receta..." });
    const projectedPost = {
      id: id,
      recipe: {
        ...post,
      },
    };

    updateRecipe(projectedPost)
      .then((res) => {
        responseModal.showResultModal("success", {
          title: "Receta editada",
          message: "Se ha editado la receta correctamente.",
          showIcon: true,
          allowClose: false,
          cancelText: "Ver receta",
          onCancel: () => navigator(`/recipe/${id}`),
        });
      })
      .catch((err) => {
        console.log(err);
        responseModal.showResultModal("danger", {
          title: "Ha sucecido un error",
          message: (
            <>
              No se ha podido editar la receta
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
              text="Editar receta"
              color="black"
            />
            <Paragraph color="gray" className="text-[12px]">
              Desde aquí podrás editar tu receta, cambiando cualquier campo que
              quieras.
            </Paragraph>
          </div>
          <div className="shadow-light grid grid-cols-12 gap-5 rounded-xl p-5">
            <RecipeCreateForm
              onSubmitCallback={publishPost}
              className="col-span-12"
              post={post}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeEdit;
