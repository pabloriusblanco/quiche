import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import RecipeDetails from "../pages/recipe/detail/RecipeDetails";
import RecipeCreate from "../pages/recipe/add/RecipeCreate";
import Search from "../pages/search/Search";

const WebRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/recipe/create" element={<RecipeCreate />} />
      <Route path="/*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

export default WebRoutes;
