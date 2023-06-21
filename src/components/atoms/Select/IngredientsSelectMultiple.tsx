import makeAnimated from "react-select/animated";
import AsyncSelect from "react-select/async";
import { getAllIngredientsByName } from "../../../api/ingredients";
import { Ingredient } from "../../../types/Recipe";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

export interface IngredientsSelectMultipleProps {
  placeholder: string;
  field: string;
  formik: any;
}

const IngredientsSelectMultiple = ({
  placeholder,
  field,
  formik,
}: IngredientsSelectMultipleProps) => {
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

  const onChange = (options: any) => {
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

  return (
    <AsyncSelect
      id={field}
      unstyled
      isMulti
      maxMenuHeight={200}
      noOptionsMessage={() => "No hay opciones"}
      loadingMessage={() => "Cargando..."}
      menuIsOpen={isMenuOpen}
      isClearable
      closeMenuOnSelect
      loadOptions={handleInputChange}
      placeholder={placeholder}
      onChange={onChange}
      components={makeAnimated()}
      classNames={{
        dropdownIndicator: (state) => {
          const response = state.selectProps.menuIsOpen
            ? "text-primary transition-all rotate-180 cursor-pointer"
            : "text-gray transition-all rotate-0 cursor-pointer";
          return response;
        },
        container: () =>
          `w-full transition-all cursor-text rounded-xl border border-gray hover:border-primary px-3 py-[10px] text-[12px] text-black placeholder:text-[12px] placeholder:italic placeholder:text-gray focus:outline-none`,
        control: () => "!min-h-0 flex items-center justify-between",
        valueContainer: () => "flex bg-white gap-2 cursor-text",
        multiValue: () => "bg-primary rounded-lg !overflow-hidden",
        multiValueLabel: () =>
          "text-white py-0.5 !w-auto pl-2 pr-2 whitespace-nowrap ",
        multiValueRemove: () =>
          "text-white bg-primary-light px-2 hover:bg-danger transition-all",
        singleValue: () => "bg-primary rounded-lg text-white w-fit px-2 py-0.5",
        input: () => "text-black ",
        menu: () =>
          "bg-white border rounded-xl shadow-light z-20 fixed p-3 mt-2 transition-all overflow-hidden -translate-x-[10px]",
        menuList: () => "flex flex-col gap-2 h-full overflow-y-auto m-0",
        option: () =>
          "text-black hover:bg-primary-light hover:text-white transition-all rounded-lg p-2 !cursor-pointer",
        noOptionsMessage: () => "text-gray text-left",
        placeholder: () => "text-gray",
        loadingIndicator: () => "text-primary",
        clearIndicator: () => "text-gray cursor-pointer hover:text-danger",
      }}
    />
  );
};

export default IngredientsSelectMultiple;