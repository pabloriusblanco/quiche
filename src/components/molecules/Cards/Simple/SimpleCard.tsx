import {
  CategoryDictionary,
  DifficultyDictionary,
  TimeDictionary,
} from "../../../atoms/Icons/TooltipIcons/TooltipIconsDictionary";
import Icon from "../../../atoms/Icons";
import RatingStars from "../../../atoms/Icons/RatingStars/RatingStars";
import TooltipIcons from "../../../atoms/Icons/TooltipIcons/TooltipIcons";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import SimpleCardTags from "./SimpleCardTags";
import SimpleCardCommentsLikes from "./SimpleCardCommentsLikes";
import SimpleCardRating from "./SimpleCardRating";

interface SimpleCardProps {
  id: string;
  img: string;
  title: string;
  description: string;
  rating: number;
  commentsAmount: number;
  likesAmount: number;
  category: Exclude<keyof typeof CategoryDictionary, "name">;
  difficulty: Exclude<keyof typeof DifficultyDictionary, "name">;
  time: Exclude<keyof typeof TimeDictionary, "name">;
}

const SimpleCard = ({
  id,
  img,
  title,
  description,
  rating,
  commentsAmount,
  likesAmount,
  category,
  difficulty,
  time,
}: SimpleCardProps) => {
  return (
    <LinkBasic to={`/post/${id}`}>
      <div className="shadow-light relative w-[136px] rounded-lg bg-white">
        <img
          src={img}
          alt={`${title} foto`}
          className="h-[120px] w-full rounded-t-lg object-cover"
        />
        <SimpleCardTags
          id={id}
          category={category}
          time={time}
          difficulty={difficulty}
        />
        <div className="grid grid-cols-12 gap-2 p-[12px] pt-[28px]">
          <p className="col-span-12 text-[11px]">{title}</p>
          <p className="col-span-12 h-[56px] overflow-hidden text-ellipsis text-[10px] text-gray">
            {description}
          </p>
          <div className="border-y-1 item-center col-span-12 flex justify-between border-y border-gray-light py-2">
            <SimpleCardRating rating={rating} />
          </div>
          <div className="col-span-12 flex items-center justify-between">
            <SimpleCardCommentsLikes
              commentsAmount={commentsAmount}
              likesAmount={likesAmount}
            />
          </div>
        </div>
      </div>
    </LinkBasic>
  );
};

export default SimpleCard;
