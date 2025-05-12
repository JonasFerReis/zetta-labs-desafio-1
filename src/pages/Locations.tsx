import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllLocations } from "../services/LocationService";
import Paginator from "../components/Paginator";
import type { Location } from "../types/Location";

export default function Locations() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data } = useQuery({
    queryKey: ["locations", page],
    queryFn: () => getAllLocations(Number(page)),
  });

  function handleClickLocation(id: number) {
    navigate(`/locations/${id}`);
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1 className="text-center mb-4">
          Locais
        </h1>

        <Paginator
          page={Number(page)}
          lastPage={data?.info.pages || 0}
          url="/locations"
        />
      </div>

      <div className="d-flex flex-wrap gap-4 justify-content-center mb-4">
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

      <Paginator
        page={Number(page)}
        lastPage={data?.info.pages || 0}
        url="/locations"
      />
    </div>
  );
}