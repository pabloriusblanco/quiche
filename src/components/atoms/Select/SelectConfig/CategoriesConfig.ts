const getClassesForValidation = (validationError?: boolean) => {
  return validationError
    ? "border-danger hover:border-danger-dark focus:border-danger-dark focus-visible:border-danger-dark"
    : "border-gray hover:border-primary focus:border-primary focus-visible:border-primary";
};

export const SelectClassesConfigWithValidation = (
  validationError: boolean,
  fieldValues: any,
  disabledOption?
) => {
  return {
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
    multiValue: (state: any) => {
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
      const response = !(fieldValues.length >= 4)
        ? "text-black hover:bg-primary-light hover:text-white transition-all rounded-lg p-2 !cursor-pointer"
        : "text-gray hover:bg-gray-light hover:text-white transition-all rounded-lg p-2 !cursor-not-allowed";
      return response;
    },
    placeholder: () => "text-gray",
    noOptionsMessage: () => "text-gray text-left",
    clearIndicator: () => "text-gray cursor-pointer hover:text-danger",
  };
};

export const SimpleSelectCategoryClassesConfig = (fieldValues: any) => {
  return {
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
      const response = !(fieldValues.length >= 4)
        ? "text-black hover:bg-primary-light hover:text-white transition-all rounded-lg p-2 !cursor-pointer"
        : "text-gray hover:bg-gray-light hover:text-white transition-all rounded-lg p-2 !cursor-not-allowed";
      return response;
    },
    noOptionsMessage: () => "text-gray text-left",
    placeholder: () => "text-gray",
    loadingIndicator: () => "text-primary",
    clearIndicator: () => "text-gray cursor-pointer hover:text-danger",
  };
};

export const SimpleCreateSelectConfigWithoutValidation = {
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
}