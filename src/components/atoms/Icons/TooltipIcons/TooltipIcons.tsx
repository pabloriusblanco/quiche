import Icon from "../Icons";
import {
  TagContent,
  TagsDictionary,
  flattedTags,
} from "./TooltipIconsDictionary";
import TooltipSimple from "../../Tooltips/TooltipSimple";

type TooltipIconsProps = {
  className?: string;
  id: string;
  tag: keyof typeof TagsDictionary;
  tagKey: keyof typeof flattedTags;
};

const prepareText = (content: TagContent) => {
  if (!content.time) return content.name;
  return `Tiempo ${content.name}, ${content.time}`;
};

const TooltipIcons = ({ tag, tagKey, className, id }: TooltipIconsProps) => {
  const tagData = flattedTags[tagKey];
  return (
    <>
      <div data-tooltip-id={id}>
        <Icon name={tagData.icon} className={`fill-gray hover:fill-gray-dark ${className}`} />
      </div>
      <TooltipSimple
        id={id}
        text={prepareText(tagData)}
        title={TagsDictionary[tag].name}
      />
    </>
  );
};

export default TooltipIcons;
