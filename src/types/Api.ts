import { Category, Difficulty, DurationReference, Ingredient } from "./Recipe";

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
  image?: File;
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

export type PostCreateComment = {
  postId: string;
  comment: string;
};

export type PostResponse = {
  id: string;
  deleteDate: string | null;
  createDate: string;
  updateDate: string | null;
  rating: number;
  postsComments: ResponsePostComment[];
  usersLikedPosts: {
    user: User;
  }[];
  likeAmount: number;
  user: User;
  recipe: PostResponseRecipe;
};

export type PostResponseSimilar = {
  postsByCategory: PostResponse[];
  postsByIngredients: PostResponse[];
};

export type PostResponseRecipe = {
  image: string;
  name: string;
  description: string;
  mainCategory: Category;
  mainCategoryId: string;
  recipesSubcategories: ResponseSubCategory[];
  difficultyId: string;
  difficulty: Difficulty;
  minutes: string;
  durationReference: DurationReference;
  recipesIngredients: ResponsePostIngredients[];
  instructions: string;
};

export type SimpleSearchResponse = {
  categories: SimpleSearchResponsePostCategories[];
  posts: SimpleSearchResponsePost[];
  ingredients: SimpleSearchResponsePostIngredients[];
};

export type SimpleSearchResponsePost = {
  id: string;
  displayName: string;
  description: string;
  rating: number;
};

export type DurationResponse = DurationReference & {
  maxMinutes: number;
};

export type SimpleSearchResponsePostIngredients = {
  id: string;
  name: string;
  displayName: string;
};
export type SimpleSearchResponsePostCategories = {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  description: string;
};

export type AdvanceSearchQuery = {
  RecipeName: string;
  CategoryId: string;
  SubcategoriesId: string[];
  IngredientsId: string[];
  TimeFrom: string;
  TimeTo: string;
  DifficultyLevelId: string;
  RatingFrom: string;
  RatingTo: string;
  UserName: string;
  PageNumber: number;
};

export type AdvanceSearchResponse = {
  posts: PostResponse[];
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type FavoriteAndOwnedPostResponse = {
  posts: PostResponse[];
};

export type SimilarResponsePost = {
  id: string;
  image: string;
  name: string;
  description: string;
  rating: number;
  commentsAmount: number;
  likesAmount: number;
  mainCategory: Category;
  difficulty: Difficulty;
  minutes: DurationReference;
};

export type RecipeDraftQuery = {
  recipeDraft: string;
};

export type RecipeDraftResponse = {
  draft: string;
  id: number;
  userId: number;
};
