//  @ts-nocheck

import {
  PostCreateComment,
  PostCreateUpdate,
  PostResponse,
} from "../types/Api";
import { api, apiUpload } from "./index";

export async function getRecipe(id: string): Promise<PostResponse> {
  const response = await api.get(`Post/GetById/?id=${id}`);
  return response.data.data;
}

export async function postComment(comment: PostCreateComment): Promise<void> {
  const response = await api.post("Comment/Create", comment);
  return response.data.data;
}

export async function likeComment(id: string): Promise<void> {
  const response = await api.post("LikedPost/Create", { postId: id });
  return response.data.data;
}

export async function likeCommentDelete(id: string): Promise<void> {
  const response = await api.post("LikedPost/Delete", { postId: id });
  return response.data.data;
}

export async function getSimilarRecipes(
  postId: string
): Promise<PostResponseSimilar> {
  const response = await api.get(
    `Post/GetSimilarByCategoryAndIngredients?postId=${postId}`
  );
  return response.data.data;
}

export async function createRecipe(recipe: { recipe: PostCreateUpdate }) {
  const response = await apiUpload.post("Post/Create", recipe);
  return response.data;
}

export async function updateRecipe(recipe: {
  id: string;
  recipe: PostCreateUpdate;
}) {
  const response = await apiUpload.put("Post/Update", recipe);
  return response.data;
}

export async function deleteRecipe(id: string): Promise<void> {
  const response = await api.post("Post/Delete", { id: id });
  return response.data;
}

export async function enableRecipe(id: string): Promise<void> {
  const response = await api.post("Post/Enable", { id: id });
  return response.data;
}
