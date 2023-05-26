import Paragraph from "../../../atoms/Text/Paragraph";

const Footer = () => {
  return (
    <footer
      className="mt-10  p-5 text-center"
      style={{
        background: "linear-gradient(90deg, #F0BA23 41.37%, #F09E23 101.59%)",
      }}
    >
      <Paragraph color="white">{`© ${new Date().getFullYear()} Copyright: Quiche y QuicheApp son una marca registrada. Todos los derechos reservados.`}</Paragraph>
    </footer>
  );
};

export default Footer;
