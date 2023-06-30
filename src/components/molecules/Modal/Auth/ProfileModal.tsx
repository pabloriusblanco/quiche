import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { useSpinner } from "../../../../hooks/useSpinner";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import Paragraph from "../../../atoms/Text/Paragraph";

interface ProfileModalProps {
  username: string;
}

const ProfileModal = () => {
  const auth = useAuth();
  const spinnerModal = useSpinner();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const logout = async () => {
    spinnerModal.startLoading({ text: "Cerrando sesión" });
    const result = await auth.signOut();
    if (result.success) {
      console.log("loggedOUT", auth.isAuthenticated);
      spinnerModal.stopLoading();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <Button color="primary" onClick={handleDropdownToggle}>
        Mi cuenta
      </Button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fade-in absolute right-0 top-10 min-w-[160px] rounded-2xl bg-white p-3 text-[12px] shadow-md"
        >
          {/* <LinkContainer
            to="/profile"
            className="group cursor-not-allowed rounded border-b border-b-gray-light bg-gray-light p-2"
          >
            <Icon name="userchecked" className="mr-2 h-4 w-4 fill-gray " />
            <Paragraph color="black" className="text-gray transition-all  ">
              Perfil
            </Paragraph>
          </LinkContainer> */}
          <LinkContainer
            to="/favorites"
            className="group rounded border-b  border-b-gray-light p-2 "
          >
            <Icon
              name="likes"
              className="mr-2 h-4 w-4 fill-black group-hover:fill-primary"
            />
            <Paragraph
              color="black"
              className="text-black transition-all group-hover:text-primary "
            >
              Favoritos
            </Paragraph>
          </LinkContainer>
          <LinkContainer
            to="/myrecipes"
            className="group rounded border-b  border-b-gray-light p-2 "
          >
            <Icon
              name="recipes"
              className="mr-2 h-4 w-4 fill-black group-hover:fill-primary"
            />
            <Paragraph
              color="black"
              className="text-black transition-all group-hover:text-primary "
            >
              Mis recetas
            </Paragraph>
          </LinkContainer>
          <Button
            color="primary"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              logout();
            }}
            extraClasses="w-full flex"
          >
            <Icon
              name="logout"
              className="mr-2 h-4 w-4 fill-white group-hover:fill-primary"
            />
            Salir
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
