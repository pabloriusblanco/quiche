import { IconsMap } from "../components/atoms/Icons/Icons";

export type Post = {
  id: string;
  recipe: Recipe;
  owner: Owner;
  favs: number;
  comments: Comment[];
  rating: number;
  date: Date;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  steps: string;
  image: string;
  ingredients: Array<Ingredient & { quantity: number }>;
  mainCategory: Category;
  subCategory: Category[];
  time: Duration;
  difficulty: Difficulty;
};

export type Category = {
  id: string;
  name: string;
  displayName: string;
  icon: keyof IconsMap;
  description: string;
};

export type Ingredient = {
  id: string;
  name: string;
  displayName: string;
};

export type Difficulty = {
  id: string;
  name: "easy" | "regular" | "hard";
  displayName: "Fácil" | "Regular" | "Difícil";
  icon: "easy" | "regular" | "hard";
};

export type Duration = {
  value: number;
  reference: DurationReference;
};

export type DurationReference = {
  id: string;
  name: "short" | "medium" | "long";
  displayName: "Corto" | "Medio" | "Largo";
  icon: "short" | "medium" | "long";
  maxMinutes: number;
};

export type Owner = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Comment = {
  id: string;
  user: Owner;
  comment: string;
  date: Date;
};
