import { IconsNames } from "..";

export const CategoryDictionary: TagValues = {
  breakfast: {
    name: "Desayuno",
    icon: "breakfast",
    description:
      "El desayuno es una comida importante del día ya que provee energía y nutrientes necesarios para mantener un buen rendimiento físico y mental durante la jornada. Además, puede ayudar a mantener un peso saludable y prevenir enfermedades relacionadas con la alimentación.",
  },
  lunch: {
    name: "Almuerzo",
    icon: "lunch",
    description:
      "El almuerzo es una comida importante del día ya que provee energía y nutrientes necesarios para mantener un buen rendimiento físico y mental durante la jornada. Además, puede ayudar a mantener un peso saludable y prevenir enfermedades relacionadas con la alimentación.",
  },
  dinner: {
    name: "Cena",
    icon: "dinner",
    description:
      "La cena es una comida importante del día ya que provee energía y nutrientes necesarios para mantener un buen rendimiento físico y mental durante la jornada. Además, puede ayudar a mantener un peso saludable y prevenir enfermedades relacionadas con la alimentación.",
  },
};

export const TimeDictionary: TagValues = {
  short: {
    name: "Corto",
    icon: "short",
    time: "de 1 a 30 minutos",
    description:
      "El tiempo de preparación de este plato es corto, por lo que es ideal para cuando no dispones de mucho tiempo para cocinar.",
  },
  medium: {
    name: "Medio",
    icon: "short", //TODO
    time: "de 30 a 60 minutos",
    description:
      "El tiempo de preparación de este plato es medio, por lo que es ideal para cuando dispones de algo de tiempo para cocinar.",
  },
  long: {
    name: "Largo",
    icon: "short",
    time: "más de 60 minutos",
    description:
      "El tiempo de preparación de este plato es largo, por lo que es ideal para cuando dispones de mucho tiempo para cocinar.",
  },
};

export const DifficultyDictionary: TagValues = {
  easy: {
    name: "Fácil",
    icon: "easy",
    description:
      "Este plato es muy fácil de preparar, ideal para principiantes.",
  },
  medium: {
    name: "Regular",
    icon: "regular",
    description:
      "Este plato es de dificultad regular, ideal para personas con algo de experiencia en la cocina.",
  },
  hard: {
    name: "Difícil",
    icon: "hard",
    description:
      "Este plato es de dificultad alta, ideal para personas con experiencia en la cocina.",
  },
};

export const flattedTags = {
  ...TimeDictionary,
  ...CategoryDictionary,
  ...DifficultyDictionary,
};

type TagValues = {
  [key: string]: TagContent;
};

export type TagContent = {
  name: string;
  icon: IconsNames;
  time?: string;
  description: string;
};

export const TagsDictionary = {
  category: {
    name: "Categoría de Receta",
    value: CategoryDictionary,
  },
  time: {
    name: "Tiempo de Preparación",
    value: TimeDictionary,
  },
  difficulty: {
    name: "Dificultad de preparación",
    value: DifficultyDictionary,
  },
};

export type TagsDictionaryKeys = keyof typeof TagsDictionary;
