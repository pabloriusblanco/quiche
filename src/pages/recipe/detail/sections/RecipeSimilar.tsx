import {
  TextWeightType,
  TitleType,
} from "../../../../components/atoms/Text/TextsTypes";
import Title from "../../../../components/atoms/Text/Title";
import VerticalSimpleCard from "../../../../components/molecules/Cards/Home/VerticalSimpleCard/VerticalSimpleCard";
import Skeleton from "../../../../components/molecules/Skeleton/Skeleton";
import { PostResponse } from "../../../../types/Api";
const RecipeSimilarDictinary = {
  ingredients: "Ingredientes",
  categories: "Categorías",
};

interface RecipeSimilarProps {
  posts: PostResponse[] | undefined | null;
  type: string;
}

const RecipeSimilar = ({ posts, type }: RecipeSimilarProps) => {
  return (
    <>
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
      {posts && (
        <div className="flex flex-col gap-3">
          <Title
            color="black"
            weight={TextWeightType.Bold}
            titleType={TitleType.H4}
            text={`Recetas con ${RecipeSimilarDictinary[type]} similares`}
          />
          <div className="grid grid-cols-2 gap-5">
            {posts.map((post) => (
              <div className="col-span-1" key={post.id}>
                <VerticalSimpleCard cardWidth="100%" id={post.id} post={post} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeSimilar;
