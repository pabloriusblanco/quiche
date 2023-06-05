import { useEffect, useState } from "react";
import { dayPosts } from "../../../api/home";
import { TextWeightType } from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import HorizontalDetailedCard from "../../../components/molecules/Cards/Home/HorizontalDetailedCard/HorizontalDetaildedCard";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import HorizontalSimpleCard from "../../../components/molecules/Cards/Home/HorizontalSimple/HorizontalSimpleCard";
import { Post } from "../../../types/Recipe";

interface DestacadosDiaProps {
  title: string;
  description?: string;
}

const DestacadosDia = ({ title, description }: DestacadosDiaProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    dayPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <section className="container space-y-4">
      <Title text={title} color="black" weight={TextWeightType.Bold} />
      {!posts && (
        <div className="grid grid-cols-2 gap-4">
          <Skeleton
            gap={0}
            gridCols={1}
            gridMatrix={[[1]]}
            itemHeight={"325px"}
            containerClasses="col-span-1"
          />
          <Skeleton
            gap={4}
            gridCols={1}
            gridMatrix={[[1], [1]]}
            itemHeight={"153px"}
            containerClasses="col-span-1"
          />
        </div>
      )}
      {posts && (
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <HorizontalDetailedCard post={posts[0]} />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <HorizontalSimpleCard post={posts[1]} />
            <HorizontalSimpleCard post={posts[2]} />
          </div>
        </div>
      )}
    </section>
  );
};

export default DestacadosDia;
