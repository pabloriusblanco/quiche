import { useState } from "react";
import missingImage from "../../../../../assets/images/missingImage.jpg";
import { useAuth } from "../../../../../hooks/useAuth";
import RecipeInfoCategories from "../../../../../pages/recipe/detail/sections/RecipeInfoCategories";
import { PostResponse } from "../../../../../types/Api";
import TooltipIcons from "../../../../atoms/Icons/TooltipIcons/TooltipIcons";
import LinkBasic from "../../../../atoms/Link/LinkBasic";
import Paragraph from "../../../../atoms/Text/Paragraph";
import { TextWeightType, TitleType } from "../../../../atoms/Text/TextsTypes";
import Title from "../../../../atoms/Text/Title";
import EditDeleteModal from "../../../Modal/RecipeActions/EditDeleteModal";
import PostRatingWithValue from "../../PostRatingWithValue";
import VerticalSimpleCardCommentsLikes from "../VerticalSimpleCard/VerticalSimpleCardCommentsLikes";

interface HorizontalExtendedCardProps {
  post: PostResponse;
  allowActions: boolean;
}

const HorizontalExtendedCard = ({
  post,
  allowActions = false,
}: HorizontalExtendedCardProps) => {
  const auth = useAuth();
  const [isOwner, setIsOwner] = useState<boolean>(false);

  return (
    <div
      className={`filter-item relative col-span-12 mx-1 mb-5 w-full ${
        allowActions ? "flex gap-5" : ""
      }`}
      data-maincategory={post.recipe.mainCategory.icon}
      data-name={post.recipe.name}
      data-rating={post.rating}
      data-comments={post.postsComments.length}
      data-favs={post.usersLikedPosts.length}
    >
      <LinkBasic
        to={`/recipe/${post.id}`}
        key={`${post.id}_HorizontalExtendedCard`}
        extraClasses="w-full"
      >
        <div className="shadow-light relative z-10 col-span-12 grid h-[146px] w-full grid-cols-10 overflow-hidden rounded-lg bg-white">
          <div className="relative col-span-2 flex items-center">
            <img
              src={post.recipe.image}
              onError={(e) => {
                (e.target as HTMLImageElement).src = missingImage;
              }}
              alt={`${post.recipe.name} picture`}
              className="absolute h-full w-full object-cover"
            />
          </div>
          <div className="col-span-8 flex flex-col gap-2 p-5">
            <div className="flex items-center justify-between">
              <div className="mr-2 w-fit">
                <PostRatingWithValue rating={post.rating} />
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
                  tagKey={post.recipe.durationReference.icon}
                  id={`HorizontalSimpleCard_${post.id}_${post.recipe.minutes}`}
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
                className="mr-5 grid grid-cols-5 justify-start space-x-2"
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
      {allowActions && (
        <div className="flex h-[146px] rounded-lg">
          <EditDeleteModal id={post.id} />
        </div>
      )}
    </div>
  );
};

export default HorizontalExtendedCard;
