import { useEffect, useState } from "react";
import { useAuth } from "../../../../../hooks/useAuth";
import Button from "../../../../atoms/Buttons/Button";
import { deleteDraft, getDraft } from "../../../../../api/drafts";
import Icon from "../../../../atoms/Icons/Icons";
import Paragraph from "../../../../atoms/Text/Paragraph";
import { useNavigate } from "react-router-dom";

type recipeDraftAlertProps = {
  id?: string;
  // showingDraftAlert: boolean;
};

const RecipeDraftAlert = ({ id }: recipeDraftAlertProps) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isThereADraft, setIsThereADraft] = useState(false);
  const [showingDraftAlert, setShowingDraftAlert] = useState(false);

  const hideDraftAlert = () => {
    setIsThereADraft(false);
    setShowingDraftAlert(false);
  };

  useEffect(() => {
    if (auth.isAuthenticated && !auth.isLoading) {
      getDraft()
        .then((res) => {
          if (res != null) {
            sessionStorage.setItem("recipeDraft", res.draft);
            setIsThereADraft(true);
            setShowingDraftAlert(true);
            document.addEventListener("hideDraftEvent", hideDraftAlert);
            return () => {
              document.removeEventListener(
                "hideDraftEvent",
                hideDraftAlert
              );
            };
          } else {
            sessionStorage.removeItem("recipeDraft");
            setIsThereADraft(false);
            setShowingDraftAlert(false);
          }
        })
        .catch((err) => {
          console.log(err);
          sessionStorage.removeItem("recipeDraft");
          setIsThereADraft(false);
          setShowingDraftAlert(false);
        });
    }
  }, [auth.isAuthenticated]);

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
    <div className="relative z-10 h-0">
      {isThereADraft && (
        <div
          className={`py-2 text-center text-[12px] transition-all duration-300 ${
            showingDraftAlert
              ? "bg-gradient-to-r from-primary to-[#F09E23] opacity-100"
              : "bg-transparent"
          }`}
        >
          <div
            className={`container relative flex h-[25px] items-center justify-start gap-2 `}
          >
            <div
              className={`cursor-pointer rounded-full border-2 duration-300 ${
                showingDraftAlert
                  ? " border-primary bg-transparent p-1"
                  : " border-primary-light bg-primary p-1"
              }`}
              onClick={() => {
                setShowingDraftAlert(!showingDraftAlert);
              }}
            >
              <div className="flex items-center justify-center">
                <Icon
                  name="info"
                  className={`relative z-10 w-4 fill-white ${
                    showingDraftAlert ? "" : ""
                  }`}
                />
                <span
                  className={`${
                    showingDraftAlert ? "hidden" : "block"
                  } z-5 absolute h-6 w-6 animate-ping rounded-full bg-primary opacity-75`}
                ></span>
              </div>
            </div>
            <div
              className={`flex items-center transition-all duration-75 ${
                showingDraftAlert ? "opacity-100" : "opacity-0"
              } overflow-hidden`}
            >
              <div className="mr-4 flex items-center">
                <Paragraph color="black" className="text-[12px] text-white">
                  ¡Hay un <span className="font-medium"> borrador </span> de
                  receta!
                </Paragraph>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setShowingDraftAlert(false);
                    navigate("/recipe/create?recipeDraft=true");
                  }}
                  extraClasses="text-[11px] !py-1 bg-white hover:bg-primary-light !text-black hover:!text-white"
                >
                  Continuar con mi receta
                </Button>
                <Button
                  color="danger"
                  extraClasses="text-[11px] !py-1"
                  onClick={() => {
                    sessionStorage.removeItem("recipeDraft");
                    deleteCurrentDraft();
                    setIsThereADraft(false);
                  }}
                >
                  Eliminar borrador
                </Button>
              </div>
              <div
                className="absolute right-0 rounded-full border border-white"
                onClick={() => {
                  setShowingDraftAlert(false);
                }}
              >
                <Icon
                  name="closeIcon"
                  className="w-4 cursor-pointer fill-white p-[4px] transition-all hover:w-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDraftAlert;
