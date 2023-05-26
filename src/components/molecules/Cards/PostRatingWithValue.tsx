import RatingStars from "../../atoms/Icons/RatingStars/RatingStars";

interface PostRatingWithValueProps {
  rating: number;
  className?: string;
  starsClassName?: string;
  textClassName?: string;
}

const PostRatingWithValue = ({
  rating,
  className = "item-center flex w-full justify-between",
  starsClassName = "",
  textClassName = "",
}: PostRatingWithValueProps) => {
  return (
    <div className={`${className}`}>
      <RatingStars
        rating={Math.round(rating)}
        className={`mb-1 h-[14px] w-[14px] ${starsClassName}`}
      />
      <p
        className={`ml-2 text-[11px] tracking-wide text-gray ${textClassName}`}
      >{`(${rating}/5)`}</p>
    </div>
  );
};

export default PostRatingWithValue;
