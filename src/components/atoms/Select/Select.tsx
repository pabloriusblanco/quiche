import Select from "react-select";
import ValueType from "react-select";
import OptionTypeBase from "react-select";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";

type Option = {
  value: string;
  label: string;
};

const getClassesForValidation = (validationError?: boolean) => {
  return validationError
    ? "border-danger hover:border-danger-dark focus:border-danger-dark focus-visible:border-danger-dark"
    : "border-gray hover:border-primary focus:border-primary focus-visible:border-primary";
};

export interface CustomSelectProps<T> {
  placeholder: string;
  validationError?: boolean;
  optionsArray: T[];
  valueExtractor: (option: T) => string;
  labelExtractor: (option: T) => string;
  formik: any;
  field: string;
  isMulti?: boolean;
  disabledOption?: string;
}

const CustomSelect = <T,>({
  validationError,
  optionsArray,
  valueExtractor,
  labelExtractor,
  formik,
  placeholder,
  field,
  isMulti = false,
  disabledOption,
}: CustomSelectProps<T>) => {
  let formattedOptions = optionsArray.map((option) => ({
    label: labelExtractor(option),
    value: valueExtractor(option),
  }));

  if (disabledOption) {
    formattedOptions = formattedOptions.filter(
      (option) => option.value !== disabledOption
    );
  }

  useEffect(() => {
    if (disabledOption && formik.values[field].includes(disabledOption)) {
      formik.setFieldValue(
        field,
        formik.values[field].filter((value: string) => value !== disabledOption)
      );
    }
  }, [disabledOption, formik.values]);

  const handleChange = (selectedOptions: any, actionMeta: any) => {
    formik.setFieldValue(
      field,
      isMulti ? getOptionsForMulti(selectedOptions) : selectedOptions.value
    );
  };

  const getOptionsForMulti = (selectedOption: any) => {
    return selectedOption.map((option: Option) => option.value);
  };

  return (
    <Select
      id={field}
      unstyled
      noOptionsMessage={() => "No hay opciones"}
      closeMenuOnSelect={!isMulti}
      isOptionDisabled={(option) =>
        formik.values[field].length >= 4 || option.value === disabledOption
      }
      value={formattedOptions.find(
        (option) => option.value === formik.values[field]
      )}
      isMulti={isMulti}
      placeholder={placeholder}
      options={formattedOptions}
      components={makeAnimated()}
      onChange={handleChange}
      classNames={{
        dropdownIndicator: (state) => {
          const response = state.selectProps.menuIsOpen
            ? "text-primary transition-all rotate-180 cursor-pointer"
            : "text-gray transition-all rotate-0 cursor-pointer";
          return response;
        },
        container: () =>
          `w-full transition-all cursor-text rounded-xl border px-3 py-[10px] text-[12px] text-black placeholder:text-[12px] placeholder:italic placeholder:text-gray focus:outline-none ${getClassesForValidation(
            validationError
          )}`,
        control: () => "!min-h-0 flex items-center justify-between",
        valueContainer: () => "flex bg-white gap-2 cursor-text",
        multiValue: (state) => {
          const isDisabled =
            state.data.value === disabledOption
              ? "bg-danger rounded-lg !overflow-hidden"
              : "bg-primary rounded-lg !overflow-hidden";
          return isDisabled;
        },

        multiValueLabel: () =>
          "text-white py-0.5 !w-auto pl-2 pr-2 whitespace-nowrap ",
        multiValueRemove: () =>
          "text-white bg-primary-light px-2 hover:bg-danger transition-all",
        singleValue: () => "bg-primary rounded-lg text-white w-fit px-2 py-0.5",
        input: () => "text-black ",
        menu: () =>
          "bg-white border rounded-xl shadow-light z-20 fixed p-3 mt-2 max-h-60 transition-all overflow-hidden -translate-x-[10px]",
        menuList: () => "flex flex-col gap-2 h-full overflow-y-auto m-0",
        option: () => {
          const response = !(formik.values[field].length >= 4)
            ? "text-black hover:bg-primary-light hover:text-white transition-all rounded-lg p-2 !cursor-pointer"
            : "text-gray hover:bg-gray-light hover:text-white transition-all rounded-lg p-2 !cursor-not-allowed";
          return response;
        },
        placeholder: () => "text-gray",
        noOptionsMessage: () => "text-gray text-left",
        clearIndicator: () => "text-gray cursor-pointer hover:text-danger",
      }}
    ></Select>
  );
};

export default CustomSelect;
