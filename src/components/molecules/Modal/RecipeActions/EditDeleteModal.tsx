import { useRef } from "react";
import { deleteRecipe, enableRecipe } from "../../../../api/recipes";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import Icon from "../../../atoms/Icons/Icons";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import Paragraph from "../../../atoms/Text/Paragraph";

interface EditDeleteModalProps {
  id: string;
  isActive?: boolean;
}

const EditDeleteModal = ({ id, isActive }: EditDeleteModalProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resultModal = useResultModal();
  const spinner = useSpinner();

  const tryDeleteRecipe = () => {
    spinner.startLoading({ text: "Eliminando receta..." });
    deleteRecipe(id)
      .then((res) => {
        resultModal.showResultModal("success", {
          title: "Receta eliminada",
          showIcon: true,
          allowClose: false,
          message: "Se eliminó la receta correctamente.",
          onCancel() {
            window.location.reload();
          },
        });
      })
      .catch((err) => {
        console.log("delete recipe error", err);
        resultModal.showResultModal("danger", {
          title: "Error al eliminar receta",
          showIcon: true,
          message: "No se pudo eliminar la receta, intenta de nuevo más tarde.",
        });
      })
      .finally(() => {
        spinner.stopLoading();
      });
  };

  const tryActivateRecipe = () => {
    spinner.startLoading({ text: "Activando receta..." });
    enableRecipe(id)
      .then((res) => {
        resultModal.showResultModal("success", {
          title: "Receta activada",
          showIcon: true,
          allowClose: false,
          message: "Se activó la receta correctamente.",
          onCancel() {
            window.location.reload();
          },
        });
      })
      .catch((err) => {
        console.log("delete recipe error", err);
        resultModal.showResultModal("danger", {
          title: "Error al activar receta",
          showIcon: true,
          message: "No se pudo activar la receta, intenta de nuevo más tarde.",
        });
      })
      .finally(() => {
        spinner.stopLoading();
      });
  };

  return (
    <div
      ref={dropdownRef}
      className="fade-in shadow-light flex w-32 flex-col justify-between rounded-lg bg-white p-3 text-[12px]"
    >
      <LinkContainer
        to={isActive ? `/recipe/${id}` : ""}
        className={`group truncate rounded border-b border-b-gray-light p-2 ${
          isActive ? "" : "cursor-not-allowed"
        }`}
      >
        <Icon
          name="recipes"
          className="mr-2 h-4 w-4 fill-gray group-hover:fill-black "
        />
        <Paragraph
          color="black"
          className="text-gray transition-all group-hover:text-black  "
        >
          Receta
        </Paragraph>
      </LinkContainer>
      <LinkContainer
        to={isActive ? `/recipe/edit/${id}` : ""}
        className={`group rounded border-b border-b-gray-light p-2 ${
          isActive ? "" : "cursor-not-allowed"
        }`}
      >
        <Icon
          name="edit"
          className="mr-2 h-4 w-4 fill-gray group-hover:fill-black"
        />
        <Paragraph
          color="black"
          className="text-gray transition-all group-hover:text-black"
        >
          Editar
        </Paragraph>
      </LinkContainer>
      {!isActive && (
        <div
          color="danger"
          className="group flex cursor-pointer p-2 text-success hover:text-success-dark"
          onClick={() => {
            resultModal.showResultModal("danger", {
              title: "Activar receta",
              showIcon: true,
              message: (
                <>
                  ¿Estás seguro que deseas activar esta receta?
                  <br />
                  Una receta activa aparecerá en la búsquedas y podrá ser accedida directamente.
                  Podrás desactivarla nuevamente en cualquier momento en la sección de <span className="font-bold">Mis recetas</span>.
                </>
              ),
              onConfirm() {
                tryActivateRecipe();
              },
              confirmText: "Habilitar",
            });
          }}
        >
          <Icon
            name="recipes"
            className="mr-2 h-4 w-4 fill-success transition-all group-hover:fill-success-dark "
          />
          Activar
        </div>
      )}
      {isActive && (
        <div
          color="danger"
          className="group flex cursor-pointer p-2 text-danger hover:text-danger-dark"
          onClick={() => {
            resultModal.showResultModal("danger", {
              title: "Desactivar receta",
              showIcon: true,
              message: (
                <>
                  ¿Estás seguro que deseas desactivar esta receta?
                  <br />
                  Una receta desactivada no aparecerá en la búsquedas ni podrá ser accedida directamente.
                  Podrás activarla nuevamente en cualquier momento en la sección de <span className="font-bold">Recetas Desactivadas</span>.
                </>
              ),
              onConfirm() {
                tryDeleteRecipe();
              },
              confirmText: "Eliminar",
            });
          }}
        >
          <Icon
            name="deleteIcon"
            className="mr-2 h-4 w-4 fill-danger transition-all group-hover:fill-danger-dark "
          />
          Desactivar
        </div>
      )}
    </div>
  );
};

export default EditDeleteModal;
