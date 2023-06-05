import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import Paragraph from "../../../atoms/Text/Paragraph";
import { TextWeightType, TitleType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import Modal from "../Modal";

interface ShareModalProps {
  closeModal: () => void;
  url: string;
}

const ShareModal = ({ closeModal, url }: ShareModalProps) => {
  const handleShareFacebook = () => {
    // Compartir en Facebook
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(shareUrl, "_blank");
  };

  const handleShareWhatsApp = () => {
    // Compartir en WhatsApp
    const shareText = encodeURIComponent(
      `¡Echa un vistazo a este enlace: ${url}`
    );
    const shareUrl = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(shareUrl, "_blank");
  };

  const handleCopyLink = () => {
    // Copiar enlace al portapapeles
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles");
  };

  return (
    <Modal onClose={closeModal}>
      <div className="flex flex-col justify-center gap-2 p-5">
        <Title
          color="black"
          weight={TextWeightType.Bold}
          text="Compartir esta receta"
          titleType={TitleType.H4}
          className="text-left"
        />
        <Button
          extraClasses="bg-[#3b5998] hover:bg-[#5e7ab6] flex items-center justify-center gap-2"
          onClick={handleShareFacebook}
        >
          <Icon name="facebook" className="w-4 fill-white" />
          Facebook
        </Button>
        <Button
          extraClasses="bg-[#25D366] hover:bg-[#68de93] flex items-center justify-center gap-2"
          onClick={handleShareWhatsApp}
        >
          <Icon name="whatsapp" className="w-4 fill-white" />
          WhatsApp
        </Button>
        <Button
          color="primary"
          extraClasses="flex items-center justify-center gap-2"
          onClick={handleCopyLink}
        >
          <Icon name="link" className="w-4 fill-white" />
          Copiar Enlace
        </Button>
      </div>
    </Modal>
  );
};

export default ShareModal;
