import { api } from "..";
import { FavoritesPostsResponse, OwnedPostsResponse } from "../../types/Api";

export async function getFavorites(): Promise<FavoritesPostsResponse[]> {
  const response = await api.get("LikedPost/");
  return response.data.data;
}

export async function getOwnedPost(): Promise<OwnedPostsResponse[]> {
  const response = await api.get("LikedPost/");
  return response.data.data;
}
