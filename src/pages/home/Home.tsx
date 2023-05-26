import React from "react";
// import background from assets

import BackgroundHeader from "../../components/molecules/Background/Background";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import { useAuth } from "../../hooks/useAuth";
import PopularesMes from "./sections/PopularesMes";
import CategoriesHome from "./sections/CategoriesHome";
import DestacadosDia from "./sections/DestacadosDia";
import BannerAdvanceSearch from "../../components/organisms/banners/BannerAdvanceSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";

const Home: React.FC = () => {
  const auth = useAuth();

  console.log(auth.username);

  return (
    <>
      <BackgroundHeader />
      <div className="absolute right-20 top-40 border-2 border-danger bg-white">
        {auth.isAuthenticated ? (
          <button onClick={() => auth.signOut()}>Sign out</button>
        ) : (
          "STATUS: NOT LOGIN"
        )}
      </div>
      <HomeSearch />
      <div className="space-y-8">
        <CategoriesHome title="Ver recetas por Categorías" />
        <DestacadosDia title="Recetas destacadas del día" />
        <BannerAdvanceSearch />
        <PopularesMes title="Recetas más populares del mes" />
        <BannerQuicheApp />
      </div>
    </>
  );
};

export default Home;
