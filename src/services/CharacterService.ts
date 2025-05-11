import type { Character } from "../types/Character";
import { api } from "./AxiosConfig";

export async function getAllCharacters() {
  const response = await api.get("character");
  return response?.data;
}

export async function getCharacterById(id: number) {
  const response = await api.get<Character>(`character/${id}`);
  return response?.data;
}