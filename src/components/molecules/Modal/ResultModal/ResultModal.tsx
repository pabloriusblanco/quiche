import { useResultModal } from "../../../../hooks/useResultModal";
import Button from "../../../atoms/Buttons/Button";
import Icon, { IconsNames } from "../../../atoms/Icons/Icons";
import Paragraph from "../../../atoms/Text/Paragraph";
import { TextWeightType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import Modal from "../Modal";

interface ResultModalProps {
  key?: string;
}

const ResultModal = ({ key }: ResultModalProps) => {
  const resultModal = useResultModal();
  const {
    title,
    message,
    onCancel,
    onConfirm,
    cancelText,
    confirmText,
    showIcon,
  } = resultModal.content;

  if (!resultModal.showingResultModal) return null;

  return (
    <Modal key={key} onClose={resultModal.hideResultModal}>
      <div className="flex flex-col items-center justify-center gap-2 p-5">
        {showIcon && (
          <Icon
            name={resultModal.modalType as IconsNames}
            className={`mb-2 h-12 fill-${resultModal.modalType}`}
          />
        )}
        {title && (
          <Title
            color="black"
            text={title}
            className="text-center"
            weight={TextWeightType.SemiBold}
          />
        )}

        {message && (
          <Paragraph color="gray" className="text-center text-[11px]">
            {message}
          </Paragraph>
        )}

        <div className="flex w-full items-center justify-center gap-4">
          <Button
            color="secondary"
            onClick={() => {
              resultModal.hideResultModal();
              onCancel && onCancel();
            }}
            extraClasses="mt-4"
          >
            {cancelText ? cancelText : "Cerrar"}
          </Button>
          {onConfirm && (
            <Button
              color="primary"
              onClick={() => {
                resultModal.hideResultModal();
                onConfirm();
              }}
              extraClasses="mt-4"
            >
              {confirmText ? confirmText : "Aceptar"}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;
