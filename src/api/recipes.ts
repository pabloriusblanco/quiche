import { Post } from "../types/Recipe";
import { api } from "./index";

export async function getMonthRecipes(): Promise<Post[]> {
  const response = await api.get("/month-recipes");
  return response.data;
}

export async function getRecipe(id: string): Promise<Post> {
  // const response = await api.get(`/recipes/${id}`);
  // return response.data;

  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve(mockDetailRecipe);
    }, 1000);
  });
}

export async function createRecipe(recipe: Post): Promise<Post> {
  const response = await api.post("/recipes", recipe);
  return response.data;
}

export async function updateRecipe(recipe: Post): Promise<Post> {
  const response = await api.put(`/recipes/${recipe.id}`, recipe);
  return response.data;
}

export async function deleteRecipe(id: number): Promise<void> {
  await api.delete(`/recipes/${id}`);
}

const mockDetailRecipe: Post = {
  id: 123456789,
  recipe: {
    id: 564738291,
    name: "Pasta con salsa de tomate",
    description:
      "Un delicioso plato de pasta con una exquisita salsa de tomate casera, generosamente cubierto con queso rallado y decorado con hojas frescas de albahaca. Esta combinación clásica de sabores te transportará a la auténtica cocina italiana. Cada bocado te brindará la suavidad de la pasta al dente, el sabor vibrante y ligeramente ácido de la salsa de tomate, el toque cremoso y gratinado del queso, y el aroma fresco y herbáceo de la albahaca. ¡Prepárate para disfrutar de una explosión de sabores en cada cucharada!",
    steps:
      "1. Hervir la pasta en agua con sal. 2. Calentar la salsa de tomate. 3. Servir la pasta con la salsa de tomate y decorar con queso y albahaca.",
    image: "",
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
      id: 328,
      name: "italian",
      displayName: "Italiana",
      icon: "italian",
      description:
        "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
    },
    subCategory: [
      {
        id: 5669,
        name: "dinner",
        displayName: "Cena",
        icon: "dinner",
        description:
          "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
      },
      {
        id: 5669,
        name: "pasta",
        displayName: "Pasta",
        icon: "pasta",
        description:
          "La pasta es un alimento versátil y popular que se disfruta en todo el mundo. Puedes encontrar una amplia variedad de pastas, como espaguetis, fettuccine, penne y lasaña, que se pueden combinar con diferentes salsas y ingredientes. La pasta es una opción deliciosa y reconfortante que se puede adaptar a diferentes gustos y preferencias.",
      },
      {
        id: 5669,
        name: "vegetarian",
        displayName: "Vegetariano",
        icon: "vegetarian",
        description:
          "La comida vegetariana se basa en ingredientes de origen vegetal y excluye la carne, el pescado y las aves. Una dieta vegetariana incluye frutas, verduras, legumbres, cereales, nueces, semillas, productos lácteos y huevos. Ser vegetariano puede ser una opción saludable y ética, ya que se evita el consumo de carne y se favorece la ingesta de alimentos ricos en nutrientes vegetales.",
      },
      {
        id: 5669,
        name: "nomeat",
        displayName: "Sin carne",
        icon: "nomeat",
        description:
          "Las comidas sin carne son opciones vegetarianas o veganas que no incluyen ningún tipo de carne animal. Estas comidas se basan en ingredientes vegetales, como legumbres, verduras, frutas, granos y nueces. Las dietas sin carne pueden ser nutritivas y variadas, proporcionando proteínas, vitaminas y minerales importantes. Si prefieres evitar la carne o sigues una dieta vegetariana o vegana, las opciones sin carne son ideales para ti.",
      },
    ],
    time: {
      id: 1123,
      name: "short",
      displayName: "Medio",
      icon: "short",
      value: 35,
    },
    difficulty: {
      id: 1123,
      name: "easy",
      displayName: "Fácil",
      icon: "easy",
    },
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
};
