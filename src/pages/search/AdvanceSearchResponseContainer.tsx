import React from "react";
import { PostResponse } from "../../types/Api";
import Paragraph from "../../components/atoms/Text/Paragraph";
import Icon from "../../components/atoms/Icons/Icons";
import HorizontalExtendedCard from "../../components/molecules/Cards/Home/HorizontalExtendedCard/HorizontalExtendedCard";
import SortIsotope from "./SortIsotope/SortIsotope";

type AdvanceSearchResponseContainerProps = {
  posts: PostResponse[];
};

const AdvanceSearchResponseContainer = ({
  posts,
}: AdvanceSearchResponseContainerProps) => {
  if (posts.length < 1) {
    return (
      <div className="shadow-light col-span-12 flex items-center justify-center gap-5 rounded-xl bg-white p-5">
        <div>
          <Icon name="danger" className="w-10 fill-danger"></Icon>
        </div>
        <div>
          <Paragraph letterSpacing={"1"} className="text-xl font-bold">
            No se encontraron resultados.
          </Paragraph>
          <Paragraph>
            Por favor, intenta con otros parámetros de búsqueda.
          </Paragraph>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* <div className="w-full rounded-lg  p-5">
        <SortIsotope />
      </div> */}
      <div className="grid grid-cols-12 gap-5 filter-container">
        {posts.map((post) => (
          <HorizontalExtendedCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default AdvanceSearchResponseContainer;
