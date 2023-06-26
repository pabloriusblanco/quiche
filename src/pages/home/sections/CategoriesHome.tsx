import { useEffect, useState } from "react";
import { getAllCategories } from "../../../api/categories";
import ButtonCategoryWithIconLarge from "../../../components/atoms/Buttons/ButtonCategoryWithIconLarge";
import { TextWeightType } from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import Carousel from "../../../components/molecules/Carousel/Carousel";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import { Category } from "../../../types/Recipe";

interface CategoriesHomeProps {
  title: string;
}

const CategoriesHome = ({ title }: CategoriesHomeProps) => {
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined
  );

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container space-y-4">
      <Title text={title} color="black" weight={TextWeightType.Bold} />
      {!categories && (
        <Skeleton
          gap={5}
          gridCols={6}
          gridMatrix={[[1, 1, 1, 1, 1, 1]]}
          itemHeight={"90px"}
        />
      )}
      {categories && (
        <Carousel config="categories">
          {categories.map((category) => (
            <div className="mr-[20px]" key={`HomeCategory_${category.name}`}>
              <ButtonCategoryWithIconLarge
                id={category.id}
                iconName={category.icon}
                categoryName={category.displayName}
              />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default CategoriesHome;
