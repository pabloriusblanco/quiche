import { Category } from "../../../../../types/Recipe";
import Icon, { IconsNames } from "../../../../atoms/Icons/Icons";

const NoResultsSearchHome = () => {
  return (
    <div className="grid grid-cols-12">
      <h6 className="col-span-12 text-xs font-bold">
        No se encontraron resultados
      </h6>
    </div>
  );
};

export default NoResultsSearchHome;
