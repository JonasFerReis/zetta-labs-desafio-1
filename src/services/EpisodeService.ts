import { api } from "./AxiosConfig";
import type { Episode } from "../types/Episode";

export async function getAllEpisodes() {
  const response = await api.get("episode");
  return response?.data;
}

export async function getEpisodeById(id: number) {
  const response = await api.get<Episode>(`episode/${id}`);
  return response?.data;
}