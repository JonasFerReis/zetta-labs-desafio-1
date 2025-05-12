import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAllLocations } from "../services/LocationService";
import type { Location } from "../types/Location";

export default function Locations() {

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getAllLocations(),
  });

  function handleClickLocation(id: number) {
    navigate(`/locations/${id}`);
  }

  return (
    <div>
      <h1 className="text-center mb-4">
        Locais
      </h1>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <ul className="list-group list-group-flush w-100">
          {data?.results.map((loc: Location) =>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fw-medium">
                {loc.name}
              </span>
              <button className="btn btn-sm btn-primary" onClick={() => handleClickLocation(loc.id)}>
                Mais Informações
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}