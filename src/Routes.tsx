import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RecipeDetails from "./pages/recipe/RecipeDetails";

const WebRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

export default WebRoutes;
