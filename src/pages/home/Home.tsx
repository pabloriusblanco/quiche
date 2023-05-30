import React from "react";
import BackgroundHeader from "../../components/molecules/Background/Background";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import PopularesMes from "./sections/PopularesMes";
import CategoriesHome from "./sections/CategoriesHome";
import DestacadosDia from "./sections/DestacadosDia";
import BannerAdvanceSearch from "../../components/organisms/banners/BannerAdvanceSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import Button from "../../components/atoms/Buttons/Button";
import { testAuth, testRecipesGetAll } from "../../api/auth/testAuth";

const Home: React.FC = () => {
  const testAuthorization = () => {
    testAuth()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const testRecipes = () => {
    testRecipesGetAll()
      .then((res) => {
        console.log("testRecipesGetAll TRUE", res);
      })
      .catch((err) => {
        console.log("testRecipesGetAll FALSE", err);
      });
  };
  return (
    <>
      <BackgroundHeader />
      <HomeSearch />
      <div className="space-y-8">
        {/* <Button color="primary" onClick={testAuthorization}>
          Test Auth
        </Button>
        <Button color="primary" onClick={testRecipes}>
          Test recipes
        </Button> */}
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
