import { useEffect, useRef, useState } from "react";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import Paragraph from "../../../atoms/Text/Paragraph";
import { deleteRecipe } from "../../../../api/recipes";

interface EditDeleteModalProps {
  id: string;
}

const EditDeleteModal = ({ id }: EditDeleteModalProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resultModal = useResultModal();
  const spinner = useSpinner();

  const tryDeleteRecipe = () => {
    spinner.startLoading({ text: "Eliminando receta..." });
    deleteRecipe(id)
      .then((res) => {
        console.log("delete recipe response", res);
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

  return (
    <div
      ref={dropdownRef}
      className="fade-in shadow-light flex flex-col justify-between rounded-lg bg-white p-3 text-[12px]"
    >
      <LinkContainer
        to={`/recipe/${id}`}
        className="group truncate rounded border-b border-b-gray-light  p-2"
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
        to={`/recipe/edit/${id}`}
        className="group rounded border-b border-b-gray-light  p-2"
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
      <div
        color="danger"
        className="group flex cursor-pointer p-2 text-danger hover:text-danger-dark"
        onClick={() => {
          resultModal.showResultModal("danger", {
            title: "Eliminar receta",
            showIcon: true,
            message: (
              <>
                ¿Estás seguro que deseas eliminar esta receta?
                <br />
                ¡Si la eliminas no podrás recuperarla!
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
        Elimiar
      </div>
    </div>
  );
};

export default EditDeleteModal;
