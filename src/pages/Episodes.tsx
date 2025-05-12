import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllEpisodes } from "../services/EpisodeService";
import Paginator from "../components/Paginator";
import type { Episode } from "../types/Episode";

export default function Episodes() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data } = useQuery({
    queryKey: ["episodes", page],
    queryFn: () => getAllEpisodes(Number(page)),
  });

  function handleClickLocation(id: number) {
    navigate(`/episode/${id}`);
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1 className="text-center mb-4">
          Episódios
        </h1>

        <Paginator
          page={Number(page)}
          lastPage={data?.info.pages || 0}
          url="/episodes"
        />
      </div>

      <div className="d-flex flex-wrap gap-4 justify-content-center mb-4">
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

      <Paginator
        page={Number(page)}
        lastPage={data?.info.pages || 0}
        url="/episodes"
      />
    </div>
  );
}