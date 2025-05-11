import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../services/CharacterService";
import InfoLine from "../components/InfoLine";

export default function CharacterInfo() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: character } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(Number(id)),
    enabled: !!id,
  });

  function handleNavigatePrev() {
    navigate(-1);
  }

  return (
    <>
      <div className="card shadow">
        <div className="row">
          <div className="col-md-5">
            <img className="w-100 rounded-start" src={character?.image} alt={character?.name} />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <h2 className="fs-4 card-title">
                  {character?.name}
                </h2>
                <span
                  className={`badge ${character?.status === 'Alive'
                    ? 'bg-success'
                    : character?.status === 'Dead'
                      ? 'bg-danger'
                      : 'bg-secondary'
                    }`}
                >
                  {character?.status}
                </span>
              </div>

              <p className="card-subtitle mb-3 text-muted">
                {character?.species}
              </p>

              <p className="card-text d-grid gap-1">
                <InfoLine label="Gênero" text={character?.gender} />
                <InfoLine label="Origem" text={character?.origin.name} />
                <InfoLine label="Localização" text={character?.location.name} />
                <InfoLine label="Tipo" text={character?.type} />
                <InfoLine label="Episódios" text={character?.episode.length.toString()} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-4" onClick={handleNavigatePrev}>
        Voltar
      </button>
    </>
  );
}