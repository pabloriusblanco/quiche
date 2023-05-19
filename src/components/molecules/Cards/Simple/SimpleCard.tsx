import Button from "../../../atoms/Buttons/Button";
import {
  CategoryDictionary,
  DifficultyDictionary,
  TimeDictionary,
} from "../../../atoms/Icons/TooltipIcons/TooltipIconsDictionary";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import SimpleCardCommentsLikes from "./SimpleCardCommentsLikes";
import SimpleCardRating from "./SimpleCardRating";
import SimpleCardTags from "./SimpleCardTags";

interface SimpleCardProps {
  id: number;
  img: string;
  title: string;
  description: string;
  rating: number;
  commentsAmount: number;
  likesAmount: number;
  category: keyof typeof CategoryDictionary;
  difficulty: keyof typeof DifficultyDictionary;
  time: keyof typeof TimeDictionary;
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
    <div className="shadow-light relative z-10 box-border w-[140px] rounded-lg bg-white">
      <img
        src={img}
        alt={`${title} foto`}
        className="h-[120px] w-full rounded-t-lg object-cover"
      />
      <SimpleCardTags
        id={id.toString()}
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
        <div className="col-span-12">
          <LinkContainer to={`/post/${id}`} className="w-full">
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

export default SimpleCard;
