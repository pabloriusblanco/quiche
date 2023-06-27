import { ChangeEvent, useEffect, useState } from "react";
import { getAllDurations } from "../../../../api/durations";
import { DurationResponse } from "../../../../types/Api";
import Icon from "../../../atoms/Icons/Icons";
import Label from "../../../atoms/Inputs/Label";
import Radio from "../../../atoms/Inputs/Radio";
import Skeleton from "../../Skeleton/Skeleton";
import SimpleInputForm from "../GeneralForms/SimpleInputForm";

type AdvanceDurationSearchProps = {
  formik: any;
};

const durationsReferenceValues: {
  [key: string]: { min: string; max: string };
} = {
  corto: {
    min: "",
    max: "20",
  },
  medio: {
    min: "20",
    max: "45",
  },
  largo: {
    min: "45",
    max: "",
  },
};

const AdvanceDurationSearch = ({ formik }: AdvanceDurationSearchProps) => {
  const [durations, setDurations] = useState<DurationResponse[] | undefined>(
    undefined
  );

  useEffect(() => {
    getAllDurations()
      .then((res) => {
        setDurations(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const referenceValue = durationsReferenceValues[e.target.value];
    if (referenceValue) {
      formik.setFieldValue("timeFrom", referenceValue.min);
      formik.setFieldValue("timeTo", referenceValue.max);
    }
  };

  useEffect(() => {
    const handleClearSearchForm = () => {
      Object.values(document.getElementsByClassName("radioDuration")).forEach(
        (value) => {
          (value as HTMLInputElement).checked = false;
        }
      );
    };

    document.addEventListener("clearSearchForm", handleClearSearchForm);
    return () => {
      document.removeEventListener("clearSearchForm", handleClearSearchForm);
    };
  }, []);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-5">
      <div className="col-span-6">
        <div className="flex h-full flex-col gap-1">
          <Label extraClasses="mb-0">Tiempo de preparación</Label>
          <div className="flex justify-between">
            {!durations && (
              <Skeleton
                gap={4}
                gridCols={12}
                gridMatrix={[[4, 4, 4]]}
                itemHeight={"40px"}
              />
            )}
            {durations &&
              durations.map((duration) => (
                <div className="flex h-10 items-center gap-2" key={duration.id}>
                  <Radio
                    key={duration.id}
                    id={`${duration.id.toString()}`}
                    name={"prepTimeRadio"}
                    onChange={onRadioChange}
                    value={duration.name}
                    className="radioDuration"
                  />
                  <div className="flex items-center gap-2">
                    <Label
                      htmlFor={duration.id.toString()}
                      className="cursor-pointer text-[12px] font-medium text-gray"
                    >
                      {duration.displayName}
                    </Label>
                    <Icon name={duration.icon} className={`w-4 fill-primary`} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <SimpleInputForm
          inputType={"text"}
          placeholder={"10..."}
          field={"timeFrom"}
          formik={formik}
          labelText={"Duración mínima (minutos)"}
        />
      </div>
      <div className="col-span-3">
        <SimpleInputForm
          inputType={"text"}
          placeholder={"45..."}
          field={"timeTo"}
          formik={formik}
          labelText={"Duración máxima (minutos)"}
        />
      </div>
    </div>
  );
};

export default AdvanceDurationSearch;
