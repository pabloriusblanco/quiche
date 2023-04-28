import MemoQuicheLogoPrimary from "../../../assets/logos/quiche-logo-primary";
import Button from "../../../components/Buttons/Button";
import LinkBasic from "../../../components/Link/LinkBasic";
import LinkContainer from "../../../components/Link/LinkContainer";
import NavLinksContainer from "./NavLinksContainer";

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-light bg-white p-4">
      <div className="sm:px-6 mx-auto flex max-w-7xl items-center justify-between px-2 lg:px-8">
        <LinkContainer className="w-[106px]" to="/">
          <MemoQuicheLogoPrimary fill="primary" hover="primary-light" />
        </LinkContainer>
        <NavLinksContainer>
          <LinkBasic to="/">Home</LinkBasic>
          <LinkBasic to="/">Buscar Recetas</LinkBasic>
          <LinkBasic to="/">Crear Recetas</LinkBasic>
          <LinkBasic to="/">Nosotros</LinkBasic>
          <Button
            buttonType="primary"
            onClick={() => {
              alert("LoginModal");
            }}
          >
            Login
          </Button>
        </NavLinksContainer>
      </div>
    </nav>
  );
};

export default Navbar;
