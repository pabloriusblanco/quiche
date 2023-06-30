import { useEffect, useState } from "react";
import { getMonthRecipes } from "../../../api/home";
import { TextWeightType } from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import VerticalSimpleCard from "../../../components/molecules/Cards/Home/VerticalSimpleCard/VerticalSimpleCard";
import Carousel from "../../../components/molecules/Carousel/Carousel";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import { PostResponse } from "../../../types/Api";

interface PopularesMesProps {
  title: string;
  description?: string;
}

const PopularesMes = ({ title, description }: PopularesMesProps) => {
  const [posts, setPosts] = useState<PostResponse[] | undefined>(undefined);

  useEffect(() => {
    getMonthRecipes()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container space-y-4">
      <Title text={title} color="black" weight={TextWeightType.Bold} />
      {!posts && (
        <Skeleton
          gap={5}
          gridCols={7}
          gridMatrix={[[1, 1, 1, 1, 1, 1, 1]]}
          itemHeight={"370px"}
        />
      )}
      {posts && posts.length > 0 && (
        <Carousel config="default">
          {posts.map((post: PostResponse, i: number) => (
            <VerticalSimpleCard key={i} id={post.id} post={post} />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default PopularesMes;
