import makeAnimated from "react-select/animated";
import AsyncCreatableSelect from "react-select/async-creatable";
import { getAllIngredientsByName } from "../../../api/ingredients";
import { Ingredient } from "../../../types/Recipe";
import { useState } from "react";
import { SelectConfigIngredients } from "./SelectConfig/IngredientsConfig";

type Option = {
  value: string;
  label: string;
};

export type IngredientPosibleValues = Ingredient | { displayName: string };

export interface IngredientsSelectProps {
  placeholder: string;
  field: string;
  setIngredient: (ingredient?: IngredientPosibleValues) => void;
  clearIngredient: () => void;
}

const IngredientsSelect = ({
  placeholder,
  field,
  setIngredient,
  clearIngredient,
}: IngredientsSelectProps) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const getIngredients = (value: string): Promise<Ingredient[]> => {
    console.log("disparo a la api", value);

    return getAllIngredientsByName(value)
      .then((response) => response) // Assuming the response contains the data property with the array of ingredients
      .catch((error) => {
        console.log(error);
        return []; // Return an empty array as a fallback in case of an error
      });
  };

  const handleInputChange = async (inputValue: string) => {
    return new Promise<
      {
        value: string;
        label: string;
      }[]
    >((resolve, reject) => {
      try {
        clearTimeout(timeoutId);
        if (inputValue.length > 3) {
          setIsMenuOpen(true);
          const timeout = setTimeout(async () => {
            const options = (await getIngredients(inputValue)).map(
              (ingredient: Ingredient) => ({
                value: ingredient.id.toString(),
                label: ingredient.displayName,
              })
            );
            resolve(options);
          }, 1000);
          setTimeoutId(timeout);
        } else {
          resolve([]);
          setIsMenuOpen(false);
        }
      } catch (error) {
        console.log(error);
        reject(error);
        setIsMenuOpen(false);
      }
    });
  };

  const onChange = (option: any) => {
    if (!option) {
      clearIngredient();
      return;
    } else if (option && option.__isNew__) {
      setIngredient({
        displayName: (option as Option).label,
      });
    } else {
      setIngredient({
        id: (option as Option).value,
        displayName: (option as Option).label,
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <AsyncCreatableSelect
      id={field}
      unstyled
      maxMenuHeight={200}
      noOptionsMessage={() => "No hay opciones"}
      loadingMessage={() => "Cargando..."}
      menuIsOpen={isMenuOpen}
      allowCreateWhileLoading={false}
      formatCreateLabel={(inputValue: string) => `Agregar "${inputValue}"`}
      isClearable
      closeMenuOnSelect
      loadOptions={handleInputChange}
      placeholder={placeholder}
      onChange={onChange}
      components={makeAnimated()}
      classNames={SelectConfigIngredients}
    />
  );
};

export default IngredientsSelect;
