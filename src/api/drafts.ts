import { api } from ".";
import { RecipeDraftQuery, RecipeDraftResponse } from "../types/Api";

export async function getDraft(): Promise<RecipeDraftResponse> {
  const response = await api.get("Draft/Get");
  return response.data.data;
}

export async function createDraft(draft: RecipeDraftQuery): Promise<void> {
  const response = await api.post("Draft/Create", draft);
  return response.data.data;
}

export async function deleteDraft(): Promise<void> {
  const response = await api.post("Draft/Delete", {});
  return response.data;
}
