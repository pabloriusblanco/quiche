import Icon from "../../../../atoms/Icons/Icons";

interface VerticalSimpleCardCommentsLikesProps {
  commentsAmount: number;
  likesAmount: number;
}

const VerticalSimpleCardCommentsLikes = ({
  commentsAmount,
  likesAmount,
}: VerticalSimpleCardCommentsLikesProps) => {
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

export default VerticalSimpleCardCommentsLikes;
