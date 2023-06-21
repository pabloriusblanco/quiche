import { useEffect, useState } from "react";
import { getAllDifficulties } from "../../../../api/difficulty";
import { Difficulty } from "../../../../types/Recipe";
import Icon from "../../../atoms/Icons/Icons";
import Label from "../../../atoms/Inputs/Label";
import Radio from "../../../atoms/Inputs/Radio";
import Skeleton from "../../Skeleton/Skeleton";

type AdvanceDifficultySearchProps = {
  formik: any;
};

const AdvanceDifficultySearch = ({ formik }: AdvanceDifficultySearchProps) => {
  const [difficulties, setDifficulties] = useState<Difficulty[] | undefined>(
    undefined
  );

  useEffect(() => {
    getAllDifficulties()
      .then((res) => {
        setDifficulties(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-span-6">
      <div className="flex h-full flex-col gap-1">
        <Label extraClasses="mb-0">Dificultad de la receta</Label>
        <div className="flex justify-between">
          {!difficulties && (
            <Skeleton
              gap={4}
              gridCols={12}
              gridMatrix={[[4, 4, 4]]}
              itemHeight={"40px"}
            />
          )}
          {difficulties &&
            difficulties.map((difficulty) => (
              <div className="flex items-center gap-2 h-10 mt-0.5" key={difficulty.id}>
                <Radio
                  key={difficulty.id}
                  id={`${difficulty.id.toString()}`}
                  name="difficulty"
                  onClick={() => {
                    if (formik.values.difficulty === difficulty.id.toString()) {
                      formik.setFieldValue("difficulty", "");
                    } else {
                      formik.setFieldValue(
                        "difficulty",
                        difficulty.id.toString()
                      );
                    }
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={
                    formik.values.difficulty === difficulty.id.toString()
                  }
                  value={difficulty.id.toString()}
                />
                <div className="flex items-baseline gap-2">
                  <Label
                    htmlFor={difficulty.id.toString()}
                    className="cursor-pointer text-[12px] font-medium text-gray"
                  >
                    {difficulty.displayName}
                  </Label>
                  <Icon name={difficulty.icon} className={`w-4 fill-primary`} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdvanceDifficultySearch;
