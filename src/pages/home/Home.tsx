import React, { useEffect, useState } from "react";
import BackgroundHeader from "../../components/molecules/Background/Background";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import BannerAdvanceSearch from "../../components/organisms/banners/BannerAdvanceSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import CategoriesHome from "./sections/CategoriesHome";
import DestacadosDia from "./sections/DestacadosDia";
import PopularesMes from "./sections/PopularesMes";
import { useResultModal } from "../../hooks/useResultModal";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <BackgroundHeader />
      <HomeSearch />
      <div className="space-y-8">
        <CategoriesHome title="Ver recetas por Categorías" />
        <DestacadosDia title="Recetas destacadas del día" />
        <BannerAdvanceSearch />
        {/* <PopularesMes title="Recetas más populares del mes" /> */}
        <BannerQuicheApp />
      </div>
    </>
  );
};

export default Home;
