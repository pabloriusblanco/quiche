import { Ingredient } from "./Recipe";

export type PostCreateUpdate = {
  image: string;
  name: string;
  description: string;
  mainCategoryId: string;
  subcategories: string[];
  difficultyId: string;
  prepTime: string;
  ingredients:
    | (Ingredient & { quantity: number })[]
    | { displayName: string; quantity: number }[];
  instructions: string;
};
