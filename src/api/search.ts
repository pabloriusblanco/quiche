import {
  AdvanceSearchQuery,
  AdvanceSearchResponse,
  SimpleSearchResponse,
} from "../types/Api";
import { api } from "./index";

export async function simpleSearch(
  query: string
): Promise<SimpleSearchResponse> {
  const response = await api.get(`Home/SimpleSearch/?Search=${query}`);
  return response.data.data;
}

export async function advancedSearch(
  query: AdvanceSearchQuery
): Promise<AdvanceSearchResponse> {
  const response = await api.get("Home/AdvancedSearch", {
    params: query,
    paramsSerializer: { indexes: null },
  });
  return response.data.data;
}
