import { Category, Difficulty, Ingredient } from "./Recipe";

type User = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  statusId: string;
  createDate: string;
};

export type ResponsePostIngredients = {
  ingredient: Ingredient;
  quantity: number;
};

export type ResponsePostComment = {
  id: string;
  createDate: string;
  user: User;
  comment: string;
};

export type ResponseSubCategory = {
  category: Category;
};

export type PostCreateUpdate = {
  image: string;
  name: string;
  description: string;
  mainCategoryId: string;
  subcategories: string[];
  difficultyId: string;
  minutes: string;
  ingredients:
    | ResponsePostIngredients[]
    | { displayName: string; quantity: number }[];
  instructions: string;
};

export type PostResponse = {
  id: string;
  deleteDate: string | null;
  createDate: string;
  updateDate: string | null;
  postsComments: ResponsePostComment[];
  usersLikedPosts: {
    user: User;
  }[];
  likeAmount: number;
  user: User;
  recipe: {
    image: string;
    name: string;
    description: string;
    mainCategory: Category;
    mainCategoryId: string;
    recipesSubcategories: ResponseSubCategory[];
    difficultyId: string;
    difficulty: Difficulty;
    prepTime: string;
    recipesIngredients: ResponsePostIngredients[];
    instructions: string;
  };
};
