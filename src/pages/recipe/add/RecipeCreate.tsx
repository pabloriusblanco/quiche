import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../../api/recipes";
import Paragraph from "../../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import BackgroundHeader from "../../../components/molecules/Background/Background";
import RecipeCreateForm from "../../../components/molecules/Forms/RecipeCreateForm";
import HomeSearch from "../../../components/organisms/Search/SimpleSearch/HomeSearch";
import { useResultModal } from "../../../hooks/useResultModal";
import { useSpinner } from "../../../hooks/useSpinner";
import { PostCreateUpdate } from "../../../types/Api";
import { useAuth } from "../../../hooks/useAuth";
import { createDraft, deleteDraft } from "../../../api/drafts";

const RecipeCreate = () => {
  const resposeModal = useResultModal();
  const navigator = useNavigate();
  const spinner = useSpinner();
  const auth = useAuth();

  const publishPost = async (post: PostCreateUpdate, isDraft = false) => {
    if (!auth.isAuthenticated) {
      auth.toggleAuthModal();
    } else {
      spinner.startLoading({ text: "Creando receta..." });

      const projectedPost = {
        recipe: {
          ...post,
        },
      };

      createRecipe(projectedPost)
        .then((res) => {
          if (isDraft) {
            deleteCurrentDraft();
          }
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
            allowClose: false,
            cancelText: "Volver al inicio",
            onCancel: () => {
              navigator("/");
              window.scrollTo(0, 0);
              window.location.reload();
            },
            confirmText: "Ver receta",
            onConfirm: () => {
              navigator(`/recipe/${res.data}`);
              window.location.reload();
            },
          });
        })
        .catch((err) => {
          console.log(err);
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
    }
  };

  const saveDraft = (formikValues) => {
    spinner.startLoading({ text: "Guardando borrador..." });
    formikValues.image = null;
    createDraft({ recipeDraft: JSON.stringify(formikValues) })
      .then((res) => {
        console.log(res);
        resposeModal.showResultModal("success", {
          showIcon: true,
          allowClose: false,
          title: "Borrador guardado",
          message: (
            <>
              Se ha guardado la receta como borrador.
              <br />
              ¡La verás debajo de la barra de navegación!
            </>
          ),
          onCancel: () => {
            navigator("/");
            window.location.reload();
            window.scrollTo(0, 0);
          },
        });
      })
      .catch((err) => {
        console.log(err);
        resposeModal.showResultModal("danger", {
          showIcon: true,
          allowClose: false,
          title: "Error al guardar borrador",
          message: (
            <>
              No se ha podido guardar la receta como borrador.
              <br />
              Por favor intente más tarde.
            </>
          ),
          onCancel: () => {
            navigator("/");
            window.location.reload();
            window.scrollTo(0, 0);
          },
        });
      })
      .finally(() => {
        spinner.stopLoading();
      });
  };

  const confirmSaveDraft = (formikValues) => {
    if (!auth.isAuthenticated) {
      auth.toggleAuthModal();
    } else {
      resposeModal.showResultModal("warning", {
        title: "Guardar borrador",
        message: (
          <>
            ¿Estás seguro de que quieres guardar la receta como borrador?
            <br />
            Si tenía un borrador anterior, se sobreescribirá.
          </>
        ),
        showIcon: true,
        confirmText: "Guardar",
        onConfirm: () => {
          saveDraft(formikValues);
        },
      });
    }
  };

  const deleteCurrentDraft = () => {
    sessionStorage.removeItem("recipeDraft");
    deleteDraft()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
              saveAsDraft={confirmSaveDraft}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeCreate;
