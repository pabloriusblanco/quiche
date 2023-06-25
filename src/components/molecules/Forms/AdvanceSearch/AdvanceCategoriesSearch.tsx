import CategorySelect from "../../../atoms/Select/CategorySelect";
import { SimpleSelectCategoryClassesConfig } from "../../../atoms/Select/SelectConfig/CategoriesConfig";
import LabelTooltipAndErrorWrapper from "../GeneralForms/LabelTooltipAndErrorWrapper";

type AdvanceCategoriesSearchProps = {
  formik: any;
};

const AdvanceCategoriesSearch = ({ formik }: AdvanceCategoriesSearchProps) => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-5">
      <div className="col-span-6">
        <LabelTooltipAndErrorWrapper
          field={"mainCategory"}
          formik={formik}
          labelText="Categoría principal"
        >
          <CategorySelect
            isMulti={false}
            placeholder="Desayuno..."
            field={"mainCategory"}
            formik={formik}
            classesConfig={SimpleSelectCategoryClassesConfig(formik.values.mainCategory)}
          />
        </LabelTooltipAndErrorWrapper>
      </div>
      <div className="col-span-6">
        <LabelTooltipAndErrorWrapper
          field={"secondaryCategories"}
          formik={formik}
          labelText="Categorías secundarias"
        >
          <CategorySelect
            isMulti={true}
            placeholder="Almuerzo..."
            field={"secondaryCategories"}
            formik={formik}
            classesConfig={SimpleSelectCategoryClassesConfig(formik.values.secondaryCategories)}
          />
        </LabelTooltipAndErrorWrapper>
      </div>
    </div>
  );
};

export default AdvanceCategoriesSearch;
