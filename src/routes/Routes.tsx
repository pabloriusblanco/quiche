import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import RecipeDetails from "../pages/recipe/detail/RecipeDetails";
import RecipeCreate from "../pages/recipe/add/RecipeCreate";
import Search from "../pages/search/Search";
import Favorites from "../pages/favorites/Favorites";
import NotFound from "../pages/errors/NotFound";

const WebRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/search"
        element={<Search />}
      />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/recipe/create" element={<RecipeCreate />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default WebRoutes;
