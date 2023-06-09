import Isotope from "isotope-layout";
import SimpleSelect from "../../../components/atoms/Select/SimpleSelect";
import { useEffect, useRef, useState } from "react";
import { PostResponse } from "../../../types/Api";
import HorizontalExtendedCard from "../../../components/molecules/Cards/Home/HorizontalExtendedCard/HorizontalExtendedCard";
import CategorySelect from "../../../components/atoms/Select/CategorySelect";
import { Category } from "../../../types/Recipe";

type PosibleSortKeys =
  | "name"
  | "rating"
  | "comments"
  | "favs"
  | "original-order";

const SortOptions = [
  {
    value: "name-asc",
    label: "Nombre A-Z",
  },
  {
    value: "name-desc",
    label: "Nombre Z-A",
  },
  {
    value: "rating-desc",
    label: "Mejor valorados",
  },
  {
    value: "rating-asc",
    label: "Peor valorados",
  },
  {
    value: "comments-desc",
    label: "Más comentados",
  },
  {
    value: "comments-asc",
    label: "Menos comentados",
  },
  {
    value: "favs-desc",
    label: "Más favoritos",
  },
  {
    value: "favs-asc",
    label: "Menos favoritos",
  },
];

type SortIsotopeProps = {
  posts: PostResponse[];
  categories: Category[];
  allowDeleteEdit?: boolean;
};

const SortIsotope = ({
  posts,
  categories = [],
  allowDeleteEdit = false,
}: SortIsotopeProps) => {
  const isotope = useRef<Isotope | null>();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState<Category | "*">("*");
  const [sortKey, setSortKey] = useState<PosibleSortKeys>("original-order");
  const [sortAscOrDesc, setSortAscOrDesc] = useState<boolean>(true);

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "vertical",
      getSortData: {
        name: "[data-name]",
        comments: "[data-comments]",
        favs: "[data-favs]",
        rating: "[data-rating]",
      },
      filter: filterKey || "*",
      sortBy: sortKey || "original-order",
      sortAscending: sortAscOrDesc,
    });
    return () => isotope.current?.destroy();
  }, [posts]);

  // handling filter key change
  useEffect(() => {
    isotope.current?.arrange({
      filter: filterKey === "*" ? "*" : `[data-maincategory="${filterKey}"]`,
      sortBy: sortKey,
      sortAscending: sortAscOrDesc,
    });
  }, [filterKey, sortKey, sortAscOrDesc]);

  const handleFilterKeyChange = (key: Category | "*") => {
    setFilterKey(key);
  };

  const handleSortKeyChange = (key: PosibleSortKeys) => {
    if (key === "original-order") {
      setSortKey("original-order");
      setSortAscOrDesc(true);
    } else {
      const [sortKey, sortAscOrDesc] = key.split("-");
      setSortKey(sortKey as PosibleSortKeys);
      setSortAscOrDesc(sortAscOrDesc === "asc" ? true : false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="relative z-20 flex items-center justify-end gap-5">
          <SimpleSelect
            callbackHandleChange={(res: any) => {
              if (res != null) {
                handleFilterKeyChange(res.value);
              } else {
                handleFilterKeyChange("*");
              }
            }}
            field="filter"
            optionsArray={categories}
            placeholder={"Filtrar por categoría principal..."}
            valueExtractor={(category) => category.icon}
            labelExtractor={(category) => category.displayName}
          />
          <SimpleSelect
            callbackHandleChange={(res: any) => {
              if (res != null) {
                handleSortKeyChange(res.value);
              } else {
                handleSortKeyChange("original-order");
              }
            }}
            field="filter"
            optionsArray={SortOptions}
            placeholder={"Ordenar por..."}
            valueExtractor={(option) => option.value}
            labelExtractor={(option) => option.label}
          />
        </div>
        <div className="filter-container flex">
          {posts.map((post) => (
            <HorizontalExtendedCard
              post={post}
              isActive={post.deleteDate === null}
              key={post.id}
              allowActions={allowDeleteEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SortIsotope;
