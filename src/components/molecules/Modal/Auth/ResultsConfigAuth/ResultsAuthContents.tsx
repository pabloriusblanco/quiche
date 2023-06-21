import {
  ResultModalContent,
  ResultModalsContextType,
} from "../../../../../context/ResultModalsContext";
import { SpinnerContextType } from "../../../../../context/SpinnerContext";
import { AuthResult } from "../../../../../hooks/useAuth";
import { PreloadRegisterValues } from "../../../Forms/Auth/RegisterForm";
import { loginModalSuccessContent } from "./LoginResultsMapper";
import { registerModalSuccessContent } from "./RegisterResultsMapper";

export const loginResultMapper = (
  result: AuthResult,
  resultModal: ResultModalsContextType,
  spinnerModal: SpinnerContextType,
  openResendCodeModal: () => void,
  reOpenModal?: () => void
) => {
  if (result.success) {
    spinnerModal.stopLoading();
    resultModal.showResultModal(
      "success",
      loginModalSuccessContent(result.data.username)
    );
  } else {
    let action;
    switch (result.action) {
      case "reOpenModal":
        action = reOpenModal;
        break;
      case "resendConfirmationCode":
        action = openResendCodeModal;
        break;
      default:
        action = undefined;
        break;
    }
    spinnerModal.stopLoading();
    resultModal.showResultModal(
      "danger",
      genericErrorModalContent(result.message, action)
    );
  }
};

export const registerResultMapper = (
  result: AuthResult,
  resultModal: ResultModalsContextType,
  spinnerModal: SpinnerContextType,
  setPreloadedValues: (preloadedValues: PreloadRegisterValues) => void,
  reOpenModal?: () => void
) => {
  if (result.success) {
    spinnerModal.stopLoading();
    setPreloadedValues({
      username: "",
      name: "",
      lastname: "",
      email: "",
    });
    resultModal.showResultModal("success", registerModalSuccessContent());
  } else {
    spinnerModal.stopLoading();
    resultModal.showResultModal(
      "danger",
      genericErrorModalContent(result.message, reOpenModal)
    );
  }
};

export const genericErrorModalContent = (
  message: string,
  openModal?: () => void
): ResultModalContent => {
  return {
    title: "Ha sucedio un error",
    message: message,
    showIcon: true,
    onCancel: openModal,
  };
};
