import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SimpleCreateSelectConfigWithoutValidation } from "./SelectConfig/CategoriesConfig";

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
      classNames={SimpleCreateSelectConfigWithoutValidation}
    />
  );
};

export default SimpleSelect;
