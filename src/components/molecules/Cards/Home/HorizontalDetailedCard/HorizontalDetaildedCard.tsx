import { PostResponse } from "../../../../../types/Api";
import Icon from "../../../../atoms/Icons/Icons";
import TooltipIcons from "../../../../atoms/Icons/TooltipIcons/TooltipIcons";
import LinkBasic from "../../../../atoms/Link/LinkBasic";
import Paragraph from "../../../../atoms/Text/Paragraph";
import { TextWeightType, TitleType } from "../../../../atoms/Text/TextsTypes";
import Title from "../../../../atoms/Text/Title";
import PostRatingWithValue from "../../PostRatingWithValue";

interface HorizontalDetailedCardProps {
  post: PostResponse;
}

const HorizontalDetailedCard = ({ post }: HorizontalDetailedCardProps) => {
  return (
    <LinkBasic to={`/recipe/${post.id}`}>
      <div className="shadow-light relative z-10 box-border flex h-full w-full items-end overflow-hidden rounded-lg bg-white">
        <img
          src={
            post.recipe.image ||
            `https://source.unsplash.com/random/768x768/?food,recipe&${post.recipe.name}`
          }
          alt={`${post.recipe.name} picture`}
          className="absolute h-full w-full rounded-lg object-cover"
        />
        <div className="shadow-light group relative bottom-0 mx-auto mt-auto flex w-11/12 flex-col items-center justify-center gap-2 rounded-t-xl bg-white p-5">
          <div className="relative flex w-full items-center justify-center">
            <div className="w-fit">
              <PostRatingWithValue rating={post.rating} />
            </div>
            <div className="absolute right-0 flex items-center gap-2">
              <TooltipIcons
                tag="category"
                className="w-[14px]"
                tagKey={post.recipe.mainCategory.icon}
                id={`HorizontalDetailed_Categ_${post.id}`}
              />
              <TooltipIcons
                tag="time"
                className="w-[14px]"
                tagKey={"short"}
                id={`HorizontalDetailed_Time_${post.id}`}
              />
              <TooltipIcons
                tag="difficulty"
                className="w-[14px]"
                tagKey={post.recipe.difficulty.icon}
                id={`HorizontalDetailed_Diff_${post.id}`}
              />
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-2">
            <Title
              titleType={TitleType.H4}
              color="black"
              weight={TextWeightType.SemiBold}
              text={post.recipe.name}
              className="w-full truncate text-center"
            />
            <div className=" transition-height h-0 space-y-1 overflow-hidden duration-300 ease-in-out group-hover:h-[75px]">
              <Paragraph color="gray" className="line-clamp-3 text-[11px]">
                {post.recipe.description}
              </Paragraph>
              <div className="flex items-center justify-end">
                <Icon name="userchecked" className="w-4 fill-primary" />
                <Paragraph
                  color="primary"
                  className="overflow-hidden text-ellipsis text-right text-[11px]"
                >
                  {` - ${post.user.firstName} ${post.user.lastName}`}
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 mb-2 h-1 w-10 bg-gray-light"></div>
        </div>
      </div>
    </LinkBasic>
  );
};

export default HorizontalDetailedCard;
