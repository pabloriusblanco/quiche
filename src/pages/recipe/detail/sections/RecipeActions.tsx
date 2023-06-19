import Button from "../../../../components/atoms/Buttons/Button";
import Icon from "../../../../components/atoms/Icons/Icons";
import ShareModal from "../../../../components/molecules/Modal/RecipeActions/ShareModal";
import { useAuth } from "../../../../hooks/useAuth";
import useModal from "../../../../hooks/useModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import { Post } from "../../../../types/Recipe";
import { downloadIngredients } from "../../../../utils/DownloadIngredients";


type RecipeActionsProps = {
  post: Post;
  //   comments: Comment[];
};

const RecipeActions = ({ post }: RecipeActionsProps) => {
  const auth = useAuth();
  const shareModal = useModal();
  const spinnerModal = useSpinner();
  const url = window.location.href;

  const favoritePost = async () => {
    spinnerModal.startLoading({ text: "Guardando como favorito" });
    if (!auth.isAuthenticated) {
      spinnerModal.stopLoading();
      auth.toggleAuthModal();
    } else {
      setTimeout(() => {
        alert("Guardado como favorito");
      }, 2000);
      spinnerModal.stopLoading();
    }
  };

  const sharePost = async () => {
    if (!auth.isAuthenticated) {
      auth.toggleAuthModal();
    } else {
      shareModal.openModal();
    }
  };

  const saveIngredients = async () => {
    spinnerModal.startLoading({ text: "Guardando lista de ingredientes" });
    if (!auth.isAuthenticated) {
      spinnerModal.stopLoading();
      auth.toggleAuthModal();
    } else {
      downloadIngredients(post);
      spinnerModal.stopLoading();
    }
  };

  const reportPost = async () => {
    spinnerModal.startLoading({ text: "Reportando receta" });
    if (!auth.isAuthenticated) {
      spinnerModal.stopLoading();
      auth.toggleAuthModal();
    } else {
      setTimeout(() => {
        alert("Reportado");
      }, 2000);
      spinnerModal.stopLoading();
    }
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      <Button
        color="primary"
        onClick={favoritePost}
        buttonStyle="outlined"
        extraClasses="group col-span-6 flex gap-2 items-center justify-center"
      >
        <Icon
          name="likes"
          className="w-4 fill-primary group-hover:fill-white"
        />
        Favorito
      </Button>
      <Button
        color="primary"
        buttonStyle="outlined"
        onClick={sharePost}
        extraClasses="group col-span-6 flex gap-2 items-center justify-center"
      >
        <Icon
          name="share"
          className="w-4 fill-primary group-hover:fill-white"
        />
        Compartir
      </Button>
      <Button
        color="primary"
        onClick={saveIngredients}
        buttonStyle="outlined"
        extraClasses="group col-span-12 flex gap-2 items-center justify-center"
      >
        <Icon
          name="download"
          className="w-4 fill-primary group-hover:fill-white"
        />
        Descargar lista de compras
      </Button>
      <Button
        color="danger"
        onClick={reportPost}
        buttonStyle="outlined"
        extraClasses="group col-span-12 flex gap-2 items-center justify-center"
      >
        <Icon
          name="report"
          className="w-4 fill-danger group-hover:fill-white"
        />
        Reportar
      </Button>
      {shareModal.isOpen && (
        <ShareModal url={url} closeModal={shareModal.closeModal} />
      )}
    </div>
  );
};

export default RecipeActions;
