import Icon from "../../../atoms/Icons/Icons";
import InputErrorText from "../../../atoms/Inputs/InputErrorText";
import Label from "../../../atoms/Inputs/Label";
import TooltipSimple from "../../../atoms/Tooltips/TooltipSimple";

type LabelTooltipAndErrorWrapperProps = {
  field: string;
  formik: any;
  touchedValidation?: boolean;
  labelText?: string;
  tooltipText?: {
    text: string;
    title: string;
  };
  children: React.ReactNode;
};

const LabelTooltipAndErrorWrapper = ({
  formik,
  field,
  touchedValidation = true,
  labelText,
  tooltipText,
  children,
}: LabelTooltipAndErrorWrapperProps) => {
  return (
    <div className="flex flex-col gap-1">
      {labelText && (
        <Label htmlFor={field} extraClasses="mb-0">
          {labelText}
        </Label>
      )}
      {tooltipText && (
        <div className="flex items-center gap-1">
          <Label htmlFor="subcategories" extraClasses="mb-0">
            Categorías secundarias:
          </Label>
          <>
            <div data-tooltip-id={`tooltip${field}`}>
              <Icon name="info" className={`w-3 fill-black  `} />
            </div>
            <TooltipSimple
              id={`tooltip${field}`}
              text={tooltipText.text}
              title={tooltipText.title}
            />
          </>
        </div>
      )}
      {children}
      {formik.errors[field] && touchedValidation && formik.touched[field] && (
        <InputErrorText>{formik.errors[field]}</InputErrorText>
      )}
    </div>
  );
};

export default LabelTooltipAndErrorWrapper;
