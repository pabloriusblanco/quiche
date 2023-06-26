import { api } from "..";
import { FavoriteAndOwnedPostResponse } from "../../types/Api";

export async function getFavorites(): Promise<FavoriteAndOwnedPostResponse> {
  const response = await api.get("LikedPost/GetByFavLike");
  return response.data.data;
}

export async function getOwnedPost(): Promise<FavoriteAndOwnedPostResponse> {
  const response = await api.get("OwnerPost/GetbyOwner");
  return response.data.data;
}
