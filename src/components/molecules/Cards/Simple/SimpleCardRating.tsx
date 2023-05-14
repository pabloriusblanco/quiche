import RatingStars from "../../../atoms/Icons/RatingStars/RatingStars";

interface SimpleCardRatingProps {
  rating: number;
}

const SimpleCardRating = ({ rating }: SimpleCardRatingProps) => {
  return (
    <div className="item-center flex w-full justify-between">
      <RatingStars rating={Math.round(rating)} className="h-[14px] w-[14px]" />
      <p className="text-[11px] tracking-wide text-gray">{`(${rating}/5)`}</p>
    </div>
  );
};

export default SimpleCardRating;
