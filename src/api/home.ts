import { Post } from "../types/Recipe";

export type PostResults = {
  posts: Post[];
};

export async function monthPosts(): Promise<PostResults> {
  // const response = await api.get(`/search?query=${query}`);
  // return response.data;

  return new Promise<PostResults>((resolve, reject) => {
    setTimeout(() => {
      resolve(monthPostsMock);
    }, 3000);
  });
}

export async function dayPosts(): Promise<PostResults> {
  // const response = await api.get(`/search?query=${query}`);
  // return response.data;

  return new Promise<PostResults>((resolve, reject) => {
    setTimeout(() => {
      resolve(dayPostsMock);
    }, 3000);
  });
}

const dayPostsMock: PostResults = {
  posts: [
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
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
          name: "comida-italiana",
          displayName: "Comida Italiana",
          icon: "italian",
          description:
            "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
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
        ],
        time: {
          reference: {
            name: "short",
            displayName: "Medio",
            icon: "short",
            maxTime: 30,
          },
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
        id: Number((Math.random() * 1000000).toFixed()),
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
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-02-01T12:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Estofado de Lentejas",
        description:
          "Un reconfortante estofado de lentejas que combina ingredientes saludables y sabores irresistibles. Las lentejas, ricas en proteínas y fibra, se cocinan lentamente en una salsa de tomate casera junto con una variedad de verduras y especias. El resultado es un plato abundante y nutritivo que te llenará de energía y te dejará satisfecho. Cada cucharada te brindará el sabor terroso de las lentejas, la dulzura de las verduras y el toque aromático de las especias. Sirve este estofado con arroz integral o pan fresco para disfrutar al máximo de su delicioso sabor.",
        steps:
          "1. Enjuaga las lentejas y déjalas en remojo durante 30 minutos. 2. En una olla grande, calienta aceite de oliva y añade cebolla, zanahoria y apio picados. Cocina hasta que estén tiernos. 3. Agrega las lentejas escurridas y revuelve para combinar. 4. Añade tomates picados, caldo de verduras, especias y sal al gusto. 5. Lleva a ebullición y luego reduce el fuego. Cocina a fuego lento durante aproximadamente 45 minutos o hasta que las lentejas estén tiernas. 6. Sirve caliente y disfruta de este delicioso estofado de lentejas.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "lentejas",
            displayName: "Lentejas",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "zanahoria",
            displayName: "Zanahoria",
            quantity: 2,
          },
          {
            id: 444,
            name: "apio",
            displayName: "Apio",
            quantity: 2,
          },
          {
            id: 555,
            name: "tomates-picados",
            displayName: "Tomates picados",
            quantity: 1,
          },
          {
            id: 666,
            name: "caldo-de-verduras",
            displayName: "Caldo de verduras",
            quantity: 2,
          },
          {
            id: 777,
            name: "especias",
            displayName: "Especias (comino, pimentón, orégano)",
            quantity: null,
          },
          {
            id: 888,
            name: "sal",
            displayName: "Sal",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 123,
          name: "comida-vegetariana",
          displayName: "Comida Vegetariana",
          icon: "vegetarian",
          description:
            "La comida vegetariana se basa en ingredientes de origen vegetal y excluye la carne, el pescado y las aves. Una dieta vegetariana incluye frutas, verduras, legumbres, cereales, nueces, semillas, productos lácteos y huevos. Ser vegetariano puede ser una opción saludable y ética, ya que se evita el consumo de carne y se favorece la ingesta de alimentos ricos en nutrientes vegetales.",
        },
        subCategory: [
          {
            id: 456,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 789,
            name: "vegan",
            displayName: "Vegano",
            icon: "vegan",
            description:
              "La comida vegana se basa en ingredientes de origen vegetal y excluye cualquier producto animal o derivado. Una dieta vegana incluye frutas, verduras, legumbres, cereales, nueces, semillas y productos vegetales como tofu o leche vegetal. Adoptar un estilo de vida vegano puede ser beneficioso para la salud y el medio ambiente.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 987,
          name: "easy",
          displayName: "Fácil",
          icon: "easy",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Ana",
        lastName: "González",
      },
      favs: 12,
      comments: [
        {
          id: 987987,
          user: {
            id: 654654,
            firstName: "Laura",
            lastName: "López",
          },
          comment:
            "Probé esta receta y quedó espectacular. El estofado de lentejas tiene un sabor increíble. ¡Definitivamente lo prepararé de nuevo!",
          date: new Date("2021-10-15T18:30:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-10-10T10:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pollo al Curry con Arroz",
        description:
          "Una deliciosa combinación de sabores exóticos y tiernos trozos de pollo en una suave salsa de curry, servido con arroz aromático. Este plato te transportará a las tierras de especias y te hará disfrutar de una experiencia culinaria llena de aromas y sabores. El pollo se cocina lentamente en una mezcla de especias y hierbas, junto con cebolla, ajo y jengibre, hasta que esté tierno y jugoso. La salsa de curry se espesa y se llena de notas de coco y cúrcuma, creando una combinación perfecta con el arroz. Disfruta de este plato lleno de sabor y textura.",
        steps:
          "1. En una sartén grande, calienta aceite y añade cebolla picada, ajo y jengibre rallados. Cocina hasta que estén dorados. 2. Agrega trozos de pollo y cocínalos hasta que estén dorados por todos lados. 3. Añade especias como curry en polvo, cúrcuma, comino y canela. Revuelve para cubrir el pollo. 4. Agrega tomate picado, caldo de pollo y leche de coco. Cocina a fuego lento hasta que el pollo esté tierno y la salsa se haya espesado. 5. Sirve el pollo al curry sobre arroz cocido y decora con cilantro fresco.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "pollo",
            displayName: "Pollo",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "diente-de-ajo",
            displayName: "Diente de Ajo",
            quantity: 3,
          },
          {
            id: 444,
            name: "jengibre",
            displayName: "Jengibre a gusto",
            quantity: null,
          },
          {
            id: 555,
            name: "cucharadita-de-curry-en-polvo",
            displayName: "Cucharadita de Curry en polvo",
            quantity: 2,
          },
          {
            id: 666,
            name: "cucharadita-de-cúrcuma",
            displayName: "Cucharadita de Cúrcuma",
            quantity: 1,
          },
          {
            id: 777,
            name: "cucharadita-de-comino",
            displayName: "Cucharadita de Comino",
            quantity: 1,
          },
          {
            id: 888,
            name: "cucharadita-de-canela",
            displayName: "Cucharadita de Canela",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "tomate",
            displayName: "Tomate",
            quantity: 2,
          },
          {
            id: 101010,
            name: "caldo-de-pollo",
            displayName: "Caldo de pollo",
            quantity: 1,
          },
          {
            id: 111111,
            name: "lata-leche-de-coco",
            displayName: "Lata leche de coco",
            quantity: 1,
          },
          {
            id: 121212,
            name: "taza-de-arroz",
            displayName: "Taza de arroz",
            quantity: 2,
          },
          {
            id: 131313,
            name: "cilantro",
            displayName: "Cilantro",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 1212,
          name: "asiatica",
          displayName: "Asiática",
          icon: "asian",
          description:
            "La comida asiática abarca una amplia gama de culturas culinarias, como la cocina china, japonesa, tailandesa y vietnamita, entre otras. Cada una tiene sus propias características y sabores únicos. Desde el arroz frito y los fideos hasta el sushi y el curry, la comida asiática es conocida por su equilibrio de sabores, ingredientes frescos y presentaciones artísticas.",
        },
        subCategory: [
          {
            id: 8888,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 9999,
            name: "chicken",
            displayName: "Pollo",
            icon: "chicken",
            description:
              "El pollo es una opción versátil y popular en muchas cocinas alrededor del mundo. Puede prepararse de diversas formas, como a la parrilla, al horno, a la plancha o en guisos. Es una excelente fuente de proteínas magras y se puede combinar con una amplia variedad de ingredientes y sabores. El pollo ofrece infinitas posibilidades culinarias y es una opción saludable y deliciosa para disfrutar en tus platos.",
          },
        ],
        time: {
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 90,
          },
          value: 45,
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: 135792468,
        firstName: "María",
        lastName: "López",
      },
      favs: 25,
      comments: [
        {
          id: 121212,
          user: {
            id: 232323,
            firstName: "Carlos",
            lastName: "Martínez",
          },
          comment:
            "¡Este pollo al curry es espectacular! La combinación de especias y la suavidad de la salsa son increíbles. Sin duda, una receta para repetir.",
          date: new Date("2021-09-20T16:45:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-15T14:30:00.000Z"),
    },
  ],
};

const monthPostsMock: PostResults = {
  posts: [
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
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
          name: "comida-italiana",
          displayName: "Comida Italiana",
          icon: "italian",
          description:
            "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
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
        ],
        time: {
          reference: {
            name: "short",
            displayName: "Medio",
            icon: "short",
            maxTime: 30,
          },
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
        id: Number((Math.random() * 1000000).toFixed()),
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
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-02-01T12:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Estofado de Lentejas",
        description:
          "Un reconfortante estofado de lentejas que combina ingredientes saludables y sabores irresistibles. Las lentejas, ricas en proteínas y fibra, se cocinan lentamente en una salsa de tomate casera junto con una variedad de verduras y especias. El resultado es un plato abundante y nutritivo que te llenará de energía y te dejará satisfecho. Cada cucharada te brindará el sabor terroso de las lentejas, la dulzura de las verduras y el toque aromático de las especias. Sirve este estofado con arroz integral o pan fresco para disfrutar al máximo de su delicioso sabor.",
        steps:
          "1. Enjuaga las lentejas y déjalas en remojo durante 30 minutos. 2. En una olla grande, calienta aceite de oliva y añade cebolla, zanahoria y apio picados. Cocina hasta que estén tiernos. 3. Agrega las lentejas escurridas y revuelve para combinar. 4. Añade tomates picados, caldo de verduras, especias y sal al gusto. 5. Lleva a ebullición y luego reduce el fuego. Cocina a fuego lento durante aproximadamente 45 minutos o hasta que las lentejas estén tiernas. 6. Sirve caliente y disfruta de este delicioso estofado de lentejas.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "lentejas",
            displayName: "Lentejas",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "zanahoria",
            displayName: "Zanahoria",
            quantity: 2,
          },
          {
            id: 444,
            name: "apio",
            displayName: "Apio",
            quantity: 2,
          },
          {
            id: 555,
            name: "tomates-picados",
            displayName: "Tomates picados",
            quantity: 1,
          },
          {
            id: 666,
            name: "caldo-de-verduras",
            displayName: "Caldo de verduras",
            quantity: 2,
          },
          {
            id: 777,
            name: "especias",
            displayName: "Especias (comino, pimentón, orégano)",
            quantity: null,
          },
          {
            id: 888,
            name: "sal",
            displayName: "Sal",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 123,
          name: "comida-vegetariana",
          displayName: "Comida Vegetariana",
          icon: "vegetarian",
          description:
            "La comida vegetariana se basa en ingredientes de origen vegetal y excluye la carne, el pescado y las aves. Una dieta vegetariana incluye frutas, verduras, legumbres, cereales, nueces, semillas, productos lácteos y huevos. Ser vegetariano puede ser una opción saludable y ética, ya que se evita el consumo de carne y se favorece la ingesta de alimentos ricos en nutrientes vegetales.",
        },
        subCategory: [
          {
            id: 456,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 789,
            name: "vegan",
            displayName: "Vegano",
            icon: "vegan",
            description:
              "La comida vegana se basa en ingredientes de origen vegetal y excluye cualquier producto animal o derivado. Una dieta vegana incluye frutas, verduras, legumbres, cereales, nueces, semillas y productos vegetales como tofu o leche vegetal. Adoptar un estilo de vida vegano puede ser beneficioso para la salud y el medio ambiente.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 987,
          name: "easy",
          displayName: "Fácil",
          icon: "easy",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Ana",
        lastName: "González",
      },
      favs: 12,
      comments: [
        {
          id: 987987,
          user: {
            id: 654654,
            firstName: "Laura",
            lastName: "López",
          },
          comment:
            "Probé esta receta y quedó espectacular. El estofado de lentejas tiene un sabor increíble. ¡Definitivamente lo prepararé de nuevo!",
          date: new Date("2021-10-15T18:30:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-10-10T10:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pollo al Curry con Arroz",
        description:
          "Una deliciosa combinación de sabores exóticos y tiernos trozos de pollo en una suave salsa de curry, servido con arroz aromático. Este plato te transportará a las tierras de especias y te hará disfrutar de una experiencia culinaria llena de aromas y sabores. El pollo se cocina lentamente en una mezcla de especias y hierbas, junto con cebolla, ajo y jengibre, hasta que esté tierno y jugoso. La salsa de curry se espesa y se llena de notas de coco y cúrcuma, creando una combinación perfecta con el arroz. Disfruta de este plato lleno de sabor y textura.",
        steps:
          "1. En una sartén grande, calienta aceite y añade cebolla picada, ajo y jengibre rallados. Cocina hasta que estén dorados. 2. Agrega trozos de pollo y cocínalos hasta que estén dorados por todos lados. 3. Añade especias como curry en polvo, cúrcuma, comino y canela. Revuelve para cubrir el pollo. 4. Agrega tomate picado, caldo de pollo y leche de coco. Cocina a fuego lento hasta que el pollo esté tierno y la salsa se haya espesado. 5. Sirve el pollo al curry sobre arroz cocido y decora con cilantro fresco.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "pollo",
            displayName: "Pollo",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "diente-de-ajo",
            displayName: "Diente de Ajo",
            quantity: 3,
          },
          {
            id: 444,
            name: "jengibre",
            displayName: "Jengibre a gusto",
            quantity: null,
          },
          {
            id: 555,
            name: "cucharadita-de-curry-en-polvo",
            displayName: "Cucharadita de Curry en polvo",
            quantity: 2,
          },
          {
            id: 666,
            name: "cucharadita-de-cúrcuma",
            displayName: "Cucharadita de Cúrcuma",
            quantity: 1,
          },
          {
            id: 777,
            name: "cucharadita-de-comino",
            displayName: "Cucharadita de Comino",
            quantity: 1,
          },
          {
            id: 888,
            name: "cucharadita-de-canela",
            displayName: "Cucharadita de Canela",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "tomate",
            displayName: "Tomate",
            quantity: 2,
          },
          {
            id: 101010,
            name: "caldo-de-pollo",
            displayName: "Caldo de pollo",
            quantity: 1,
          },
          {
            id: 111111,
            name: "lata-leche-de-coco",
            displayName: "Lata leche de coco",
            quantity: 1,
          },
          {
            id: 121212,
            name: "taza-de-arroz",
            displayName: "Taza de arroz",
            quantity: 2,
          },
          {
            id: 131313,
            name: "cilantro",
            displayName: "Cilantro",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 1212,
          name: "asiatica",
          displayName: "Comida Asiática",
          icon: "asian",
          description:
            "La comida asiática abarca una amplia gama de culturas culinarias, como la cocina china, japonesa, tailandesa y vietnamita, entre otras. Cada una tiene sus propias características y sabores únicos. Desde el arroz frito y los fideos hasta el sushi y el curry, la comida asiática es conocida por su equilibrio de sabores, ingredientes frescos y presentaciones artísticas.",
        },
        subCategory: [
          {
            id: 8888,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 9999,
            name: "chicken",
            displayName: "Pollo",
            icon: "chicken",
            description:
              "El pollo es una opción versátil y popular en muchas cocinas alrededor del mundo. Puede prepararse de diversas formas, como a la parrilla, al horno, a la plancha o en guisos. Es una excelente fuente de proteínas magras y se puede combinar con una amplia variedad de ingredientes y sabores. El pollo ofrece infinitas posibilidades culinarias y es una opción saludable y deliciosa para disfrutar en tus platos.",
          },
        ],
        time: {
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 90,
          },
          value: 45,
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: 135792468,
        firstName: "María",
        lastName: "López",
      },
      favs: 25,
      comments: [
        {
          id: 121212,
          user: {
            id: 232323,
            firstName: "Carlos",
            lastName: "Martínez",
          },
          comment:
            "¡Este pollo al curry es espectacular! La combinación de especias y la suavidad de la salsa son increíbles. Sin duda, una receta para repetir.",
          date: new Date("2021-09-20T16:45:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-15T14:30:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pizza Casera",
        description:
          "Disfruta de una deliciosa pizza casera con tus ingredientes favoritos. Esta receta te enseñará a hacer una masa crujiente y sabrosa, acompañada de una selección de toppings irresistibles. Prepara esta pizza en casa y sorprende a tu familia y amigos con un plato clásico y lleno de sabor.",
        steps:
          "1. Prepara la masa mezclando harina, levadura, sal, agua y aceite. Amasa hasta obtener una masa suave y elástica. 2. Deja reposar la masa en un lugar cálido durante una hora. 3. Precalienta el horno a alta temperatura. 4. Estira la masa en una bandeja para pizza y añade tu salsa de tomate favorita. 5. Agrega tus ingredientes favoritos, como queso mozzarella, pepperoni, champiñones, aceitunas y pimientos. 6. Hornea la pizza en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada y crujiente. 7. Sirve caliente y disfruta de tu deliciosa pizza casera.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "harina",
            displayName: "Harina",
            quantity: 2,
          },
          {
            id: 222,
            name: "levadura",
            displayName: "Levadura",
            quantity: 1,
          },
          {
            id: 333,
            name: "sal",
            displayName: "Sal",
            quantity: 0.5,
          },
          {
            id: 444,
            name: "agua",
            displayName: "Agua",
            quantity: 1,
          },
          {
            id: 555,
            name: "aceite",
            displayName: "Aceite",
            quantity: 2,
          },
          {
            id: 666,
            name: "salsa-de-tomate",
            displayName: "Salsa de Tomate",
            quantity: 1,
          },
          {
            id: 777,
            name: "queso-mozzarella",
            displayName: "Queso Mozzarella",
            quantity: 1,
          },
          {
            id: 888,
            name: "pepperoni",
            displayName: "Pepperoni",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "champiñones",
            displayName: "Champiñones",
            quantity: 0.5,
          },
          {
            id: 101010,
            name: "aceitunas",
            displayName: "Aceitunas",
            quantity: 0.25,
          },
          {
            id: 111111,
            name: "pimientos",
            displayName: "Pimientos",
            quantity: 0.25,
          },
        ],
        mainCategory: {
          id: 3434,
          name: "snack",
          displayName: "Snack",
          icon: "snack",
          description:
            "Los snacks son pequeñas porciones de comida que se consumen entre las comidas principales. Pueden ser tanto dulces como salados y satisfacen los antojos y proporcionan energía rápida. Los snacks pueden incluir una variedad de opciones como frutas, nueces, barras de granola, galletas, chips o yogur. Los snacks son perfectos para momentos de merienda o cuando se necesita un impulso de energía durante el día.",
        },
        subCategory: [
          {
            id: 1212,
            name: "comida-italiana",
            displayName: "Italiana",
            icon: "italian",
            description:
              "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Juan",
        lastName: "Pérez",
      },
      favs: 10,
      comments: [
        {
          id: 987654,
          user: {
            id: 135792468,
            firstName: "María",
            lastName: "López",
          },
          comment:
            "¡Esta pizza casera es espectacular! La masa queda crujiente por fuera y tierna por dentro. Los ingredientes se combinan a la perfección. ¡La mejor pizza que he probado!",
          date: new Date("2021-09-18T20:15:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-16T18:30:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
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
          name: "comida-italiana",
          displayName: "Comida Italiana",
          icon: "italian",
          description:
            "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
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
        ],
        time: {
          reference: {
            name: "short",
            displayName: "Medio",
            icon: "short",
            maxTime: 30,
          },
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
        id: Number((Math.random() * 1000000).toFixed()),
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
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-02-01T12:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Estofado de Lentejas",
        description:
          "Un reconfortante estofado de lentejas que combina ingredientes saludables y sabores irresistibles. Las lentejas, ricas en proteínas y fibra, se cocinan lentamente en una salsa de tomate casera junto con una variedad de verduras y especias. El resultado es un plato abundante y nutritivo que te llenará de energía y te dejará satisfecho. Cada cucharada te brindará el sabor terroso de las lentejas, la dulzura de las verduras y el toque aromático de las especias. Sirve este estofado con arroz integral o pan fresco para disfrutar al máximo de su delicioso sabor.",
        steps:
          "1. Enjuaga las lentejas y déjalas en remojo durante 30 minutos. 2. En una olla grande, calienta aceite de oliva y añade cebolla, zanahoria y apio picados. Cocina hasta que estén tiernos. 3. Agrega las lentejas escurridas y revuelve para combinar. 4. Añade tomates picados, caldo de verduras, especias y sal al gusto. 5. Lleva a ebullición y luego reduce el fuego. Cocina a fuego lento durante aproximadamente 45 minutos o hasta que las lentejas estén tiernas. 6. Sirve caliente y disfruta de este delicioso estofado de lentejas.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "lentejas",
            displayName: "Lentejas",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "zanahoria",
            displayName: "Zanahoria",
            quantity: 2,
          },
          {
            id: 444,
            name: "apio",
            displayName: "Apio",
            quantity: 2,
          },
          {
            id: 555,
            name: "tomates-picados",
            displayName: "Tomates picados",
            quantity: 1,
          },
          {
            id: 666,
            name: "caldo-de-verduras",
            displayName: "Caldo de verduras",
            quantity: 2,
          },
          {
            id: 777,
            name: "especias",
            displayName: "Especias (comino, pimentón, orégano)",
            quantity: null,
          },
          {
            id: 888,
            name: "sal",
            displayName: "Sal",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 123,
          name: "comida-vegetariana",
          displayName: "Comida Vegetariana",
          icon: "vegetarian",
          description:
            "La comida vegetariana se basa en ingredientes de origen vegetal y excluye la carne, el pescado y las aves. Una dieta vegetariana incluye frutas, verduras, legumbres, cereales, nueces, semillas, productos lácteos y huevos. Ser vegetariano puede ser una opción saludable y ética, ya que se evita el consumo de carne y se favorece la ingesta de alimentos ricos en nutrientes vegetales.",
        },
        subCategory: [
          {
            id: 456,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 789,
            name: "vegan",
            displayName: "Vegano",
            icon: "vegan",
            description:
              "La comida vegana se basa en ingredientes de origen vegetal y excluye cualquier producto animal o derivado. Una dieta vegana incluye frutas, verduras, legumbres, cereales, nueces, semillas y productos vegetales como tofu o leche vegetal. Adoptar un estilo de vida vegano puede ser beneficioso para la salud y el medio ambiente.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 987,
          name: "easy",
          displayName: "Fácil",
          icon: "easy",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Ana",
        lastName: "González",
      },
      favs: 12,
      comments: [
        {
          id: 987987,
          user: {
            id: 654654,
            firstName: "Laura",
            lastName: "López",
          },
          comment:
            "Probé esta receta y quedó espectacular. El estofado de lentejas tiene un sabor increíble. ¡Definitivamente lo prepararé de nuevo!",
          date: new Date("2021-10-15T18:30:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-10-10T10:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pollo al Curry con Arroz",
        description:
          "Una deliciosa combinación de sabores exóticos y tiernos trozos de pollo en una suave salsa de curry, servido con arroz aromático. Este plato te transportará a las tierras de especias y te hará disfrutar de una experiencia culinaria llena de aromas y sabores. El pollo se cocina lentamente en una mezcla de especias y hierbas, junto con cebolla, ajo y jengibre, hasta que esté tierno y jugoso. La salsa de curry se espesa y se llena de notas de coco y cúrcuma, creando una combinación perfecta con el arroz. Disfruta de este plato lleno de sabor y textura.",
        steps:
          "1. En una sartén grande, calienta aceite y añade cebolla picada, ajo y jengibre rallados. Cocina hasta que estén dorados. 2. Agrega trozos de pollo y cocínalos hasta que estén dorados por todos lados. 3. Añade especias como curry en polvo, cúrcuma, comino y canela. Revuelve para cubrir el pollo. 4. Agrega tomate picado, caldo de pollo y leche de coco. Cocina a fuego lento hasta que el pollo esté tierno y la salsa se haya espesado. 5. Sirve el pollo al curry sobre arroz cocido y decora con cilantro fresco.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "pollo",
            displayName: "Pollo",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "diente-de-ajo",
            displayName: "Diente de Ajo",
            quantity: 3,
          },
          {
            id: 444,
            name: "jengibre",
            displayName: "Jengibre a gusto",
            quantity: null,
          },
          {
            id: 555,
            name: "cucharadita-de-curry-en-polvo",
            displayName: "Cucharadita de Curry en polvo",
            quantity: 2,
          },
          {
            id: 666,
            name: "cucharadita-de-cúrcuma",
            displayName: "Cucharadita de Cúrcuma",
            quantity: 1,
          },
          {
            id: 777,
            name: "cucharadita-de-comino",
            displayName: "Cucharadita de Comino",
            quantity: 1,
          },
          {
            id: 888,
            name: "cucharadita-de-canela",
            displayName: "Cucharadita de Canela",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "tomate",
            displayName: "Tomate",
            quantity: 2,
          },
          {
            id: 101010,
            name: "caldo-de-pollo",
            displayName: "Caldo de pollo",
            quantity: 1,
          },
          {
            id: 111111,
            name: "lata-leche-de-coco",
            displayName: "Lata leche de coco",
            quantity: 1,
          },
          {
            id: 121212,
            name: "taza-de-arroz",
            displayName: "Taza de arroz",
            quantity: 2,
          },
          {
            id: 131313,
            name: "cilantro",
            displayName: "Cilantro",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 1212,
          name: "asiatica",
          displayName: "Comida Asiática",
          icon: "asian",
          description:
            "La comida asiática abarca una amplia gama de culturas culinarias, como la cocina china, japonesa, tailandesa y vietnamita, entre otras. Cada una tiene sus propias características y sabores únicos. Desde el arroz frito y los fideos hasta el sushi y el curry, la comida asiática es conocida por su equilibrio de sabores, ingredientes frescos y presentaciones artísticas.",
        },
        subCategory: [
          {
            id: 8888,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 9999,
            name: "chicken",
            displayName: "Pollo",
            icon: "chicken",
            description:
              "El pollo es una opción versátil y popular en muchas cocinas alrededor del mundo. Puede prepararse de diversas formas, como a la parrilla, al horno, a la plancha o en guisos. Es una excelente fuente de proteínas magras y se puede combinar con una amplia variedad de ingredientes y sabores. El pollo ofrece infinitas posibilidades culinarias y es una opción saludable y deliciosa para disfrutar en tus platos.",
          },
        ],
        time: {
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 90,
          },
          value: 45,
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: 135792468,
        firstName: "María",
        lastName: "López",
      },
      favs: 25,
      comments: [
        {
          id: 121212,
          user: {
            id: 232323,
            firstName: "Carlos",
            lastName: "Martínez",
          },
          comment:
            "¡Este pollo al curry es espectacular! La combinación de especias y la suavidad de la salsa son increíbles. Sin duda, una receta para repetir.",
          date: new Date("2021-09-20T16:45:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-15T14:30:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pizza Casera",
        description:
          "Disfruta de una deliciosa pizza casera con tus ingredientes favoritos. Esta receta te enseñará a hacer una masa crujiente y sabrosa, acompañada de una selección de toppings irresistibles. Prepara esta pizza en casa y sorprende a tu familia y amigos con un plato clásico y lleno de sabor.",
        steps:
          "1. Prepara la masa mezclando harina, levadura, sal, agua y aceite. Amasa hasta obtener una masa suave y elástica. 2. Deja reposar la masa en un lugar cálido durante una hora. 3. Precalienta el horno a alta temperatura. 4. Estira la masa en una bandeja para pizza y añade tu salsa de tomate favorita. 5. Agrega tus ingredientes favoritos, como queso mozzarella, pepperoni, champiñones, aceitunas y pimientos. 6. Hornea la pizza en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada y crujiente. 7. Sirve caliente y disfruta de tu deliciosa pizza casera.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "harina",
            displayName: "Harina",
            quantity: 2,
          },
          {
            id: 222,
            name: "levadura",
            displayName: "Levadura",
            quantity: 1,
          },
          {
            id: 333,
            name: "sal",
            displayName: "Sal",
            quantity: 0.5,
          },
          {
            id: 444,
            name: "agua",
            displayName: "Agua",
            quantity: 1,
          },
          {
            id: 555,
            name: "aceite",
            displayName: "Aceite",
            quantity: 2,
          },
          {
            id: 666,
            name: "salsa-de-tomate",
            displayName: "Salsa de Tomate",
            quantity: 1,
          },
          {
            id: 777,
            name: "queso-mozzarella",
            displayName: "Queso Mozzarella",
            quantity: 1,
          },
          {
            id: 888,
            name: "pepperoni",
            displayName: "Pepperoni",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "champiñones",
            displayName: "Champiñones",
            quantity: 0.5,
          },
          {
            id: 101010,
            name: "aceitunas",
            displayName: "Aceitunas",
            quantity: 0.25,
          },
          {
            id: 111111,
            name: "pimientos",
            displayName: "Pimientos",
            quantity: 0.25,
          },
        ],
        mainCategory: {
          id: 3434,
          name: "snack",
          displayName: "Snack",
          icon: "snack",
          description:
            "Los snacks son pequeñas porciones de comida que se consumen entre las comidas principales. Pueden ser tanto dulces como salados y satisfacen los antojos y proporcionan energía rápida. Los snacks pueden incluir una variedad de opciones como frutas, nueces, barras de granola, galletas, chips o yogur. Los snacks son perfectos para momentos de merienda o cuando se necesita un impulso de energía durante el día.",
        },
        subCategory: [
          {
            id: 1212,
            name: "comida-italiana",
            displayName: "Italiana",
            icon: "italian",
            description:
              "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Juan",
        lastName: "Pérez",
      },
      favs: 10,
      comments: [
        {
          id: 987654,
          user: {
            id: 135792468,
            firstName: "María",
            lastName: "López",
          },
          comment:
            "¡Esta pizza casera es espectacular! La masa queda crujiente por fuera y tierna por dentro. Los ingredientes se combinan a la perfección. ¡La mejor pizza que he probado!",
          date: new Date("2021-09-18T20:15:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-16T18:30:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
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
          name: "comida-italiana",
          displayName: "Comida Italiana",
          icon: "italian",
          description:
            "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
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
        ],
        time: {
          reference: {
            name: "short",
            displayName: "Medio",
            icon: "short",
            maxTime: 30,
          },
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
        id: Number((Math.random() * 1000000).toFixed()),
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
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-02-01T12:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Estofado de Lentejas",
        description:
          "Un reconfortante estofado de lentejas que combina ingredientes saludables y sabores irresistibles. Las lentejas, ricas en proteínas y fibra, se cocinan lentamente en una salsa de tomate casera junto con una variedad de verduras y especias. El resultado es un plato abundante y nutritivo que te llenará de energía y te dejará satisfecho. Cada cucharada te brindará el sabor terroso de las lentejas, la dulzura de las verduras y el toque aromático de las especias. Sirve este estofado con arroz integral o pan fresco para disfrutar al máximo de su delicioso sabor.",
        steps:
          "1. Enjuaga las lentejas y déjalas en remojo durante 30 minutos. 2. En una olla grande, calienta aceite de oliva y añade cebolla, zanahoria y apio picados. Cocina hasta que estén tiernos. 3. Agrega las lentejas escurridas y revuelve para combinar. 4. Añade tomates picados, caldo de verduras, especias y sal al gusto. 5. Lleva a ebullición y luego reduce el fuego. Cocina a fuego lento durante aproximadamente 45 minutos o hasta que las lentejas estén tiernas. 6. Sirve caliente y disfruta de este delicioso estofado de lentejas.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "lentejas",
            displayName: "Lentejas",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "zanahoria",
            displayName: "Zanahoria",
            quantity: 2,
          },
          {
            id: 444,
            name: "apio",
            displayName: "Apio",
            quantity: 2,
          },
          {
            id: 555,
            name: "tomates-picados",
            displayName: "Tomates picados",
            quantity: 1,
          },
          {
            id: 666,
            name: "caldo-de-verduras",
            displayName: "Caldo de verduras",
            quantity: 2,
          },
          {
            id: 777,
            name: "especias",
            displayName: "Especias (comino, pimentón, orégano)",
            quantity: null,
          },
          {
            id: 888,
            name: "sal",
            displayName: "Sal",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 123,
          name: "comida-vegetariana",
          displayName: "Comida Vegetariana",
          icon: "vegetarian",
          description:
            "La comida vegetariana se basa en ingredientes de origen vegetal y excluye la carne, el pescado y las aves. Una dieta vegetariana incluye frutas, verduras, legumbres, cereales, nueces, semillas, productos lácteos y huevos. Ser vegetariano puede ser una opción saludable y ética, ya que se evita el consumo de carne y se favorece la ingesta de alimentos ricos en nutrientes vegetales.",
        },
        subCategory: [
          {
            id: 456,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 789,
            name: "vegan",
            displayName: "Vegano",
            icon: "vegan",
            description:
              "La comida vegana se basa en ingredientes de origen vegetal y excluye cualquier producto animal o derivado. Una dieta vegana incluye frutas, verduras, legumbres, cereales, nueces, semillas y productos vegetales como tofu o leche vegetal. Adoptar un estilo de vida vegano puede ser beneficioso para la salud y el medio ambiente.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 987,
          name: "easy",
          displayName: "Fácil",
          icon: "easy",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Ana",
        lastName: "González",
      },
      favs: 12,
      comments: [
        {
          id: 987987,
          user: {
            id: 654654,
            firstName: "Laura",
            lastName: "López",
          },
          comment:
            "Probé esta receta y quedó espectacular. El estofado de lentejas tiene un sabor increíble. ¡Definitivamente lo prepararé de nuevo!",
          date: new Date("2021-10-15T18:30:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-10-10T10:00:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pollo al Curry con Arroz",
        description:
          "Una deliciosa combinación de sabores exóticos y tiernos trozos de pollo en una suave salsa de curry, servido con arroz aromático. Este plato te transportará a las tierras de especias y te hará disfrutar de una experiencia culinaria llena de aromas y sabores. El pollo se cocina lentamente en una mezcla de especias y hierbas, junto con cebolla, ajo y jengibre, hasta que esté tierno y jugoso. La salsa de curry se espesa y se llena de notas de coco y cúrcuma, creando una combinación perfecta con el arroz. Disfruta de este plato lleno de sabor y textura.",
        steps:
          "1. En una sartén grande, calienta aceite y añade cebolla picada, ajo y jengibre rallados. Cocina hasta que estén dorados. 2. Agrega trozos de pollo y cocínalos hasta que estén dorados por todos lados. 3. Añade especias como curry en polvo, cúrcuma, comino y canela. Revuelve para cubrir el pollo. 4. Agrega tomate picado, caldo de pollo y leche de coco. Cocina a fuego lento hasta que el pollo esté tierno y la salsa se haya espesado. 5. Sirve el pollo al curry sobre arroz cocido y decora con cilantro fresco.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "pollo",
            displayName: "Pollo",
            quantity: 1,
          },
          {
            id: 222,
            name: "cebolla",
            displayName: "Cebolla",
            quantity: 1,
          },
          {
            id: 333,
            name: "diente-de-ajo",
            displayName: "Diente de Ajo",
            quantity: 3,
          },
          {
            id: 444,
            name: "jengibre",
            displayName: "Jengibre a gusto",
            quantity: null,
          },
          {
            id: 555,
            name: "cucharadita-de-curry-en-polvo",
            displayName: "Cucharadita de Curry en polvo",
            quantity: 2,
          },
          {
            id: 666,
            name: "cucharadita-de-cúrcuma",
            displayName: "Cucharadita de Cúrcuma",
            quantity: 1,
          },
          {
            id: 777,
            name: "cucharadita-de-comino",
            displayName: "Cucharadita de Comino",
            quantity: 1,
          },
          {
            id: 888,
            name: "cucharadita-de-canela",
            displayName: "Cucharadita de Canela",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "tomate",
            displayName: "Tomate",
            quantity: 2,
          },
          {
            id: 101010,
            name: "caldo-de-pollo",
            displayName: "Caldo de pollo",
            quantity: 1,
          },
          {
            id: 111111,
            name: "lata-leche-de-coco",
            displayName: "Lata leche de coco",
            quantity: 1,
          },
          {
            id: 121212,
            name: "taza-de-arroz",
            displayName: "Taza de arroz",
            quantity: 2,
          },
          {
            id: 131313,
            name: "cilantro",
            displayName: "Cilantro",
            quantity: null,
          },
        ],
        mainCategory: {
          id: 1212,
          name: "asiatica",
          displayName: "Comida Asiática",
          icon: "asian",
          description:
            "La comida asiática abarca una amplia gama de culturas culinarias, como la cocina china, japonesa, tailandesa y vietnamita, entre otras. Cada una tiene sus propias características y sabores únicos. Desde el arroz frito y los fideos hasta el sushi y el curry, la comida asiática es conocida por su equilibrio de sabores, ingredientes frescos y presentaciones artísticas.",
        },
        subCategory: [
          {
            id: 8888,
            name: "dinner",
            displayName: "Cena",
            icon: "dinner",
            description:
              "La cena es una comida importante y reconfortante al final del día. Proporciona los nutrientes necesarios para la recuperación y descanso del organismo durante la noche. Optar por una cena equilibrada y ligera puede ayudar a mantener un peso saludable y promover un sueño reparador.",
          },
          {
            id: 9999,
            name: "chicken",
            displayName: "Pollo",
            icon: "chicken",
            description:
              "El pollo es una opción versátil y popular en muchas cocinas alrededor del mundo. Puede prepararse de diversas formas, como a la parrilla, al horno, a la plancha o en guisos. Es una excelente fuente de proteínas magras y se puede combinar con una amplia variedad de ingredientes y sabores. El pollo ofrece infinitas posibilidades culinarias y es una opción saludable y deliciosa para disfrutar en tus platos.",
          },
        ],
        time: {
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 90,
          },
          value: 45,
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: 135792468,
        firstName: "María",
        lastName: "López",
      },
      favs: 25,
      comments: [
        {
          id: 121212,
          user: {
            id: 232323,
            firstName: "Carlos",
            lastName: "Martínez",
          },
          comment:
            "¡Este pollo al curry es espectacular! La combinación de especias y la suavidad de la salsa son increíbles. Sin duda, una receta para repetir.",
          date: new Date("2021-09-20T16:45:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-15T14:30:00.000Z"),
    },
    {
      id: Number((Math.random() * 1000000).toFixed()),
      recipe: {
        id: Number((Math.random() * 1000000).toFixed()),
        name: "Pizza Casera",
        description:
          "Disfruta de una deliciosa pizza casera con tus ingredientes favoritos. Esta receta te enseñará a hacer una masa crujiente y sabrosa, acompañada de una selección de toppings irresistibles. Prepara esta pizza en casa y sorprende a tu familia y amigos con un plato clásico y lleno de sabor.",
        steps:
          "1. Prepara la masa mezclando harina, levadura, sal, agua y aceite. Amasa hasta obtener una masa suave y elástica. 2. Deja reposar la masa en un lugar cálido durante una hora. 3. Precalienta el horno a alta temperatura. 4. Estira la masa en una bandeja para pizza y añade tu salsa de tomate favorita. 5. Agrega tus ingredientes favoritos, como queso mozzarella, pepperoni, champiñones, aceitunas y pimientos. 6. Hornea la pizza en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada y crujiente. 7. Sirve caliente y disfruta de tu deliciosa pizza casera.",
        image: "",
        ingredients: [
          {
            id: 111,
            name: "harina",
            displayName: "Harina",
            quantity: 2,
          },
          {
            id: 222,
            name: "levadura",
            displayName: "Levadura",
            quantity: 1,
          },
          {
            id: 333,
            name: "sal",
            displayName: "Sal",
            quantity: 0.5,
          },
          {
            id: 444,
            name: "agua",
            displayName: "Agua",
            quantity: 1,
          },
          {
            id: 555,
            name: "aceite",
            displayName: "Aceite",
            quantity: 2,
          },
          {
            id: 666,
            name: "salsa-de-tomate",
            displayName: "Salsa de Tomate",
            quantity: 1,
          },
          {
            id: 777,
            name: "queso-mozzarella",
            displayName: "Queso Mozzarella",
            quantity: 1,
          },
          {
            id: 888,
            name: "pepperoni",
            displayName: "Pepperoni",
            quantity: 0.5,
          },
          {
            id: 999,
            name: "champiñones",
            displayName: "Champiñones",
            quantity: 0.5,
          },
          {
            id: 101010,
            name: "aceitunas",
            displayName: "Aceitunas",
            quantity: 0.25,
          },
          {
            id: 111111,
            name: "pimientos",
            displayName: "Pimientos",
            quantity: 0.25,
          },
        ],
        mainCategory: {
          id: 3434,
          name: "snack",
          displayName: "Snack",
          icon: "snack",
          description:
            "Los snacks son pequeñas porciones de comida que se consumen entre las comidas principales. Pueden ser tanto dulces como salados y satisfacen los antojos y proporcionan energía rápida. Los snacks pueden incluir una variedad de opciones como frutas, nueces, barras de granola, galletas, chips o yogur. Los snacks son perfectos para momentos de merienda o cuando se necesita un impulso de energía durante el día.",
        },
        subCategory: [
          {
            id: 1212,
            name: "comida-italiana",
            displayName: "Italiana",
            icon: "italian",
            description:
              "La comida italiana es conocida en todo el mundo por su sencillez y sabores auténticos. Desde la pasta y las pizzas hasta las salsas y los quesos, la cocina italiana se basa en ingredientes frescos y de calidad. Cada región de Italia tiene sus propias especialidades culinarias, lo que hace que la comida italiana sea diversa y deliciosa. Disfruta de los aromas y sabores de la comida italiana en tus platos favoritos.",
          },
        ],
        time: {
          value: 60,
          reference: {
            name: "medium",
            displayName: "Medio",
            icon: "medium",
            maxTime: 60,
          },
        },
        difficulty: {
          id: 3434,
          name: "regular",
          displayName: "Regular",
          icon: "regular",
        },
      },
      owner: {
        id: Number((Math.random() * 1000000).toFixed()),
        firstName: "Juan",
        lastName: "Pérez",
      },
      favs: 10,
      comments: [
        {
          id: 987654,
          user: {
            id: 135792468,
            firstName: "María",
            lastName: "López",
          },
          comment:
            "¡Esta pizza casera es espectacular! La masa queda crujiente por fuera y tierna por dentro. Los ingredientes se combinan a la perfección. ¡La mejor pizza que he probado!",
          date: new Date("2021-09-18T20:15:00.000Z"),
        },
      ],
      rating: Math.ceil(Math.random() * 6),
      date: new Date("2021-09-16T18:30:00.000Z"),
    },
  ],
};
