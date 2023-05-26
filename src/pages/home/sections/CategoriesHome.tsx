import ButtonCategoryWithIconLarge from "../../../components/atoms/Buttons/ButtonCategoryWithIconLarge";
import { CategoryDictionary } from "../../../components/atoms/Icons/TooltipIcons/TooltipIconsDictionary";
import { TextWeightType } from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";

interface CategoriesHomeProps {
  title: string;
  description?: string;
}

const Categories = [
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack",
  "drink",
];

const CategoriesHome = ({ title, description }: CategoriesHomeProps) => {
  return (
    <section className="container space-y-4">
      <Title text={title} color="black" weight={TextWeightType.Bold} />
      <div className="grid grid-cols-6 gap-6">
        {Categories.map((category) => {
          const categoryEntry = CategoryDictionary[category];
          if (categoryEntry) {
            return (
              <ButtonCategoryWithIconLarge
                key={`HomeCategory_${categoryEntry.name}`}
                iconName={categoryEntry.icon}
                categoryName={categoryEntry.name}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default CategoriesHome;
