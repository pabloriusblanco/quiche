import { PostResponse } from "../../../../../types/Api";
import TooltipIcons from "../../../../atoms/Icons/TooltipIcons/TooltipIcons";
import LinkBasic from "../../../../atoms/Link/LinkBasic";
import Paragraph from "../../../../atoms/Text/Paragraph";
import { TextWeightType, TitleType } from "../../../../atoms/Text/TextsTypes";
import Title from "../../../../atoms/Text/Title";
import PostRatingWithValue from "../../PostRatingWithValue";
import VerticalSimpleCardCommentsLikes from "../VerticalSimpleCard/VerticalSimpleCardCommentsLikes";

interface HorizontalSimpleCardProps {
  post: PostResponse;
}

const HorizontalSimpleCard = ({ post }: HorizontalSimpleCardProps) => {
  return (
    <LinkBasic
      to={`/recipe/${post.id}`}
      key={`${post.id}_HorizontalSimpleCard`}
    >
      <div className="shadow-light relative z-10 grid w-full grid-cols-12 overflow-hidden rounded-lg bg-white">
        <div className="relative col-span-3 h-full">
          <img
            src={
              post.recipe.image ||
              `https://source.unsplash.com/random/600x600/?food,recipe&${post.recipe.name}`
            }
            alt={`${post.recipe.name} picture`}
            className="absolute h-full object-cover"
          />
        </div>
        <div className="col-span-9 flex flex-col gap-2 p-5">
          <div className="flex items-center justify-between">
            <Title
              titleType={TitleType.H5}
              color="black"
              weight={TextWeightType.SemiBold}
              text={post.recipe.name}
              className="w-9/12 truncate"
            />
            <div className="flex items-center justify-end gap-2">
              <TooltipIcons
                tag="category"
                className="w-[14px]"
                tagKey={post.recipe.mainCategory.icon}
                id={`HorizontalSimpleCard_Cate_${post.id}`}
              />
              <TooltipIcons
                tag="time"
                className="w-[14px]"
                tagKey={post.recipe.durationReference.icon}
                id={`HorizontalSimpleCard_Time_${post.id}`}
              />
              <TooltipIcons
                tag="difficulty"
                className="w-[14px]"
                tagKey={post.recipe.difficulty.icon}
                id={`HorizontalSimpleCard_Diff_${post.id}`}
              />
            </div>
          </div>
          <div className="border-b border-gray-light pb-2">
            <Paragraph
              color="gray"
              className="line-clamp-3 text-ellipsis text-[11px]"
            >
              {post.recipe.description}
            </Paragraph>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-fit">
              <PostRatingWithValue rating={post.rating} />
            </div>
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
  );
};

export default HorizontalSimpleCard;
