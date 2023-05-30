import Icon, { IconsNames } from "../../../components/atoms/Icons/Icons";
import {
  TextWeightType,
  TitleType,
} from "../../../components/atoms/Text/TextsTypes";
import Title from "../../../components/atoms/Text/Title";

type RecipeSectionTitleProps = {
  iconName?: IconsNames;
  titleText: string;
};

const RecipeSectionTitle = ({
  iconName,
  titleText,
}: RecipeSectionTitleProps) => {
  return (
    <div className="flex items-center gap-2">
      {iconName && <Icon name={iconName} className="h-3.5 w-3.5 fill-black" />}
      <Title
        titleType={TitleType.H5}
        color="black"
        weight={TextWeightType.Normal}
        className="text-center"
        text={titleText}
      />
    </div>
  );
};

export default RecipeSectionTitle;
