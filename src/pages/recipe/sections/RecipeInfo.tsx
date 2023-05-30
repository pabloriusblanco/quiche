import HTMLContent from "../../../components/atoms/HTMLContent/HTMLContent";
import Icon from "../../../components/atoms/Icons/Icons";
import LinkBasic from "../../../components/atoms/Link/LinkBasic";
import Paragraph from "../../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";
import PostRatingWithValue from "../../../components/molecules/Cards/PostRatingWithValue";
import Skeleton from "../../../components/molecules/Skeleton/Skeleton";
import { Post } from "../../../types/Recipe";
import RecipeInfoCategories from "./RecipeInfoCategories";
import RecipeSectionTitle from "./RecipeSectionTitle";

type RecipeInfoProps = {
  post: Post;
};

const RecipeInfo = ({ post }: RecipeInfoProps) => {
  return (
    <>
      {!post && (
        <div>
          <Skeleton
            gap={5}
            gridCols={7}
            gridMatrix={[[7]]}
            itemHeight={"370px"}
          />
        </div>
      )}
      {post && (
        <div className="shadow-light col-span-10 overflow-hidden rounded-2xl md:col-span-6">
          <img
            className="h-[466px] w-full object-cover"
            src={
              post?.recipe.image ||
              `https://source.unsplash.com/random/700x700/?food,recipe&${post.recipe.name}`
            }
            alt={post?.recipe.name}
          />
          <div className="flex w-full flex-col px-5 pb-5">
            <div className="relative z-10 -mt-12 rounded-2xl bg-white">
              <div className="flex w-full flex-col items-center justify-center gap-2 p-5">
                <PostRatingWithValue
                  rating={post.rating}
                  className="flex items-center justify-center"
                  starsClassName="h-5 w-5"
                  textClassName="text-[14px]"
                />
                <Title
                  titleType={TitleType.H1}
                  color="black"
                  weight={TextWeightType.SemiBold}
                  className="text-center"
                  text={post.recipe.name}
                />
              </div>
            </div>
            <RecipeInfoCategories
              mainCategory={post.recipe.mainCategory}
              subCategories={post.recipe.subCategory}
            />
            <div className="mt-5 flex w-full flex-col justify-center gap-4">
              <Paragraph color="gray" className="text-[11px]">
                {post.recipe.description}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <RecipeSectionTitle
                  iconName={post.recipe.time.icon}
                  titleText="Tiempo de preparación"
                />
                <Paragraph color="gray" className="text-[11px]">
                  {`${post.recipe.time.displayName} - ${post.recipe.time.value} minutos`}
                </Paragraph>
              </div>
              <div className="flex flex-col gap-2">
                <RecipeSectionTitle
                  iconName={post.recipe.difficulty.icon}
                  titleText="Dificultad de la preparación"
                />
                <Paragraph color="gray" className="text-[11px]">
                  {`${post.recipe.difficulty.displayName}`}
                </Paragraph>
              </div>
              <div className="flex flex-col gap-2">
                <RecipeSectionTitle
                  iconName="ingredients"
                  titleText="Ingredientes"
                />
                <ul className="list-inside list-disc">
                  {post.recipe.ingredients.map((ingredient) => (
                    <li className="text-[11px] text-gray" key={ingredient.id}>
                      {`${ingredient.displayName} - x${ingredient.quantity}`}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <RecipeSectionTitle
                  iconName="steps"
                  titleText="Instrucciones"
                />
                <Paragraph color="gray" className="text-[11px]">
                  <HTMLContent content={post.recipe.steps} />
                </Paragraph>
              </div>
              <div className="flex flex-col">
                <RecipeSectionTitle titleText="Creado por" />
                <div className="flex items-center">
                  <Icon name="userchecked" className="w-3.5 fill-primary" />
                  <Paragraph
                    color="gray"
                    className="ml-1 overflow-hidden text-ellipsis font-semibold text-right text-[11px]"
                  >
                    {`${post.owner.firstName} ${post.owner.lastName}`}
                  </Paragraph>
                </div>
                <LinkBasic
                  color="text-primary"
                  fontSize="text-[11px]"
                  extraClasses="underline hover:text-primary-dark"
                  to={`/recipe/?=user:${post.owner.id}`}
                >
                  Ver más recetas del autor
                </LinkBasic>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeInfo;
