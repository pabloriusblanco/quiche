import { IconsMap } from "../components/atoms/Icons/Icons";

export type Post = {
  id: number;
  recipe: Recipe;
  owner: Owner;
  favs: number;
  comments: Comment[];
  rating: number;
  date: Date;
};

export type Recipe = {
  id: number;
  name: string;
  description: string;
  steps: string;
  image: string;
  ingredients: Array<Ingredient & { quantity: number | null }>;
  mainCategory: Category;
  subCategory: Category[];
  time: Duration;
  difficulty: Difficulty;
};

export type Category = {
  id: number;
  name: string;
  displayName: string;
  icon: keyof IconsMap;
  description: string;
};

export type Ingredient = {
  id: number;
  name: string;
  displayName: string;
};

export type Difficulty = {
  id: number;
  name: "easy" | "regular" | "hard";
  displayName: "Fácil" | "Regular" | "Difícil";
  icon: "easy" | "regular" | "hard";
};

export type Duration = {
  id: number;
  name: "short" | "medium" | "long";
  displayName: "Corto" | "Medio" | "Largo";
  icon: "short" | "medium" | "long";
  value: number;
};

export type Owner = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Comment = {
  id: number;
  user: Owner;
  comment: string;
  date: Date;
};
