import { PostResponse } from "../../../../../types/Api";
import { Post } from "../../../../../types/Recipe";
import Icon from "../../../../atoms/Icons/Icons";
import TooltipIcons from "../../../../atoms/Icons/TooltipIcons/TooltipIcons";
import LinkBasic from "../../../../atoms/Link/LinkBasic";
import Paragraph from "../../../../atoms/Text/Paragraph";
import { TextWeightType, TitleType } from "../../../../atoms/Text/TextsTypes";
import Title from "../../../../atoms/Text/Title";
import PostRatingWithValue from "../../PostRatingWithValue";
import VerticalSimpleCardCommentsLikes from "../VerticalSimpleCard/VerticalSimpleCardCommentsLikes";
import missingImage from "../../../../../assets/images/missingImage.jpg";
import RecipeInfoCategories from "../../../../../pages/recipe/detail/sections/RecipeInfoCategories";

interface HorizontalExtendedCardProps {
  post: PostResponse;
}

const HorizontalExtendedCard = ({ post }: HorizontalExtendedCardProps) => {
  return (
    <div
      className="filter-item relative col-span-12 mx-1 w-full mb-5"
      data-maincategory={post.recipe.mainCategory.icon}
      data-name={post.recipe.name}
      data-comments={post.postsComments.length}
      data-favs={post.usersLikedPosts.length}
    >
      <LinkBasic
        to={`/recipe/${post.id}`}
        key={`${post.id}_HorizontalExtendedCard`}
        extraClasses="col-span-12"
      >
        <div className="shadow-light relative z-10 col-span-12 grid w-full grid-cols-10 overflow-hidden rounded-lg bg-white">
          <div className="relative col-span-2 flex h-full items-center">
            <img
              src={post.recipe.image}
              onError={(e) => {
                (e.target as HTMLImageElement).src = missingImage;
              }}
              alt={`${post.recipe.name} picture`}
              className="absolute w-full object-cover"
            />
          </div>
          <div className="col-span-8 flex flex-col gap-2 p-5">
            <div className="flex items-center justify-between">
              <div className="mr-2 w-fit">
                <PostRatingWithValue rating={0} />
              </div>
              <Title
                titleType={TitleType.H5}
                color="black"
                weight={TextWeightType.SemiBold}
                text={`${post.recipe.name}`}
                className="w-10/12 truncate"
              />
              <div className="flex items-center justify-end gap-2">
                <TooltipIcons
                  tag="category"
                  className="w-[14px]"
                  tagKey={post.recipe.mainCategory.icon}
                  id={`HorizontalSimpleCard_${post.id}_${post.recipe.mainCategory.icon}`}
                />
                <TooltipIcons
                  tag="time"
                  className="w-[14px]"
                  tagKey={"short"} // TODO: Change this to the correct value
                  id={`HorizontalSimpleCard_${post.id}_${post.recipe.prepTime}`}
                />
                <TooltipIcons
                  tag="difficulty"
                  className="w-[14px]"
                  tagKey={post.recipe.difficulty.icon}
                  id={`HorizontalSimpleCard_${post.id}_${post.recipe.difficulty.icon}`}
                />
              </div>
            </div>
            <div className="border-b border-gray-light pb-2">
              <Paragraph
                color="gray"
                className="line-clamp-2 h-[33px] text-ellipsis text-[11px]"
              >
                {post.recipe.description}
              </Paragraph>
            </div>
            <div className="flex w-full justify-between">
                <RecipeInfoCategories
                  mainCategory={post.recipe.mainCategory}
                  subCategories={post.recipe.recipesSubcategories}
                  className="justify-start grid grid-cols-5 mr-5 space-x-2"
                  buttonClassName="!px-0 !py-1.5 !w-full"
                  textClassName="text-[9px]"
                />
              <div className="flex items-center justify-end gap-4">
                <VerticalSimpleCardCommentsLikes
                  commentsAmount={post.postsComments.length}
                  likesAmount={post.usersLikedPosts.length}
                />
              </div>
            </div>
          </div>
        </div>
      </LinkBasic>
    </div>
  );
};

export default HorizontalExtendedCard;
