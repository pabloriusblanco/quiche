import { Post } from "../../../../../types/Recipe";
import Button from "../../../../atoms/Buttons/Button";
import LinkContainer from "../../../../atoms/Link/LinkContainer";
import VerticalSimpleCardCommentsLikes from "./VerticalSimpleCardCommentsLikes";
import PostRatingWithValue from "../../PostRatingWithValue";
import PostTagsWithTooltips from "../../PostTagsWithTooltips";

interface VerticalSimpleCardProps {
  id: number;
  post: Post;
  cardWidth?: string;
}

const VerticalSimpleCard = ({
  id,
  post,
  cardWidth = '140px'
}: VerticalSimpleCardProps) => {
  return (
    <div
      className="shadow-light z-10 box-border rounded-lg bg-white"
      style={{ width: cardWidth }}
    >
      <img
        src={
          post.recipe.image ||
          `https://source.unsplash.com/random/150x150/?food,recipe&${id}`
        }
        alt={`${post.recipe.name} picture`}
        className="h-[120px] w-full rounded-t-lg object-cover"
      />
      <PostTagsWithTooltips
        id={id.toString()}
        category={post.recipe.mainCategory.icon}
        time={post.recipe.time.reference.icon}
        difficulty={post.recipe.difficulty.icon}
      />
      <div className="grid grid-cols-12 gap-2 p-[12px] pt-[28px]">
        <div className="col-span-12 ">
          <p className="mb-2 h-8 text-[11px]">{post.recipe.name}</p>
          <p className="h-[56px]  overflow-hidden text-ellipsis text-[10px] text-gray">
            {post.recipe.description}
          </p>
        </div>
        <div className="border-y-1 item-center col-span-12 flex justify-between border-y border-gray-light py-2">
          <PostRatingWithValue rating={post.rating} />
        </div>
        <div className="col-span-12 flex items-center justify-between">
          <VerticalSimpleCardCommentsLikes
            commentsAmount={post.comments.length}
            likesAmount={post.comments.length}
          />
        </div>
        <div className="col-span-12">
          <LinkContainer to={`/post/${post.id}`} className="w-full">
            <Button
              color="primary"
              buttonStyle="outlined"
              extraClasses="w-full"
            >
              Ver receta
            </Button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default VerticalSimpleCard;
