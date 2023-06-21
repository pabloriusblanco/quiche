import { useState, useEffect } from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { getAllCategories } from "../../../api/categories";
import { Category } from "../../../types/Recipe";

type Option = {
  value: string;
  label: string;
};

export interface CategorySelectProps {
  placeholder: string;
  formik: any;
  field: string;
  disabledOption?: string;
  isMulti?: boolean;
}

const CategorySelect = ({
  formik,
  placeholder,
  field,
  isMulti,
}: CategorySelectProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
        return []; // Return an empty array as a fallback in case of an error
      });
  }, []);

  const onChange = (options: any) => {
    if (!options || options.length === 0) {
      formik.setFieldValue(field, isMulti ? [] : "");
    } else {
      formik.setFieldValue(
        field,
        isMulti ? options.map((option: any) => option.value) : options.value
      );
    }
  };

  return (
    <Select
      id={field}
      unstyled
      isMulti={isMulti}
      maxMenuHeight={200}
      noOptionsMessage={() => "No hay opciones"}
      loadingMessage={() => "Cargando..."}
      isOptionDisabled={() => formik.values[field].length >= 4}
      isClearable={true}
      closeMenuOnSelect={!isMulti}
      options={categories.map((category) => ({
        label: category.displayName,
        value: category.id.toString(),
      }))}
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
        option: () => {
          const response = !(formik.values[field].length >= 4)
            ? "text-black hover:bg-primary-light hover:text-white transition-all rounded-lg p-2 !cursor-pointer"
            : "text-gray hover:bg-gray-light hover:text-white transition-all rounded-lg p-2 !cursor-not-allowed";
          return response;
        },
        noOptionsMessage: () => "text-gray text-left",
        placeholder: () => "text-gray",
        loadingIndicator: () => "text-primary",
        clearIndicator: () => "text-gray cursor-pointer hover:text-danger",
      }}
    ></Select>
  );
};

export default CategorySelect;
