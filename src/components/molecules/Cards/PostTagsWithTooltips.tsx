import TooltipIcons from "../../atoms/Icons/TooltipIcons/TooltipIcons";
import {
  CategoryDictionary,
  DifficultyDictionary,
  TimeDictionary,
} from "../../atoms/Icons/TooltipIcons/TooltipIconsDictionary";

interface PostTagsWithTooltipsProps {
  id?: string;
  category: Exclude<keyof typeof CategoryDictionary, "name">;
  difficulty: Exclude<keyof typeof DifficultyDictionary, "name">;
  time: Exclude<keyof typeof TimeDictionary, "name">;
}

const PostTagsWithTooltips = ({
  id,
  category,
  difficulty,
  time,
}: PostTagsWithTooltipsProps) => {
  return (
    <div className="relative flex w-full -translate-y-[10px] justify-center">
      <div className="shadow-light absolute flex items-center gap-2 rounded-md bg-white px-[12px] py-[6px]">
        <TooltipIcons
          tag="category"
          tagKey={category}
          id={`${id}_${category}`}
        />
        <TooltipIcons tag="time" tagKey={time} id={`${id}_${time}`} />
        <TooltipIcons
          tag="difficulty"
          tagKey={difficulty}
          id={`${id}_${difficulty}`}
        />
      </div>
    </div>
  );
};

export default PostTagsWithTooltips;
