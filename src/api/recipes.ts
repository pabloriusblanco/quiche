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
      " <b>1.</b> En una olla grande, llena de agua, agrega sal y lleva a ebullición. Asegúrate de utilizar suficiente agua para que la pasta se cocine de manera uniforme y tenga espacio para expandirse. <br/><br/><b>2.</b> Agrega la pasta a la olla y cocina de acuerdo a las instrucciones del paquete hasta que esté al dente. Revuelve ocasionalmente para evitar que la pasta se pegue en el fondo de la olla. Prueba la pasta para asegurarte de que esté cocida, pero aún firme al morderla. <br/><br/><b>3.</b> Mientras tanto, en una sartén, calienta la salsa de tomate a fuego medio. Puedes utilizar una salsa de tomate casera o una comprada en el supermercado, según tus preferencias. Si lo deseas, puedes agregar hierbas y especias adicionales para realzar el sabor. <br/><br/><b>4.</b> Una vez que la pasta esté lista, escúrrela y enjuágala con agua caliente. Esto ayudará a detener el proceso de cocción y eliminará el exceso de almidón que puede hacer que la pasta se vuelva pegajosa. <br/><br/><b>5.</b> Agrega la pasta cocida a la salsa de tomate caliente y revuelve bien para que se mezclen los sabores. Asegúrate de cubrir completamente la pasta con la salsa para obtener un sabor equilibrado en cada bocado. <br/><br/><b>6.</b> Sirve la pasta con la salsa de tomate en platos individuales. Puedes decorar cada plato con un poco de queso rallado y algunas hojas de albahaca fresca para darle un toque de color y sabor adicional. <br/><br/><b>7.</b> Decora cada plato con queso rallado y hojas de albahaca fresca. Esto agregará un toque de textura y frescura a tu plato de pasta. <br/><br/><b>8.</b> ¡Disfruta de tu deliciosa pasta con salsa de tomate casera! Si lo deseas, puedes acompañarla con una ensalada o pan recién horneado para completar tu comida.",
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
    {
      id: 689966,
      user: {
        id: 789012,
        firstName: "Carolina",
        lastName: "López",
      },
      comment:
        "Esta receta es increíble. La preparé para una cena con amigos y todos quedaron fascinados. ¡Definitivamente la recomendaré!",
      date: new Date("2021-06-15T18:30:00.000Z"),
    },
    {
      id: 689967,
      user: {
        id: 123456,
        firstName: "Luis",
        lastName: "Martínez",
      },
      comment:
        "¡Qué delicia de receta! No puedo creer lo fácil que es de hacer y lo bien que queda. Sin duda, la repetiré muy pronto.",
      date: new Date("2021-07-03T09:45:00.000Z"),
    },
    {
      id: 689968,
      user: {
        id: 567890,
        firstName: "Ana",
        lastName: "Sánchez",
      },
      comment:
        "Probé esta receta anoche y quedé encantada. Los sabores se complementan a la perfección. ¡Gracias por compartirla!",
      date: new Date("2021-08-21T20:15:00.000Z"),
    },
    {
      id: 689969,
      user: {
        id: 901234,
        firstName: "María",
        lastName: "Rodríguez",
      },
      comment:
        "Mis hijos son muy exigentes con la comida, pero esta receta les encantó. ¡Ahora la piden todo el tiempo!",
      date: new Date("2021-09-09T15:10:00.000Z"),
    },
    {
      id: 689970,
      user: {
        id: 345678,
        firstName: "Pedro",
        lastName: "Fernández",
      },
      comment:
        "La receta es maravillosa. No solo es deliciosa, sino que también es muy saludable. ¡Gracias por compartirla!",
      date: new Date("2021-10-17T12:30:00.000Z"),
    },
    {
      id: 689971,
      user: {
        id: 789012,
        firstName: "Camila",
        lastName: "Gómez",
      },
      comment:
        "Hice esta receta para una cena romántica y fue todo un acierto. Mi pareja quedó impresionada. ¡Mil gracias!",
      date: new Date("2021-11-25T19:50:00.000Z"),
    },
    {
      id: 689972,
      user: {
        id: 123456,
        firstName: "Gabriel",
        lastName: "Torres",
      },
      comment:
        "Esta receta es mi favorita. La preparo cada vez que tengo invitados y siempre es un éxito. ¡No puedo recomendarla lo suficiente!",
      date: new Date("2022-01-05T14:20:00.000Z"),
    },
    {
      id: 689973,
      user: {
        id: 567890,
        firstName: "Laura",
        lastName: "García",
      },
      comment:
        "Mis amigas y yo hicimos esta receta juntas y nos divertimos mucho. Además, el resultado fue delicioso. ¡Gracias por compartir esta joya!",
      date: new Date("2022-02-14T17:40:00.000Z"),
    },
    {
      id: 689974,
      user: {
        id: 901234,
        firstName: "Javier",
        lastName: "Hernández",
      },
      comment:
        "La hice siguiendo la receta al pie de la letra y quedó espectacular. ¡Soy todo un chef gracias a ti!",
      date: new Date("2022-03-23T11:55:00.000Z"),
    },
    {
      id: 689975,
      user: {
        id: 345678,
        firstName: "Martina",
        lastName: "López",
      },
      comment:
        "Preparé esta receta para celebrar mi cumpleaños y fue un verdadero acierto. Todos quedaron fascinados. ¡Gracias por hacer mi día especial!",
      date: new Date("2022-04-30T22:00:00.000Z"),
    },
  ],
  rating: 4.1,
  date: new Date("2021-02-01T12:00:00.000Z"),
};
