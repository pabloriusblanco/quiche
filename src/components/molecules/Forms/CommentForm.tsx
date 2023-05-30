import Button from "../../atoms/Buttons/Button";
import { Field, FormikProvider, useFormik } from "formik";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import { CommentValidationForm } from "./validations/CommentValidationForm";
import Textarea from "../../atoms/Inputs/Textarea";

interface CommentFormProps {
  onSubmitCallback: (comment: string) => Promise<void>;
  className?: string;
}

const CommentForm = ({ onSubmitCallback, className }: CommentFormProps) => {
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: CommentValidationForm,
    onSubmit: (values) => {
      onSubmitCallback(values.comment);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className ? className : ""}>
      <div className="col-span-12">
        <Label htmlFor="comment">Comentario:</Label>
        <Textarea
          id="comment"
          placeholder="Escribe un comentario..."
          {...formik.getFieldProps("comment")}
          validationError={!!formik.errors.comment && formik.touched.comment}
        />
        {formik.errors.comment && formik.touched.comment && (
          <InputErrorText>{formik.errors.comment}</InputErrorText>
        )}
      </div>
      <Button
        color={!formik.isValid ? "gray" : "primary"}
        type="submit"
        extraClasses="w-full"
      >
        Enviar
      </Button>
    </form>
  );
};

export default CommentForm;
