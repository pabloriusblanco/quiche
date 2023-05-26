import Icon from "../Icons";

type RatingStarsProps = {
  rating: number;
  className?: string;
};

const RatingStars = ({ rating, className }: RatingStarsProps) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          name="star"
          key={i}
          className={`${className} ${
            rating > i ? "fill-primary" : "fill-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default RatingStars;
