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
      <button className="btn btn-primary mb-4" onClick={handleNavigatePrev}>
        Voltar
      </button>

      <div className="row row-gap-4">
        <div className="col-md-4">
          <img className="w-100 img-fluid shadow img-thumbnail" src={character?.image} alt={character?.name} />
        </div>

        <div className="col-md-8">
          <div className="card shadow h-100">
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
    </>
  );
}