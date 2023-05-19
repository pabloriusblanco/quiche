import { Category, Ingredient, Post } from "../types/Recipe";
import { api } from "./index";

export type SimpleSearchResults = {
  posts: Post[];
  categories: Category[];
  ingredients: Ingredient[];
};

export async function simpleSearch(
  query: string
): Promise<SimpleSearchResults> {
  console.log("simpleSearch", query);
    // const response = await api.get(`/search?query=${query}`);
    // return response.data;

  return new Promise<SimpleSearchResults>((resolve, reject) => {
    setTimeout(() => {
      resolve(mockSimpleSearchResults);
    }, 3000);
  });
}

const mockSimpleSearchResults: SimpleSearchResults = {
  posts: [
    {
      id: 123456789,
      recipe: {
        id: 564738291,
        name: "Pasta con salsa de tomate",
        description: "Un plato de pasta con salsa de tomate, queso y albahaca",
        steps:
          "1. Hervir la pasta en agua con sal. 2. Calentar la salsa de tomate. 3. Servir la pasta con la salsa de tomate y decorar con queso y albahaca.",
        image:
          "https://www.recetasdesbieta.com/wp-content/uploads/2019/03/pasta-con-salsa-de-tomate-y-albahaca.jpg",
        ingredients: [
          {
            id: 669,
            name: "paquete-de-fideos-de-huevo",
            displayName: "Paquete de fideos de huevo",
            quantity: 1,
          },
          {
            id: 666,
            name: "lata-de-tomate-triturado-perita",
            displayName: "Lata de tomate triturado perita",
            quantity: 2,
          },
          {
            id: 656,
            name: "queso-parmesano-rallado",
            displayName: "Queso parmesano rallado",
            quantity: 1,
          },
          {
            id: 655,
            name: "hojas-de-albahaca",
            displayName: "Hojas de albahaca",
            quantity: 12,
          },
        ],
        mainCategory: {
          id: 5669,
          name: "dinner",
          displayName: "Cena",
          icon: "dinner",
        },
        subCategory: [
          {
            id: 328,
            name: "comida-italiana",
            displayName: "Comida Italiana",
            icon: "italian",
          },
        ],
        time: {
          id: 1123,
          name: "medio",
          displayName: "Medio",
          icon: "medium",
          maxTime: 35,
        },
        difficulty: "Fácil",
      },
      owner: {
        id: 123456789,
        firstName: "Juan",
        lastName: "Perez",
      },

      favs: 36,
      comments: [
        {
          id: 689965,
          user: {
            id: 336568,
            firstName: "Ramiro",
            lastName: "Gonzalez",
          },
          comment:
            "Muchas gracias por la receta, me encantó! La hice para mis hijos y les encantó!",
          date: new Date("2021-05-01T12:00:00.000Z"),
        },
      ],
      rating: 4.1,
      date: new Date("2021-02-01T12:00:00.000Z"),
    },
    {
      id: 987654321,
      recipe: {
        id: 876543210,
        name: "Pasta al pesto",
        description:
          "Un plato de pasta con salsa de pesto, piñones y queso parmesano",
        steps:
          "1. Cocinar la pasta al dente en agua con sal. 2. Preparar la salsa de pesto mezclando albahaca, piñones, ajo, queso parmesano y aceite de oliva en un procesador de alimentos. 3. Mezclar la pasta cocida con la salsa de pesto y servir caliente.",
        image: "https://www.example.com/pasta-al-pesto.jpg",
        ingredients: [
          {
            id: 669,
            name: "paquete-de-fideos-de-huevo",
            displayName: "Paquete de fideos de huevo",
            quantity: 1,
          },
          {
            id: 662,
            name: "ramitas-de-albahaca-fresca",
            displayName: "Ramitas de albahaca fresca",
            quantity: 1,
          },
          {
            id: 663,
            name: "puñado-de-piñones",
            displayName: "Puñado de piñones",
            quantity: 1,
          },
          {
            id: 656,
            name: "queso-parmesano-rallado",
            displayName: "Queso parmesano rallado",
            quantity: 1,
          },
          {
            id: 664,
            name: "diente-de-ajo",
            displayName: "Diente de ajo",
            quantity: 1,
          },
          {
            id: 665,
            name: "aceite-de-oliva",
            displayName: "Aceite de oliva",
            quantity: 2,
          },
        ],
        mainCategory: {
          id: 5669,
          name: "dinner",
          displayName: "Cena",
          icon: "dinner",
        },
        subCategory: [
          {
            id: 328,
            name: "comida-italiana",
            displayName: "Comida Italiana",
            icon: "italian",
          },
        ],
        time: {
          id: 1123,
          name: "medio",
          displayName: "Medio",
          icon: "medium",
          maxTime: 30,
        },
        difficulty: "Fácil",
      },
      owner: {
        id: 987654321,
        firstName: "Laura",
        lastName: "García",
      },
      favs: 42,
      comments: [
        {
          id: 12231,
          user: {
            id: 123,
            firstName: "Laura",
            lastName: "García",
          },
          comment: "Me encanta esta receta, la hago cada semana",
          date: new Date("2021-02-01T12:00:00.000Z"),
        },
        {
          id: 12232,
          user: {
            id: 124,
            firstName: "Norma",
            lastName: "Jones",
          },
          comment: "Básica pero efectivísima!",
          date: new Date("2021-02-01T12:00:00.000Z"),
        },
      ],
      rating: 3.4,
      date: new Date("2021-02-01T12:00:00.000Z"),
    },
  ],
  categories: [
    {
      id: 4752,
      name: "pasta",
      displayName: "Pasta",
      icon: "pasta",
    },
  ],
  ingredients: [
    {
      id: 23369,
      name: "pasta-de-tomate",
      displayName: "Pasta de tomate",
    },
    {
      id: 8752,
      name: "pasta-de-berenjenas",
      displayName: "Pasta de berenjenas",
    },
    {
      id: 321489,
      name: "pasta-miso",
      displayName: "Pasta miso",
    },
  ],
};
