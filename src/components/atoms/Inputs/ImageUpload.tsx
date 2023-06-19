import { useDropzone } from "react-dropzone";
// import { imageValidationErrorsDictionary } from "../../molecules/Forms/validations/CreateRecipeValidationForm";
import Icon from "../Icons/Icons";
import Paragraph from "../Text/Paragraph";
import { imageValidationErrorsDictionary } from "../../molecules/Forms/validations/CreateRecipeValidationForm";

export const ImageUpload = ({ formik }: any) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/jpg": [],
      },
      maxSize: 1024 * 1024 * 1, //1MB
      multiple: false,
      onDropAccepted: (acceptedFiles) => {
        formik.setFieldValue("image", null);
        formik.setFieldValue("image", acceptedFiles[0]);
      },
      onFileDialogCancel: () => {
        formik.setFieldValue("image", null);
      },
      onDropRejected(fileRejections) {
        fileRejections.forEach((fileRejection) => {
          formik.setFieldError(
            "image",
            imageValidationErrorsDictionary[
              fileRejection.errors[0]
                .code as keyof typeof imageValidationErrorsDictionary
            ]
          );
        });
      },
    });

  const imagePreview = acceptedFiles.map((file) => (
    <img
      key={file.name}
      src={URL.createObjectURL(file)}
      className={`h-full ${isDragActive ? "opacity-25" : "opacity-100"} `}
      alt="Preview"
    />
  ));

  return (
    <div
      {...getRootProps()}
      className="group relative flex h-full cursor-pointer items-center overflow-hidden rounded-lg bg-gray-light"
    >
      <input {...getInputProps()} />
      <div
        className="h-full w-full"
        style={
          imagePreview.length > 0
            ? {
                opacity: 0.85,
                backgroundImage: `url("${URL.createObjectURL(
                  acceptedFiles[0]
                )}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(4px)",
                transform: "scale(1.1)",
                backgroundBlendMode: "overlay",
              }
            : { backgroundImage: "none" }
        }
      ></div>
      {imagePreview.length > 0 && (
        <>
          <div className="absolute inset-0 flex h-full flex-col items-center justify-center">
            {imagePreview ? imagePreview : ""}
          </div>
          <div className="absolute inset-0 flex h-full flex-col items-center justify-center">
            <Paragraph
              className={` text-center text-[11px] font-bold text-gray-dark transition-all group-hover:text-gray ${
                !isDragActive ? "opacity-0" : "opacity-100"
              } `}
            >
              ¡Suelta una imagen aquí!
            </Paragraph>
          </div>
        </>
      )}
      {!imagePreview.length && (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Paragraph
              className={`text-center text-[11px] font-bold text-gray-dark transition-all group-hover:text-gray ${
                !isDragActive ? "opacity-0" : "opacity-100"
              } `}
            >
              ¡Suelta la imagen aquí!
            </Paragraph>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon
              name="uploadpicture"
              className={`w-20 fill-gray-dark transition-all group-hover:w-24 group-hover:fill-gray-200 ${
                !isDragActive ? "opacity-100" : "opacity-0"
              }`}
            />
            <Paragraph
              className={`mt-5  text-center text-[11px] text-gray-dark transition-all group-hover:text-gray ${
                !isDragActive ? "opacity-100" : "opacity-0"
              } `}
            >
              Arrastra y suelta una imagen aquí, o haz clic para seleccionar una
              imagen
            </Paragraph>
          </div>
        </>
      )}
    </div>
  );
};
