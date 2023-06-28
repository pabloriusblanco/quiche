import { useState } from "react";
import { Ingredient } from "../../../../types/Recipe";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import Input from "../../../atoms/Inputs/Input";
import InputErrorText from "../../../atoms/Inputs/InputErrorText";
import IngredientsSelect, {
  IngredientPosibleValues,
} from "../../../atoms/Select/IngredientsSelect";
import { TextWeightType, TitleType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import Modal from "../Modal";

interface IngredientsModalProps {
  openModal: () => void;
  closeModal: () => void;
  formik: any;
}

const IngredientsModal = ({
  openModal,
  closeModal,
  formik,
}: IngredientsModalProps) => {
  const [ingredient, setIngredient] = useState<
    IngredientPosibleValues | undefined
  >(undefined);
  const [ingredientQuantity, setIngredientQuantity] = useState<
    number | undefined
  >(undefined);
  const [touched, setTouched] = useState(false);
  const isFormStateValid = ingredient && ingredientQuantity;

  const clearIngredient = () => {
    setIngredient(undefined);
  };

  const changeQuantity = (e: any) => {
    if (e.target.value !== "") {
      const number = parseInt(e.target.value);
      setIngredientQuantity(number);
    } else {
      setIngredientQuantity(undefined);
    }
  };

  const handleSubmit = () => {
    if (!isFormStateValid) {
      setTouched(true);
    } else {
      const ingredientToAdd = {
        ...ingredient,
        quantity: ingredientQuantity,
      };
      formik.setFieldValue("ingredients", [
        ...formik.values.ingredients,
        ingredientToAdd,
      ]);
      clearIngredient();
      setIngredientQuantity(undefined);
      closeModal();
    }
  };

  return (
    <Modal onClose={closeModal} key={"loginModal"}>
      <div className="grid grid-cols-12 gap-5 px-5 py-7">
        <div className="col-span-12 flex flex-col gap-2">
          <div className="col-span-12 mb-2 flex items-center gap-2">
            <Icon name="ingredients" className="w-4 fill-primary" />
            <Title
              color="black"
              text="Agrega tu ingrediente"
              weight={TextWeightType.SemiBold}
              titleType={TitleType.H5}
              className="col-span-12"
            />
          </div>
          <p className="text-[12px] text-black">
            1 - Escribe el nombre y la unidad del ingrediente que necesitas,
            espera unos segundos y aparecerá una lista de sugerencias
            <br />
            Por ejemplo: "Taza de harina".
          </p>
          <div className="mt-2 flex items-center justify-center gap-4 rounded-lg bg-gray-light p-3">
            <div className="flex justify-end">
              <Icon
                name="info"
                color="primary"
                className="w-4 shrink-0 fill-gray-dark"
              />
            </div>
            <p className=" w-4/5 text-[11px] text-gray-dark">
              Si el ingrediente que quieres utilizar no esta en la lista,
              tendrás la opción de "Agregar".
            </p>
          </div>
        </div>
        <div className="col-span-12 mb-1">
          <IngredientsSelect
            placeholder="Taza de harina o 1/2 cebolla"
            field={"ingredientSearch"}
            setIngredient={setIngredient}
            clearIngredient={clearIngredient}
          />
          {!isFormStateValid && touched && !ingredient && (
            <InputErrorText>Ingrese un ingrediente</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <p className="text-[12px] text-black">
            2 - Escribe la cantidad de unidades de tu ingrediente (en numeros) y
            presiona el botón de agregar.
          </p>
        </div>
        <div className="col-span-12 mb-3">
          <Input
            placeholder="Cantidad en numeros"
            type="number"
            onChange={changeQuantity}
          />
          {!isFormStateValid && touched && !ingredientQuantity && (
            <InputErrorText>Ingrese una cantidad en numeros</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <Button
            onClick={handleSubmit}
            color={!isFormStateValid ? "gray" : "primary"}
            extraClasses={`col-span-12 w-full ${
              !isFormStateValid ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Agregar ingrediente a mi receta
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default IngredientsModal;
