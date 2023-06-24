import Select from "react-select";
import makeAnimated from "react-select/animated";

type Option = {
  value: string;
  label: string;
};

export interface SimpleSelectProps<T> {
  placeholder: string;
  optionsArray: T[];
  callbackHandleChange: (option: Option | null) => void;
  valueExtractor: (option: T) => string;
  labelExtractor: (option: T) => string;
  field: string;
  isMulti?: boolean;
}

const SimpleSelect = <T,>({
  optionsArray,
  placeholder,
  valueExtractor,
  labelExtractor,
  field,
  isMulti = false,
  callbackHandleChange,
}: SimpleSelectProps<T>) => {
  const handleChange = (selectedOptions: Option | null, actionMeta: any) => {
    callbackHandleChange(selectedOptions);
  };

  return (
    <Select
      id={field}
      unstyled
      isClearable
      noOptionsMessage={() => "No hay opciones"}
      closeMenuOnSelect={true}
      isMulti={isMulti}
      placeholder={placeholder}
      options={optionsArray.map((option) => ({
        value: valueExtractor(option),
        label: labelExtractor(option),
      }))}
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

export default SimpleSelect;
