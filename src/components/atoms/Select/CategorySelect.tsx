import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
  classesConfig?: object;
}

const CategorySelect = ({
  formik,
  placeholder,
  field,
  isMulti,
  classesConfig,
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

  const handleChange = (selectedOptions: any, actionMeta: any) => {
    if (actionMeta.action === "clear") {
      formik.setFieldValue(field, isMulti ? [] : "");
      return;
    }
    formik.setFieldValue(
      field,
      isMulti
        ? selectedOptions.map((option: Option) => option.value)
        : selectedOptions.value
    );
  };

  return (
    <Select
      id={field}
      unstyled
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
      maxMenuHeight={200}
      noOptionsMessage={() => "No hay opciones"}
      loadingMessage={() => "Cargando..."}
      isOptionDisabled={() => formik.values[field].length >= 4}
      isClearable={true}
      options={categories.map((category) => ({
        label: category.displayName,
        value: category.id.toString(),
      }))}
      value={
        // isMulti && formik.values[field].length >= 4
        //   ? []
        //   :
        categories
          .map((category) => ({
            label: category.displayName,
            value: category.id.toString(),
          }))
          .filter((option) =>
            isMulti
              ? formik.values[field].includes(option.value)
              : option.value === formik.values[field]
          )
      }
      placeholder={placeholder}
      onChange={handleChange}
      components={makeAnimated()}
      classNames={classesConfig}
    />
  );
};

export default CategorySelect;
