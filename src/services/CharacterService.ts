import type { Character, GetCharacter } from "../types/Character";
import { api } from "./AxiosConfig";

export async function getAllCharacters(page: number) {
  const response = await api.get<GetCharacter>("character", {
    params: {
      page: page
    },
  });
  return response?.data;
}

export async function getCharacterById(id: number) {
  const response = await api.get<Character>(`character/${id}`);
  return response?.data;
}

export async function getMultiCharactersById(ids: number[]) {
  const response = await api.get<Character[]>(`character/[${ids}]`);
  return response?.data;
}