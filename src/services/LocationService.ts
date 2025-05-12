import { api } from "./AxiosConfig";
import type { Location } from "../types/Location";

export async function getAllLocations() {
  const response = await api.get("location");
  return response?.data;
}

export async function getLocationById(id: number) {
  const response = await api.get<Location>(`location/${id}`);
  return response?.data;
}
