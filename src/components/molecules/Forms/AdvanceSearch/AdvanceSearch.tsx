import { useFormik } from "formik";
import Button from "../../../atoms/Buttons/Button";
import SimpleInputForm from "../GeneralForms/SimpleInputForm";
import { AdvanceSearchValidationForm } from "../validations/AdvanceSearchValidationForm";
import { Location } from "react-router-dom";
import IngredientsSelectMultiple from "../../../atoms/Select/IngredientsSelectMultiple";
import LabelTooltipAndErrorWrapper from "../GeneralForms/LabelTooltipAndErrorWrapper";
import CategorySelect from "../../../atoms/Select/CategorySelect";
import AdvanceDurationSearch from "./AdvanceDurationSearch";
import AdvanceDifficultySearch from "./AdvanceDifficultySearch";
import AdvanceCategoriesSearch from "./AdvanceCategoriesSearch";
import AdvanceRatingSearch from "./AdvanceRatingSearch";
import { AdvanceSearchQuery } from "../../../../types/Api";
import { useState } from "react";
import Paragraph from "../../../atoms/Text/Paragraph";

export type AdvanceSearchFormQuery = Omit<AdvanceSearchQuery, 'PageNumber'>

interface AdvanceSearchProps {
  onSubmitCallback: (values: AdvanceSearchFormQuery) => void;
  initialValues: Location;
  filterOpen: boolean;
  setFilterOpen: (value: boolean) => void;
}

export type AdvanceSearchDefaultFormValues = {
  name?: string;
  category?: string;
  ingredient?: string[];
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
    ingredient: defaultIngredient,
    username: defaultUsername,
  } = initialValues.state || {};

  const formik = useFormik({
    initialValues: {
      name: defaultName || "",
      username: defaultUsername || "",
      mainCategory: defaultCategory || "",
      secondaryCategories: [],
      ingredients: defaultIngredient ? [defaultIngredient] : [] || [],
      timeFrom: "",
      timeTo: "",
      difficulty: "",
      ratingFrom: "",
      ratingTo: "",
    },
    isInitialValid: false,
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
        className={`col-span-12 relative z-50 grid grid-cols-12 gap-5 transition-all ${
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
          <Paragraph className="text-[12px] text-primary underline cursor-pointer">
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
            }}
          >
            Borrar filtros
          </Button>
          <Button
            color={
              !formik.isValid || formik.values == formik.initialValues
                ? "gray"
                : "primary"
            }
            type={
              !formik.isValid || formik.values == formik.initialValues
                ? "button"
                : "submit"
            }
            extraClasses={`col-span-12 ${
              !formik.isValid ? "cursor-not-allowed" : "cursor-pointer"
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
