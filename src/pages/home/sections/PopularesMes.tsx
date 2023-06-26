import { monthPosts } from "../../../api/home";
import { TextWeightType } from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import VerticalSimpleCard from "../../../components/molecules/Cards/Home/VerticalSimpleCard/VerticalSimpleCard";
import Carousel from "../../../components/molecules/Carousel/Carousel";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import { Post } from "../../../types/Recipe";
import { useState, useEffect } from "react";

interface PopularesMesProps {
  title: string;
  description?: string;
}

const PopularesMes = ({ title, description }: PopularesMesProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    monthPosts().then((res) => {
      setPosts(res);
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
      {posts && (
        <Carousel config="default">
          {/* {posts.map((post: Post, i: number) => (
            <VerticalSimpleCard key={i} id={post.id} post={post} />
          ))} */}
        </Carousel>
      )}
    </section>
  );
};

export default PopularesMes;
