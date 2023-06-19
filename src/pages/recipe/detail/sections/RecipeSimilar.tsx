import { useEffect, useState } from "react";
import { getSimilarRecipes } from "../../../../api/recipes";
import {
  TextWeightType,
  TitleType,
} from "../../../../components/atoms/Text/TextsTypes";
import Title from "../../../../components/atoms/Text/Title";
import VerticalSimpleCard from "../../../../components/molecules/Cards/Home/VerticalSimpleCard/VerticalSimpleCard";
import Skeleton from "../../../../components/molecules/Skeleton/Skeleton";
import { Post } from "../../../../types/Recipe";

type RecipeSimilarProps = {
  type: keyof RecipeSimilarTypes;
  postId: string;
};

export type RecipeSimilarTypes = {
  ingredients: string;
  categories: string;
};

const RecipeSimilarDictinary = {
  ingredients: "Ingredientes",
  categories: "Categorías",
};

const RecipeSimilar = ({ type, postId }: RecipeSimilarProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    getSimilarRecipes(postId, type).then((res) => {
      setPosts(res);
    });
  }, [postId, type]);

  return (
    <div className="flex flex-col gap-3">
      <Title
        color="black"
        weight={TextWeightType.Bold}
        titleType={TitleType.H4}
        text={`Recetas con ${RecipeSimilarDictinary[type]} similares`}
      />
      {!posts && (
        <Skeleton
          gap={5}
          gridCols={2}
          gridMatrix={[
            [1, 1],
            [1, 1],
          ]}
          itemHeight={"370px"}
        />
      )}
      <div className="grid grid-cols-2 gap-5">
        {posts &&
          posts.map((post: Post, i: number) => (
            <div className="col-span-1" key={post.id}>
              <VerticalSimpleCard
                cardWidth="100%"
                key={i}
                id={post.id}
                post={post}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeSimilar;
