import Input from "../../../atoms/Inputs/Input";
import LabelTooltipAndErrorWrapper from "./LabelTooltipAndErrorWrapper";

type SimpleInputFormProps = {
  inputType: string;
  placeholder: string;
  field: string;
  formik: any;
  touchedValidation?: boolean;
  labelText?: string;
  tooltipText?: {
    text: string;
    title: string;
  };
};

const SimpleInputForm = ({
  formik,
  field,
  placeholder,
  touchedValidation = true,
  inputType,
  labelText,
  tooltipText,
}: SimpleInputFormProps) => {
  return (
    <LabelTooltipAndErrorWrapper
      field={field}
      formik={formik}
      labelText={labelText}
      tooltipText={tooltipText}
    >
      <Input
        type={inputType}
        id={field}
        name={field}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[field]}
        validationError={
          !!formik.errors[field] && touchedValidation && formik.touched[field]
        }
      />
    </LabelTooltipAndErrorWrapper>
  );
};

export default SimpleInputForm;
