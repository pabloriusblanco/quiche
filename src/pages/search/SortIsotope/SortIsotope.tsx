import Isotope from "isotope-layout";
import SimpleSelect from "../../../components/atoms/Select/SimpleSelect";
import { useEffect, useRef, useState } from "react";

type PosibleSortKeys =
  | "name"
  | "rating-desc"
  | "rating-asc"
  | "comments-desc"
  | "comments-asc"
  | "favs-desc"
  | "favs-asc"
  | "";

const SortOptions = [
  {
    value: "name",
    label: "Nombre",
  },
  {
    value: "rating",
    label: "Mejor valorados",
  },
  {
    value: "rating-asc",
    label: "Peor valorados",
  },
  {
    value: "comments",
    label: "Más comentados",
  },
  {
    value: "comments-asc",
    label: "Menos comentados",
  },
  {
    value: "favs",
    label: "Más favoritos",
  },
  {
    value: "favs-asc",
    label: "Menos favoritos",
  },
];

const handleSortKeyChange = (
  setSortKey: (key: PosibleSortKeys) => void,
  key: PosibleSortKeys
) => {
  console.dir("handleSortKeyChange", key);
  setSortKey(key);
};

const SortIsotope = () => {
  const isotope = useRef<Isotope | null>();
  const [filterKey, setFilterKey] = useState("*");
  const [sortKey, setSortKey] = useState<PosibleSortKeys>("name");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".element-item",
      distance: 20,
    //   rating: "[data-rating] parseInt",
    //   comments: "[data-comments]",
    //   favs: "[data-favs] parseInt",
      layoutMode: "vertical",
      getSortData: {
        name: "[data-name]",
        rating: "[data-rating] parseInt",
        comments: "[data-comments]",
        favs: "[data-favs] parseInt",
      },
    });

    return () => {
      isotope.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (sortKey) {
      const sortByValue = sortKey.split("-")[0];
      const sortAscOrDesc = sortKey.split("-")[1] === "asc" ? true : false;
      isotope.current?.arrange({
        sortBy: sortByValue,
        sortAscending: true
      });
    }
  }, [sortKey]);

  return (
    <>
      <div className="relative z-20">
        <SimpleSelect
          callbackHandleChange={(res: any) => {
            if (res != null) {
              handleSortKeyChange(setSortKey, res.value as PosibleSortKeys);
            } else {
              handleSortKeyChange(setSortKey, "");
            }
          }}
          field="sort"
          optionsArray={SortOptions}
          placeholder={"Ordenar por"}
        />
      </div>
    </>
  );
};

export default SortIsotope;
