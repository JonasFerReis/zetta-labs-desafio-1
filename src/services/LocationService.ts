import { api } from "./AxiosConfig";
import type { Location } from "../types/Location";

export async function getAllLocations(page: number) {
  const response = await api.get("location", {
    params: {
      page: page,
    },
  });
  return response?.data;
}

export async function getLocationById(id: number) {
  const response = await api.get<Location>(`location/${id}`);
  return response?.data;
}
