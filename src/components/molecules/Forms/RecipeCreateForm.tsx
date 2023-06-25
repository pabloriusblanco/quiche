import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { getAllDifficulties } from "../../../api/difficulty";
import useModal from "../../../hooks/useModal";
import { useSpinner } from "../../../hooks/useSpinner";
import { PostResponse, PostResponseRecipe } from "../../../types/Api";
import { Difficulty } from "../../../types/Recipe";
import Button from "../../atoms/Buttons/Button";
import Icon from "../../atoms/Icons/Icons";
import { ImageUpload } from "../../atoms/Inputs/ImageUpload";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import Radio from "../../atoms/Inputs/Radio";
import Textarea from "../../atoms/Inputs/Textarea";
import CategorySelect from "../../atoms/Select/CategorySelect";
import { SelectClassesConfigWithValidation } from "../../atoms/Select/SelectConfig/CategoriesConfig";
import Paragraph from "../../atoms/Text/Paragraph";
import TooltipSimple from "../../atoms/Tooltips/TooltipSimple";
import Wysiwyg from "../../atoms/Wysiwyg/Wysiwyg";
import IngredientsModal from "../Modal/Ingredients/IngredientsModal";
import {
  createRecipeValidationForm,
  tooltipsForValidation,
} from "./validations/CreateRecipeValidationForm";

export type RecipeFormProps = {
  onSubmitCallback: (values: any) => void;
  className?: string;
  post?: PostResponse | null;
};

const RecipeCreateForm = ({
  onSubmitCallback,
  className = "",
  post = null,
}: RecipeFormProps) => {
  const ingredientsModal = useModal();
  const spinner = useSpinner();
  const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
  const { id: defaultId, recipe: defaultRecipe } = post || ({} as PostResponse);
  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
      description: "",
      mainCategoryId: "",
      subcategories: [] as string[],
      difficultyId: "",
      prepTime: "",
      ingredients: [],
      instructions: "",
    },
    validationSchema: createRecipeValidationForm,
    onSubmit: (values) => {
      onSubmitCallback({
        image: values.image,
        name: values.name,
        description: values.description,
        mainCategoryId: values.mainCategoryId,
        subcategories: values.subcategories,
        difficultyId: values.difficultyId,
        prepTime: values.prepTime,
        ingredients: values.ingredients,
        instructions: values.instructions,
      });
    },
  });

  useEffect(() => {
    spinner.startLoading({ text: "Cargando datos..." });
    getAllDifficulties()
      .then((response) => {
        setDifficulties(response);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        spinner.stopLoading();
      });
  }, []);

  const updateFormikValues = () => {
    const {
      image: defaultImage,
      name: defaultName,
      description: defaultDescription,
      mainCategory: defaultMainCategory,
      recipesSubcategories: defaultSubCategories,
      difficulty: defaultDifficulty,
      minutes: defaultMinutes,
      recipesIngredients: defaultIngredients,
      instructions: defaultInstructions,
    } = defaultRecipe;

    formik.setValues({
      ...formik.values,
      image: defaultImage,
      name: defaultName,
      description: defaultDescription,
      mainCategoryId: defaultMainCategory.id.toString(),
      subcategories: defaultSubCategories.map((subCategory) =>
        subCategory.category.id.toString()
      ),
      difficultyId: defaultDifficulty.id.toString(),
      prepTime: defaultMinutes,
      ingredients: defaultIngredients.map((ingredient) => ({
        id: ingredient.ingredient.id.toString(),
        displayName: ingredient.ingredient.displayName,
        quantity: ingredient.quantity,
      })),
      instructions: defaultInstructions,
    });
    formik.isValid = true;    
  };

  useEffect(() => {
    if (defaultRecipe) {
      updateFormikValues();
    }
  }, [defaultRecipe]);

  console.log("formik ----------", formik.values);

  return (
    <>
      {formik && (
        <form
          onSubmit={formik.handleSubmit}
          className={`grid grid-cols-12 gap-5 ${className}`}
        >
          <div className="col-span-6 flex flex-col gap-5">
            <div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" extraClasses="mb-0">
                  Título
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tarta de Zuchinis y queso"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  validationError={!!formik.errors.name && formik.touched.name}
                />
              </div>
              {formik.errors.name && formik.touched.name && (
                <InputErrorText>{formik.errors.name}</InputErrorText>
              )}
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="description" extraClasses="mb-0">
                  Descripción:
                </Label>
                <Textarea
                  id="description"
                  placeholder="Otra opción para preparar una riquísima tarta como almuerzo o cena. Podes acompañarla con una ensalada de hojas verdes o un cremoso puré de papas. ¡Super recomendable!"
                  rows={6}
                  {...formik.getFieldProps("description")}
                  validationError={
                    !!formik.errors.description && formik.touched.description
                  }
                />
              </div>
              {formik.errors.description && formik.touched.description && (
                <InputErrorText>{formik.errors.description}</InputErrorText>
              )}
            </div>
          </div>
          <div className="col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="image" extraClasses="mb-0">
                Foto de tu receta terminada:
              </Label>
              <>
                <div data-tooltip-id={"image_help"}>
                  <Icon name="info" className={`w-3 fill-black  `} />
                </div>
                <TooltipSimple
                  id={"image_help"}
                  text={tooltipsForValidation.image}
                  title={"¡Tips para tu imagen!"}
                />
              </>
            </div>
            <ImageUpload formik={formik} />
            {formik.errors.image && formik.touched.image && (
              <InputErrorText>{formik.errors.image as string}</InputErrorText>
            )}
          </div>
          <div className="col-span-6 flex flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="mainCategoryId" extraClasses="mb-0">
                  Categoría principal:
                </Label>
                <>
                  <div data-tooltip-id={"mainCategoryId"}>
                    <Icon name="info" className={`w-3 fill-black  `} />
                  </div>
                  <TooltipSimple
                    id={"mainCategoryId"}
                    text={tooltipsForValidation.mainCategory}
                    title={"Acerca de la categoría principal"}
                  />
                </>
              </div>
              <div className="flex flex-col gap-2">
                {/* <CustomSelect<Category>
                formik={formik}
                field="mainCategoryId"
                optionsArray={apiOptions.categories}
                placeholder="Selecciona una categoría"
                validationError={
                  !!formik.errors.mainCategoryId &&
                  formik.touched.mainCategoryId
                }
                valueExtractor={(category) => category.id.toString()}
                labelExtractor={(category) => category.displayName}
              /> */}
                <CategorySelect
                  placeholder={"Selecciona una categoría"}
                  formik={formik}
                  field={"mainCategoryId"}
                  classesConfig={SelectClassesConfigWithValidation(
                    !!formik.errors.mainCategoryId &&
                      formik.touched.mainCategoryId,
                    formik.values["mainCategoryId"]
                  )}
                />
              </div>
            </div>
            {formik.errors.mainCategoryId && formik.touched.mainCategoryId && (
              <InputErrorText>{formik.errors.mainCategoryId}</InputErrorText>
            )}
          </div>
          <div className="col-span-6 flex flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="subcategories" extraClasses="mb-0">
                  Categorías secundarias:
                </Label>
                <>
                  <div data-tooltip-id={"subcategories"}>
                    <Icon name="info" className={`w-3 fill-black  `} />
                  </div>
                  <TooltipSimple
                    id={"subcategories"}
                    text={tooltipsForValidation.secondaryCategories}
                    title={"Acerca de las categorías secundarias"}
                  />
                </>
              </div>
              {/* <CustomSelect<Category>
              formik={formik}
              field="subcategories"
              isMulti
              validationError={!!formik.errors.subcategories}
              optionsArray={apiOptions.categories}
              placeholder="Selecciona una categoría"
              valueExtractor={(category) => category.id.toString()}
              labelExtractor={(category) => category.displayName}
              disabledOption={formik.values.mainCategoryId}
            /> */}
              <CategorySelect
                placeholder={"Selecciona categorías secundarias..."}
                formik={formik}
                isMulti
                field={"subcategories"}
                classesConfig={SelectClassesConfigWithValidation(
                  !!formik.errors.mainCategoryId &&
                    formik.touched.mainCategoryId,
                  formik.values["subcategories"],
                  formik.values.mainCategoryId
                )}
              />
            </div>
            {/* {formik.errors.subcategories && formik.touched.subcategories && (
            <InputErrorText>{formik.errors.subcategories}</InputErrorText>
          )} */}
          </div>
          <div className="col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="difficultyId" extraClasses="mb-0">
                Dificultad:
              </Label>
              <>
                <div data-tooltip-id={"difficultyId"}>
                  <Icon name="info" className={`w-3 fill-black  `} />
                </div>
                <TooltipSimple
                  id={"difficultyId"}
                  text={tooltipsForValidation.difficulty}
                />
              </>
            </div>
            <div className="flex h-full items-center justify-between gap-5">
              {difficulties.map((difficulty) => (
                <div className="flex items-center gap-2" key={difficulty.id}>
                  <Radio
                    key={difficulty.id}
                    id={`${difficulty.id.toString()}`}
                    name="difficultyId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={
                      formik.values.difficultyId === difficulty.id.toString()
                    }
                    value={difficulty.id.toString()}
                  />
                  <div className="flex items-baseline gap-2">
                    <Label
                      htmlFor={difficulty.id.toString()}
                      className="cursor-pointer text-[12px] font-medium text-gray"
                    >
                      {difficulty.displayName}
                    </Label>
                    <Icon
                      name={difficulty.icon}
                      className={`w-4 fill-primary`}
                    />
                  </div>
                </div>
              ))}
            </div>
            {formik.errors.difficultyId && formik.touched.difficultyId && (
              <InputErrorText>{formik.errors.difficultyId}</InputErrorText>
            )}
          </div>
          <div className="col-span-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="prepTime" extraClasses="mb-0">
                Tiempo de preparación:
              </Label>
              <Input
                type="text"
                id="prepTime"
                name="prepTime"
                placeholder="En minutos..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prepTime}
                validationError={
                  !!formik.errors.prepTime && formik.touched.prepTime
                }
              />
              {formik.errors.prepTime && formik.touched.prepTime && (
                <InputErrorText>{formik.errors.prepTime}</InputErrorText>
              )}
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="difficultyId" extraClasses="mb-0">
                Ingredientes:
              </Label>
              <>
                <div data-tooltip-id={"difficultyId"}>
                  <Icon name="info" className={`w-3 fill-black  `} />
                </div>
                <TooltipSimple
                  id={"difficultyId"}
                  text={tooltipsForValidation.ingredients}
                />
              </>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
                {formik.values.ingredients.map((element, index) => (
                  <div
                    className="flex w-fit items-center gap-1 overflow-hidden rounded-lg bg-primary"
                    key={index.toString()}
                  >
                    <Paragraph className="px-2 text-[12px] text-white">
                      {`${element.displayName} - x${element.quantity}`}
                    </Paragraph>
                    <button
                      type="button"
                      className="rouded-[0px] bg-primary-light px-2 py-2 hover:bg-danger"
                      onClick={() => {
                        const ingredients = [...formik.values.ingredients];
                        ingredients.splice(index, 1);
                        formik.setFieldValue("ingredients", ingredients);
                      }}
                    >
                      <Icon name="closeIcon" className={`w-2 fill-white`} />
                    </button>
                  </div>
                ))}
              </div>
              <Button
                color="primary"
                type="button"
                buttonStyle="outlined"
                extraClasses="text-[12px] w-[fit-content]"
                onClick={ingredientsModal.openModal}
              >
                {formik.values.ingredients.length === 0
                  ? "+ Agregar ingrediente"
                  : "+ Agregar otro ingrediente"}
              </Button>
              {formik.errors.ingredients && (
                <div className="text-left">
                  <InputErrorText className="relative flex justify-start">
                    Debes agregar al menos un ingrediente
                  </InputErrorText>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-12 mb-2 flex flex-col gap-5">
            <div>
              <Label htmlFor="instructions">Pasos:</Label>
              <Wysiwyg field="instructions" formik={formik} />
              {formik.errors.instructions && formik.touched.instructions && (
                <InputErrorText>{formik.errors.instructions}</InputErrorText>
              )}
            </div>
          </div>
          <Button
            color={!formik.isValid ? "gray" : "primary"}
            type={!formik.isValid ? "button" : "submit"}
            extraClasses={`col-span-12 w-full ${
              !formik.isValid ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Publicar
          </Button>
        </form>
      )}
      {ingredientsModal.isOpen && (
        <IngredientsModal
          openModal={ingredientsModal.openModal}
          closeModal={ingredientsModal.closeModal}
          formik={formik}
        />
      )}
    </>
  );
};

export default RecipeCreateForm;
