import { useEffect, useRef, useState } from "react";
import makeAnimated from "react-select/animated";
import AsyncSelect from "react-select/async";
import { getAllIngredientsByName } from "../../../api/ingredients";
import { Ingredient } from "../../../types/Recipe";
import { SelectConfigIngredients } from "./SelectConfig/IngredientsConfig";

type Option = {
  value: string;
  label: string;
};

export interface IngredientsSelectMultipleProps {
  placeholder: string;
  field: string;
  formik: any;
  defaultIngredient?: Option;
}

const IngredientsSelectMultiple = ({
  placeholder,
  field,
  formik,
  defaultIngredient = undefined,
}: IngredientsSelectMultipleProps) => {
  const selectRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const getIngredients = (value: string): Promise<Ingredient[]> => {
    return getAllIngredientsByName(value)
      .then((response) => response) // Assuming the response contains the data property with the array of ingredients
      .catch((error) => {
        console.log(error);
        return []; // Return an empty array as a fallback in case of an error
      });
  };

  const handleInputChange = async (inputValue: string, action) => {
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
            if (options.length == 0) {
              setTimeout(() => {
                setIsMenuOpen(false);
              }, 2000);
            }
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

  const onChange = (options: any, action) => {
    if (options.length === 0) {
      formik.setFieldValue(field, []);
      setIsMenuOpen(false);
    } else {
      formik.setFieldValue(
        field,
        options.map((option: any) => option.value)
      );
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (defaultIngredient && selectRef.current) {
      selectRef.current.setValue([defaultIngredient]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClearSearchForm = () => {
      if (selectRef.current) {
        selectRef.current.clearValue();
      }
    };

    document.addEventListener("clearSearchForm", handleClearSearchForm);
    return () => {
      document.removeEventListener("clearSearchForm", handleClearSearchForm);
    };
  }, []);

  return (
    <AsyncSelect
      ref={(el) => {
        selectRef.current = el;
      }}
      id={field}
      unstyled
      isMulti
      maxMenuHeight={200}
      noOptionsMessage={() => "No hay opciones"}
      loadingMessage={() => "Cargando..."}
      menuIsOpen={isMenuOpen}
      isClearable
      // defaultInputValue={defaultIngredient ? defaultIngredient.label : ""}
      closeMenuOnSelect
      loadOptions={handleInputChange}
      placeholder={placeholder}
      onChange={onChange}
      components={makeAnimated()}
      classNames={SelectConfigIngredients}
    />
  );
};

export default IngredientsSelectMultiple;
