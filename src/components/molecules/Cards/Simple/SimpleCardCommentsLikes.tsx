import Icon from "../../../atoms/Icons";

interface SimpleCardCommentsLikesProps {
  commentsAmount: number;
  likesAmount: number;
}

const SimpleCardCommentsLikes = ({
  commentsAmount,
  likesAmount,
}: SimpleCardCommentsLikesProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Icon name="comments" className="fill-primary" />
        <p className="ml-2 text-[11px] tracking-wide text-gray">
          {commentsAmount}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Icon name="likes" className="fill-primary" />
        <p className="ml-2 text-[11px] tracking-wide text-gray">
          {likesAmount}
        </p>
      </div>
    </>
  );
};

export default SimpleCardCommentsLikes;
