import { useFormik } from "formik";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../atoms/Buttons/Button";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import RegisterFormContainer from "./RegisterFormContainer";
import { registerFormValidationSchema } from "./validations/RegisterFormValidation";

type RegisterFormProps = {
  onSubmit: (values: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    repeat_password: string;
  }) => void;
  closeModal: () => void;
  handleLoginClick: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  closeModal,
  handleLoginClick,
}: RegisterFormProps) => {
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      repeat_password: "",
    },
    validationSchema: registerFormValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = async (values: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    repeat_password: string;
  }) => {
    const { name, lastname, email, phone, password } = values;
    const result = await auth.signUp(name, lastname, email, phone, password);
    if (result.success) {
      console.log(result);
      closeModal();
    } else {
      console.log(result);
      alert(result.message);
    }
  };

  return (
    <RegisterFormContainer>
      <form
        onSubmit={formik.handleSubmit}
        className="col-span-12 grid grid-cols-12 gap-5"
      >
        <div className="col-span-12">
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="name"
            id="name"
            name="name"
            placeholder="Juan"
            // defaultValue="Pablo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            validationError={!!formik.errors.name && formik.touched.name}
          />
          {formik.errors.name && formik.touched.name && (
            <InputErrorText>{formik.errors.name}</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <Label htmlFor="lastname">Apellido</Label>
          <Input
            type="lastname"
            id="lastname"
            name="lastname"
            placeholder="Perez"
            // defaultValue="Rius"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            validationError={
              !!formik.errors.lastname && formik.touched.lastname
            }
          />
          {formik.errors.lastname && formik.touched.lastname && (
            <InputErrorText>{formik.errors.lastname}</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="juanperez@ejemplo.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            // defaultValue="pabloriusblanco@gmail.com"
            validationError={!!formik.errors.email && formik.touched.email}
          />
          {formik.errors.email && formik.touched.email && (
            <InputErrorText>{formik.errors.email}</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            type="phone"
            id="phone"
            name="phone"
            placeholder="+541166778899"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            // defaultValue="+541166778899"
            validationError={!!formik.errors.phone && formik.touched.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <InputErrorText>{formik.errors.phone}</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            // defaultValue="12345678"
            validationError={
              !!formik.errors.password && formik.touched.password
            }
          />
          {formik.errors.password && formik.touched.password && (
            <InputErrorText>{formik.errors.password}</InputErrorText>
          )}
        </div>
        <div className="col-span-12">
          <Label htmlFor="repeat_password">Repeat Password</Label>
          <Input
            type="password"
            id="repeat_password"
            name="repeat_password"
            placeholder="*******"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeat_password}
            // defaultValue="12345678"
            validationError={
              !!formik.errors.repeat_password && formik.touched.repeat_password
            }
          />
          {formik.errors.repeat_password && formik.touched.repeat_password && (
            <InputErrorText>{formik.errors.repeat_password}</InputErrorText>
          )}
        </div>
        <Button
          color={!formik.isValid ? "gray" : "primary"}
          type="submit"
          className="w-full col-span-12"
        >
          Regístrate
        </Button>
        <div className="col-span-12">
          <p className="col-span-12 cursor-pointer text-right text-sm text-gray">
            ¿Ya tienes cuenta?
            <span
              className="ml-1 text-primary underline"
              onClick={() => {
                closeModal();
                handleLoginClick();
              }}
            >
              Inicia Sesión
            </span>
          </p>
        </div>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
