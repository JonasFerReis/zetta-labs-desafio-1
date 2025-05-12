import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getEpisodeById } from "../services/EpisodeService";
import { getMultiCharactersById } from "../services/CharacterService";
import Card from "../components/Card";
import InfoLine from "../components/InfoLine";

export default function EpisodeInfo() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [episodeCharactersIds, setEpisodeCharactersIds] = useState<number[]>();

  const { data: episode } = useQuery({
    queryKey: ["episode", id],
    queryFn: () => getEpisodeById(Number(id)),
    enabled: !!id,
  });

  const { data: characters } = useQuery({
    queryKey: ["episodeCharacters", id],
    queryFn: () => getMultiCharactersById(episodeCharactersIds || []),
    enabled: !!episodeCharactersIds,
  });

  function handleNavigatePrev() {
    navigate(-1);
  }

  function handleClickCharacter(id: number) {
    navigate(`/characters/${id}`);
  }

  useEffect(() => {
    const ids = episode?.characters.map((residentUrl) =>
      Number(residentUrl.split("character/")[1])
    );
    setEpisodeCharactersIds(ids);
  }, [episode]);

  return (
    <>
      <button className="btn btn-primary mb-4" onClick={handleNavigatePrev}>
        Voltar
      </button>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h1 className="fs-3 card-title">
            {episode?.name}
          </h1>
          <InfoLine label="Código" text={episode?.episode} />
          <InfoLine label="Data de lançamento" text={episode?.air_date} />
        </div>
      </div>

      <div>
        <h2 className="fs-4 text-center mb-4">
          Participantes
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {characters?.map((char) =>
            <Card
              image={char.image}
              title={char.name}
              btnText="Mais Informações"
              onBtnClick={() => handleClickCharacter(char.id)}
            />
          )}
        </div>
      </div>
    </>
  );
}