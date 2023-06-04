import { useFormik } from "formik";
import Button from "../../atoms/Buttons/Button";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import RegisterFormContainer from "./RegisterFormContainer";
import { registerFormValidationSchema } from "./validations/RegisterFormValidation";

export type RegisterValues = {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  repeat_password: string;
};

export type PreloadRegisterValues = Omit<
  RegisterValues,
  "password" | "repeat_password"
>;

type RegisterFormProps = {
  onSubmitCallback: (
    username: string,
    name: string,
    lastname: string,
    email: string,
    password: string
  ) => Promise<void>;
  closeModal: () => void;
  handleLoginClick: () => void;
  preloadedValues: PreloadRegisterValues;
  extraClasses?: string;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmitCallback,
  closeModal,
  handleLoginClick,
  preloadedValues,
  extraClasses,
}: RegisterFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: preloadedValues.username,
      name: preloadedValues.name,
      lastname: preloadedValues.lastname,
      email: preloadedValues.email,
      password: "",
      repeat_password: "",
    },
    validationSchema: registerFormValidationSchema,
    onSubmit: (values) => {
      onSubmitCallback(
        values.username,
        values.name,
        values.lastname,
        values.email,
        values.password
      );
    },
  });

  return (
    <RegisterFormContainer>
      <form
        onSubmit={formik.handleSubmit}
        className={
          extraClasses
            ? extraClasses
            : "col-span-12 grid max-h-[80vh] grid-cols-12 gap-5 overflow-y-auto"
        }
      >
        <div className="col-span-12">
          <Label htmlFor="username">Usuario</Label>
          <Input
            type="username"
            id="username"
            name="username"
            placeholder="Juan94"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            validationError={
              !!formik.errors.username && formik.touched.username
            }
          />
          {formik.errors.username && formik.touched.username && (
            <InputErrorText>{formik.errors.username}</InputErrorText>
          )}
        </div>
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
        {/* <div className="col-span-12">
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
          </div> */}
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
          extraClasses="col-span-12 w-full"
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
