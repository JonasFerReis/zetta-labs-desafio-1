import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAllEpisodes } from "../services/EpisodeService";
import type { Episode } from "../types/Episode";

export default function Episodes() {

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => getAllEpisodes(),
  });

  function handleClickLocation(id: number) {
    navigate(`/episode/${id}`);
  }

  return (
    <div>
      <h1 className="text-center mb-4">
        Episódios
      </h1>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <ul className="list-group list-group-flush w-100">
          {data?.results.map((ep: Episode) =>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span className="fw-medium">
                  {ep.episode}
                </span>
                &nbsp;
                <span className="text-muted">
                  {ep.name}
                </span>
              </div>
              <button className="btn btn-sm btn-primary" onClick={() => handleClickLocation(ep.id)}>
                Mais Informações
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}