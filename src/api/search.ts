import { SimpleSearchResponse } from "../types/Api";
import { Category, Ingredient, Post } from "../types/Recipe";
import { api } from "./index";

export type SimpleSearchResults = {
  posts: Post[];
  categories: Category[];
  ingredients: Ingredient[];
};

export async function simpleSearch(
  query: string
): Promise<SimpleSearchResponse> {
  console.log("simpleSearch", query);
  const response = await api.get(`Home/SimpleSearch/?Search=${query}`);
  console.log(response.data.data);
  return response.data.data;
}

//   return new Promise<SimpleSearchResults>((resolve, reject) => {
//     setTimeout(() => {
//       resolve({posts: [], categories: [], ingredients: []});
//       // resolve(mockSimpleSearchResults);
//     }, 1000);
//   });
// }

// const mockSimpleSearchResults: SimpleSearchResults = {
//   posts: [
//     {
//       id: 123456789,
//       recipe: {
//         id: 564738291,
//         name: "Pasta con salsa de tomate",
//         description:
//           "Un delicioso plato de pasta con una exquisita salsa de tomate casera, generosamente cubierto con queso rallado y decorado con hojas frescas de albahaca. Esta combinación clásica de sabores te transportará a la auténtica cocina italiana. Cada bocado te brindará la suavidad de la pasta al dente, el sabor vibrante y ligeramente ácido de la salsa de tomate, el toque cremoso y gratinado del queso, y el aroma fresco y herbáceo de la albahaca. ¡Prepárate para disfrutar de una explosión de sabores en cada cucharada!",
//         steps:
//           "1. Hervir la pasta en agua con sal. 2. Calentar la salsa de tomate. 3. Servir la pasta con la salsa de tomate y decorar con queso y albahaca.",
//         image: "",
//         ingredients: [
//           {
//             id: 669,
//             name: "paquete-de-fideos-de-huevo",
//             displayName: "Paquete de fideos de huevo",
//             quantity: 1,
//           },
//           {
//             id: 666,
//             name: "lata-de-tomate-triturado-perita",
//             displayName: "Lata de tomate triturado perita",
//             quantity: 2,
//           },
//           {
//             id: 656,
//             name: "queso-parmesano-rallado",
//             displayName: "Queso parmesano rallado",
//             quantity: 1,
//           },
//           {
//             id: 655,
//             name: "hojas-de-albahaca",
//             displayName: "Hojas de albahaca",
//             quantity: 12,
//           },
//         ],
//         mainCategory: {
//           id: 328,
//           name: "italiana",
//           displayName: "Comida Italiana",
//           icon: "italian",
//           description:
//             "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
//         },
//         subCategory: [
//           {
//             id: 5669,
//             name: "dinner",
//             displayName: "Cena",
//             icon: "dinner",
//             description:
//               "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
//           },
//         ],
//         time: {
//           value: 35,
//           reference: {
//             name: "short",
//             displayName: "Corto",
//             icon: "short",
//             maxTime: 112,
//           },
//         },
//         difficulty: {
//           id: 1123,
//           name: "easy",
//           displayName: "Fácil",
//           icon: "easy",
//         },
//       },
//       owner: {
//         id: 123456789,
//         firstName: "Juan",
//         lastName: "Perez",
//       },
//       favs: 36,
//       comments: [
//         {
//           id: 689965,
//           user: {
//             id: 336568,
//             firstName: "Ramiro",
//             lastName: "Gonzalez",
//           },
//           comment:
//             "Muchas gracias por la receta, me encantó! La hice para mis hijos y les encantó!",
//           date: new Date("2021-05-01T12:00:00.000Z"),
//         },
//       ],
//       rating: 4.1,
//       date: new Date("2021-02-01T12:00:00.000Z"),
//     },
//     {
//       id: 987654321,
//       recipe: {
//         id: 876543210,
//         name: "Pasta al pesto",
//         description:
//           "Un exquisito plato de pasta con una irresistible salsa de pesto casera, acompañada de piñones tostados y generosamente espolvoreado con queso parmesano rallado. La combinación de sabores te transportará directamente a la hermosa región de Liguria en Italia, donde el pesto tiene su origen. Cada bocado de esta pasta al dente estará impregnado con el intenso sabor del pesto, elaborado a base de albahaca fresca, aceite de oliva, ajo y queso parmesano. Los piñones tostados añadirán una textura crujiente y un sabor ligeramente dulce, mientras que el queso parmesano se derretirá sobre la pasta, aportando un toque salado y sabroso. ¡Prepárate para disfrutar de una experiencia culinaria llena de aromas y sabores deliciosos con este plato de pasta con salsa de pesto, piñones y queso parmesano!",
//         steps:
//           "1. Cocinar la pasta al dente en agua con sal. 2. Preparar la salsa de pesto mezclando albahaca, piñones, ajo, queso parmesano y aceite de oliva en un procesador de alimentos. 3. Mezclar la pasta cocida con la salsa de pesto y servir caliente.",
//         image: "https://www.example.com/pasta-al-pesto.jpg",
//         ingredients: [
//           {
//             id: 669,
//             name: "paquete-de-fideos-de-huevo",
//             displayName: "Paquete de fideos de huevo",
//             quantity: 1,
//           },
//           {
//             id: 662,
//             name: "ramitas-de-albahaca-fresca",
//             displayName: "Ramitas de albahaca fresca",
//             quantity: 1,
//           },
//           {
//             id: 663,
//             name: "puñado-de-piñones",
//             displayName: "Puñado de piñones",
//             quantity: 1,
//           },
//           {
//             id: 656,
//             name: "queso-parmesano-rallado",
//             displayName: "Queso parmesano rallado",
//             quantity: 1,
//           },
//           {
//             id: 664,
//             name: "diente-de-ajo",
//             displayName: "Diente de ajo",
//             quantity: 1,
//           },
//           {
//             id: 665,
//             name: "aceite-de-oliva",
//             displayName: "Aceite de oliva",
//             quantity: 2,
//           },
//         ],
//         mainCategory: {
//           id: 5669,
//           name: "lunch",
//           displayName: "Almuerzo",
//           icon: "lunch",
//           description:
//             "El almuerzo es una comida clave durante el día, ya que aporta energía y nutrientes esenciales para mantener un buen rendimiento físico y mental. Disfrutar de un almuerzo balanceado contribuye a mantener un peso saludable y prevenir enfermedades relacionadas con la alimentación.",
//         },
//         subCategory: [
//           {
//             id: 328,
//             name: "comida-italiana",
//             displayName: "Comida Italiana",
//             icon: "italian",
//             description:
//               "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
//           },
//         ],
//         time: {
//           value: 30,
//           reference: {
//             name: "medium",
//             displayName: "Medio",
//             icon: "medium",
//             maxTime: 112,
//           },
//         },
//         difficulty: {
//           id: 1123,
//           name: "regular",
//           displayName: "Regular",
//           icon: "regular",
//         },
//       },
//       owner: {
//         id: 987654321,
//         firstName: "Laura",
//         lastName: "García",
//       },
//       favs: 42,
//       comments: [
//         {
//           id: 12231,
//           user: {
//             id: 123,
//             firstName: "Laura",
//             lastName: "García",
//           },
//           comment: "Me encanta esta receta, la hago cada semana",
//           date: new Date("2021-02-01T12:00:00.000Z"),
//         },
//         {
//           id: 12232,
//           user: {
//             id: 124,
//             firstName: "Norma",
//             lastName: "Jones",
//           },
//           comment: "Básica pero efectivísima!",
//           date: new Date("2021-02-01T12:00:00.000Z"),
//         },
//       ],
//       rating: 3.4,
//       date: new Date("2021-02-01T12:00:00.000Z"),
//     },
//   ],
//   categories: [
//     {
//       id: 4752,
//       name: "pasta",
//       displayName: "Pasta",
//       icon: "pasta",
//       description:
//         "La pasta es un alimento versátil y popular que se disfruta en todo el mundo. Puedes encontrar una amplia variedad de pastas, como espaguetis, fettuccine, penne y lasaña, que se pueden combinar con diferentes salsas y ingredientes. La pasta es una opción deliciosa y reconfortante que se puede adaptar a diferentes gustos y preferencias.",
//     },
//   ],
//   ingredients: [
//     {
//       id: 23369,
//       name: "pasta-de-tomate",
//       displayName: "Pasta de tomate",
//     },
//     {
//       id: 8752,
//       name: "pasta-de-berenjenas",
//       displayName: "Pasta de berenjenas",
//     },
//     {
//       id: 321489,
//       name: "pasta-miso",
//       displayName: "Pasta miso",
//     },
//   ],
// };
