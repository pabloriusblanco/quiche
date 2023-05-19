import React from "react";
// import background from assets

import BackgroundHeader from "../../components/molecules/Background/Background";
import SimpleCard from "../../components/molecules/Cards/Simple/SimpleCard";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import { useAuth } from "../../hooks/useAuth";
import Carousel from "../../components/molecules/Carousel/Carousel";
import PopularesMes from "./sections/PopularesMes";

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
      <PopularesMes title="Recetas más populares del mes" />
    </>
  );
};

export default Home;
