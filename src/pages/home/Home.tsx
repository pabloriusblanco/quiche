import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-3xl font-bold">Bienvenido a Quiche</h1>
      <p className="text-lg">Encuentra aquí las mejores recetas de quiche</p>
      <ul className="mt-4">
        <li>Receta 1</li>
        <li>Receta 2</li>
        <li>Receta 3</li>
        {/* ... */}
      </ul>
    </div>
  );
};

export default Home;
