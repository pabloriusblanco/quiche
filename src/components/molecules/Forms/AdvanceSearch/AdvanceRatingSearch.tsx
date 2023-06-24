import { useEffect, useState } from "react";
import Icon from "../../../atoms/Icons/Icons";
import LabelTooltipAndErrorWrapper from "../GeneralForms/LabelTooltipAndErrorWrapper";

type AdvanceRatingSearchProps = {
  formik: any;
};

const AdvanceRatingSearch = ({ formik }: AdvanceRatingSearchProps) => {
  const [minRating, setMinRating] = useState<number>(0);
  const [maxRating, setMaxRating] = useState<number>(0);
  const [hoverRatingMin, setHoverRatingMin] = useState<number>(0);
  const [hoverRatingMax, setHoverRatingMax] = useState<number>(0);

  useEffect(() => {
    if (formik.values.ratingFrom == "") {
      setMinRating(0);
    } else {
      setMinRating(formik.values.ratingFrom);
    }
    if (formik.values.ratingTo == "") {
      setMaxRating(0);
    } else {
      setMaxRating(formik.values.ratingTo);
    }
  }, [formik.values.ratingFrom, formik.values.ratingTo]);

  const handleMinClick = (rating: number) => {
    if (minRating == rating) {
      setMinRating(0);
      formik.setFieldValue("ratingFrom", "");
    } else {
      setMinRating(rating);
      formik.setFieldValue("ratingFrom", rating);
    }
    if (rating > maxRating && maxRating != 0) {
      setMaxRating(rating);
      formik.setFieldValue("ratingTo", rating);
    }
  };

  const handleMaxClick = (rating: number) => {
    if (maxRating == rating) {
      setMaxRating(0);
      formik.setFieldValue("ratingTo", "");
    } else {
      setMaxRating(rating);
      formik.setFieldValue("ratingTo", rating);
    }
    if (rating < minRating && minRating != 0) {
      setMinRating(rating);
      formik.setFieldValue("ratingFrom", rating);
    }
  };

  const handleMouseEnter = (rating: number, field: "min" | "max") => {
    if (field == "min") {
      setHoverRatingMin(rating);
    } else {
      setHoverRatingMax(rating);
    }
  };

  const handleMouseLeave = (field: "min" | "max") => {
    if (field == "min") {
      setHoverRatingMin(0);
    } else {
      setHoverRatingMax(0);
    }
  };

  return (
    <div className="col-span-6 grid grid-cols-12 gap-5">
      <div className="col-span-6">
        <LabelTooltipAndErrorWrapper
          field={"mainCategory"}
          formik={formik}
          labelText="Rating mínimo"
        >
          <div className="flex h-10 items-center">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                className="px-0.5 transition-all"
                onClick={() => handleMinClick(rating)}
                onMouseEnter={() => handleMouseEnter(rating, "min")}
                onMouseLeave={() => handleMouseLeave("min")}
              >
                <Icon
                  name="star"
                  className={`w-5 cursor-pointer transition-all ${
                    rating <= (hoverRatingMin || minRating)
                      ? "fill-primary"
                      : "fill-gray"
                  }`}
                />
              </div>
            ))}
          </div>
        </LabelTooltipAndErrorWrapper>
      </div>
      <div className="col-span-6">
        <LabelTooltipAndErrorWrapper
          field={"mainCategory"}
          formik={formik}
          labelText="Rating máximo"
        >
          <div className="flex h-10 items-center">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                className="px-0.5 transition-all"
                onClick={() => handleMaxClick(rating)}
                onMouseEnter={() => handleMouseEnter(rating, "max")}
                onMouseLeave={() => handleMouseLeave("max")}
              >
                <Icon
                  name="star"
                  className={`w-5 cursor-pointer transition-all ${
                    rating <= (hoverRatingMax || maxRating)
                      ? "fill-primary"
                      : "fill-gray"
                  }`}
                />
              </div>
            ))}
          </div>
        </LabelTooltipAndErrorWrapper>
      </div>
    </div>
  );
};

export default AdvanceRatingSearch;
