import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getLocationById } from "../services/LocationService";
import { useEffect, useState } from "react";
import { getMultiCharactersById } from "../services/CharacterService";
import Card from "../components/Card";
import InfoLine from "../components/InfoLine";

export default function LocationInfo() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [residentIds, setResidentIds] = useState<number[]>();

  const { data: location } = useQuery({
    queryKey: ["location", id],
    queryFn: () => getLocationById(Number(id)),
    enabled: !!id,
  });

  const { data: residents } = useQuery({
    queryKey: ["residents", id],
    queryFn: () => getMultiCharactersById(residentIds || []),
    enabled: !!residentIds,
  });

  function handleNavigatePrev() {
    navigate(-1);
  }

  function handleClickCharacter(id: number) {
    navigate(`/characters/${id}`);
  }

  useEffect(() => {
    const ids = location?.residents.map((residentUrl) =>
      Number(residentUrl.split("character/")[1])
    );
    setResidentIds(ids);
  }, [location]);

  return (
    <>
      <button className="btn btn-primary mb-4" onClick={handleNavigatePrev}>
        Voltar
      </button>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h1 className="fs-3 card-title">
            {location?.name}
          </h1>
          <InfoLine label="Dimensão" text={location?.dimension} />
          <InfoLine label="População" text={location?.residents.length.toString()} />
        </div>
      </div>

      <div>
        <h2 className="fs-4 text-center mb-4">
          Habitantes
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {residents?.map((char) =>
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