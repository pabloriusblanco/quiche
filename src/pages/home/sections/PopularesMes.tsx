import { TextWeightType } from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import SimpleCard from "../../../components/molecules/Cards/Simple/SimpleCard";
import Carousel from "../../../components/molecules/Carousel/Carousel";

interface PopularesMesProps {
  title: string;
  description?: string;
}

const PopularesMes = ({ title, description }: PopularesMesProps) => {
  return (
    <section className="container space-y-4">
      <Title text={title} color="black" weight={TextWeightType.Bold} />
      <Carousel config="default">
        {Array.from({ length: 16 }, (_, i) => (
          <SimpleCard
            id={i}
            key={i}
            category={
              Math.random() > 0.3
                ? Math.random() > 0.5
                  ? "breakfast"
                  : "lunch"
                : "dinner"
            }
            description="Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
            commentsAmount={Number((Math.random() * 100).toFixed(0))}
            difficulty={
              Math.random() > 0.3
                ? Math.random() > 0.5
                  ? "easy"
                  : "medium"
                : "hard"
            }
            img={`https://source.unsplash.com/random/150x150/?food,recipe&${i}`}
            likesAmount={Number((Math.random() * 100).toFixed(0))}
            rating={Number((Math.random() * 5).toFixed(1))}
            time="short"
            title="Sopa crema de lentejas y verdeo"
          />
        ))}
      </Carousel>
    </section>
  );
};

export default PopularesMes;
