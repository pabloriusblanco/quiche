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
  ingredients: Ingredient[] & { quantity: number }[];
  mainCategory: Category;
  subCategory: Category[];
  time: Duration;
  difficulty: "Fácil" | "Regular" | "Difícil";
};

export type Category = {
  id: number;
  name: string;
  displayName: string;
  icon: string;
};

export type Ingredient = {
  id: number;
  name: string;
  displayName: string;
};

export type Duration = {
  id: number;
  name: "corto" | "medio" | "largo";
  displayName: "Corto" | "Medio" | "Largo";
  icon: "short" | "medium" | "long";
  maxTime: number;
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
