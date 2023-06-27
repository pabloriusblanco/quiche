import { useFormik } from "formik";
import { AdvanceSearchQuery } from "../../../../types/Api";
import Button from "../../../atoms/Buttons/Button";
import IngredientsSelectMultiple from "../../../atoms/Select/IngredientsSelectMultiple";
import Paragraph from "../../../atoms/Text/Paragraph";
import LabelTooltipAndErrorWrapper from "../GeneralForms/LabelTooltipAndErrorWrapper";
import SimpleInputForm from "../GeneralForms/SimpleInputForm";
import { AdvanceSearchValidationForm } from "../validations/AdvanceSearchValidationForm";
import AdvanceCategoriesSearch from "./AdvanceCategoriesSearch";
import AdvanceDifficultySearch from "./AdvanceDifficultySearch";
import AdvanceDurationSearch from "./AdvanceDurationSearch";
import AdvanceRatingSearch from "./AdvanceRatingSearch";

export type AdvanceSearchFormQuery = Omit<AdvanceSearchQuery, "PageNumber">;

interface AdvanceSearchProps {
  onSubmitCallback: (values: AdvanceSearchFormQuery) => void;
  initialValues: AdvanceSearchDefaultFormValues;
  filterOpen: boolean;
  setFilterOpen: (value: boolean) => void;
}

export type AdvanceSearchDefaultFormValues = {
  name?: string;
  category?: string;
  ingredientid?: string;
  ingredientname?: string;
  username?: string;
};

const isFormValid = (formik: any) => {
  const {
    name,
    username,
    mainCategory,
    secondaryCategories,
    ingredients,
    timeFrom,
    timeTo,
    difficulty,
    ratingFrom,
    ratingTo,
  } = formik.values;

  return (
    name ||
    username ||
    mainCategory ||
    secondaryCategories.length > 0 ||
    ingredients.length > 0 ||
    timeFrom ||
    timeTo ||
    difficulty ||
    ratingFrom ||
    ratingTo
  );
};

const AdvanceSearch = ({
  onSubmitCallback,
  initialValues,
  filterOpen,
  setFilterOpen,
}: AdvanceSearchProps) => {
  const {
    name: defaultName,
    category: defaultCategory,
    ingredientid: defaultIngredientId,
    ingredientname: defaultIngredientName,
    username: defaultUsername,
  } = initialValues;

  const formik = useFormik({
    initialValues: {
      name: defaultName ? defaultName.toString() : "",
      username: defaultUsername ? defaultUsername.toString() : "",
      mainCategory: defaultCategory ? defaultCategory.toString() : "",
      secondaryCategories: [],
      ingredients: defaultIngredientId ? [defaultIngredientId] : [],
      timeFrom: "",
      timeTo: "",
      difficulty: "",
      ratingFrom: "",
      ratingTo: "",
    },
    validationSchema: AdvanceSearchValidationForm,
    onSubmit: (values) => {
      onSubmitCallback({
        RecipeName: values.name,
        CategoryId: values.mainCategory,
        SubcategoriesId: values.secondaryCategories,
        IngredientsId: values.ingredients,
        TimeFrom: values.timeFrom,
        TimeTo: values.timeTo,
        DifficultyLevelId: values.difficulty,
        RatingFrom: values.ratingFrom,
        RatingTo: values.ratingTo,
        UserName: values.username,
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-12 grid grid-cols-12 gap-5"
    >
      <div className="col-span-6">
        <SimpleInputForm
          inputType={"text"}
          placeholder={"Tarta de zucchinis"}
          field={"name"}
          formik={formik}
          labelText={"Nombre de la receta"}
        />
      </div>
      <div className="col-span-6">
        <SimpleInputForm
          inputType={"text"}
          placeholder={"Jorge89..."}
          field={"username"}
          formik={formik}
          labelText={"Username del autor"}
        />
      </div>
      <div
        className={`relative z-50 col-span-12 grid grid-cols-12 gap-5 transition-all ${
          filterOpen ? "h-auto" : "hidden h-0"
        }`}
      >
        <div className="col-span-12">
          <LabelTooltipAndErrorWrapper
            field={"ingredients"}
            formik={formik}
            labelText="Ingredientes"
          >
            <IngredientsSelectMultiple
              placeholder="Taza de harina o 1/2 cebolla"
              field={"ingredients"}
              formik={formik}
              defaultIngredient={
                defaultIngredientId && defaultIngredientName
                  ? {
                      value: defaultIngredientId,
                      label: defaultIngredientName,
                    }
                  : undefined
              }
            />
          </LabelTooltipAndErrorWrapper>
        </div>
        <AdvanceCategoriesSearch formik={formik} />
        <AdvanceDurationSearch formik={formik} />
        <AdvanceDifficultySearch formik={formik} />
        <AdvanceRatingSearch formik={formik} />
      </div>

      <div className="col-span-12 flex items-center justify-between gap-5 border-t border-gray-light pt-5">
        <div
          className="col-span-12 flex items-center justify-center"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Paragraph className="cursor-pointer text-[12px] text-primary underline">
            {filterOpen ? "Ocultar Filtros" : "Mostrar más filtros"}
          </Paragraph>
        </div>
        <div className="flex gap-5">
          <Button
            color={"gray"}
            type={"button"}
            extraClasses={"col-span-12 cursor-pointer"}
            onClick={() => {
              formik.resetForm();
              formik.setFieldValue("name", "");
              formik.setFieldValue("mainCategory", "");
              formik.setFieldValue("secondaryCategories", []);
              formik.setFieldValue("username", "");
              formik.setFieldValue("ratingFrom", "");
              formik.setFieldValue("ratingTo", "");
              formik.setFieldValue("ingredients", []);
              const clearEvent = new CustomEvent("clearSearchForm");
              document.dispatchEvent(clearEvent);
              window.history.replaceState(null, "", window.location.pathname);
            }}
          >
            Borrar filtros
          </Button>
          <Button
            color={isFormValid(formik) && formik.isValid ? "primary" : "gray"}
            type={isFormValid(formik) && formik.isValid ? "submit" : "button"}
            extraClasses={`col-span-12 ${
              isFormValid(formik) && formik.isValid
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
          >
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AdvanceSearch;
