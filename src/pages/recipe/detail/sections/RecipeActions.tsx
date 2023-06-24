import { useEffect, useState } from "react";
import { likeComment, likeCommentDelete } from "../../../../api/recipes";
import Button from "../../../../components/atoms/Buttons/Button";
import Icon from "../../../../components/atoms/Icons/Icons";
import ShareModal from "../../../../components/molecules/Modal/RecipeActions/ShareModal";
import { useAuth } from "../../../../hooks/useAuth";
import useModal from "../../../../hooks/useModal";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import { PostResponse } from "../../../../types/Api";
import { downloadIngredients } from "../../../../utils/DownloadIngredients";

type RecipeActionsProps = {
  post: PostResponse;
  //   comments: Comment[];
};

const RecipeActions = ({ post }: RecipeActionsProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const auth = useAuth();
  const shareModal = useModal();
  const spinnerModal = useSpinner();
  const url = window.location.href;
  const responseModal = useResultModal();

  useEffect(() => {
    if (auth.isAuthenticated) {
      const isFavorite = post.usersLikedPosts.some(
        (like) => like.user.userName === auth.username
      );
      setIsFavorite(isFavorite);
    }
  }, []);

  const favoritePost = async () => {
    spinnerModal.startLoading({ text: "Guardando como favorito" });
    if (!auth.isAuthenticated) {
      spinnerModal.stopLoading();
      auth.toggleAuthModal();
    } else {
      likeComment(post.id)
        .then((res) => {
          responseModal.showResultModal("success", {
            showIcon: true,
            title: "Guardada como favorita",
            message: "La receta ha sido guardada como favorita correctamente",
            // onConfirm: () => window.location.reload(),
            // confirmText: "Recargar",
          });
          spinnerModal.stopLoading();
          setIsFavorite(true);
        })
        .catch((err) => {
          console.log(err);
          responseModal.showResultModal("danger", {
            showIcon: true,
            title: "Error al guardar como favorita",
            message: err.response.data,
          });
          spinnerModal.stopLoading();
        });
    }
  };

  const unFavoritePost = async () => {
    spinnerModal.startLoading({ text: "Eliminando de favorito" });
    if (!auth.isAuthenticated) {
      spinnerModal.stopLoading();
      auth.toggleAuthModal();
    } else {
      likeCommentDelete(post.id)
        .then((res) => {
          responseModal.showResultModal("success", {
            showIcon: true,
            title: "Eliminada como favorita",
            message: "La receta ha sido elimintada de tus favoritos",
            onConfirm: () => window.location.reload(),
            confirmText: "Recargar",
          });
          spinnerModal.stopLoading();
          setIsFavorite(false);
        })
        .catch((err) => {
          console.log(err);
          responseModal.showResultModal("danger", {
            showIcon: true,
            title: "Error al eliminar de favoritos",
            message: err.response.data,
          });
          spinnerModal.stopLoading();
        });
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
        responseModal.showResultModal("success", {
          title: "Receta reportada",
          message: "Gracias por ayudarnos a mejorar la comunidad",
          showIcon: true,
        });
        spinnerModal.stopLoading();
      }, 2000);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      <Button
        color={"primary"}
        onClick={isFavorite ? unFavoritePost : favoritePost}
        buttonStyle={isFavorite ? "filled" : "outlined"}
        extraClasses="group col-span-6 flex gap-2 items-center justify-center"
      >
        <Icon
          name="likes"
          className={
            isFavorite
              ? "w-4 fill-white"
              : "w-4 fill-primary group-hover:fill-white"
          }
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
