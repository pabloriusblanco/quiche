import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import RecipeDetails from "../pages/recipe/detail/RecipeDetails";
import RecipeCreate from "../pages/recipe/add/RecipeCreate";
import Search from "../pages/search/Search";
import Favorites from "../pages/userPanel/Favorites";
import NotFound from "../pages/errors/NotFound";
import RecipeEdit from "../pages/recipe/edit/RecipeEdit";
import OwnedRecipes from "../pages/userPanel/OwnedRecipes";

const WebRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/search"
        element={<Search />}
      />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/myrecipes" element={<OwnedRecipes />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/recipe/edit/:id" element={<RecipeEdit />} />
      <Route path="/recipe/create" element={<RecipeCreate />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default WebRoutes;
