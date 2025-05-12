import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../services/CharacterService";
import Card from "../components/Card";
import Paginator from "../components/Paginator";
import type { Character } from "../types/Character";

export default function Characters() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getAllCharacters(Number(page)),
  });

  function handleClickCharacter(id: number) {
    navigate(`/characters/${id}`);
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1 className="text-center mb-4">
          Personagens
        </h1>

        <Paginator
          page={Number(page)}
          lastPage={data?.info.pages || 0}
          url="/characters"
        />
      </div>

      <div className="d-flex flex-wrap gap-4 justify-content-center mb-4">
        {data?.results.map((char: Character) =>
          <Card
            image={char.image}
            title={char.name}
            btnText="Mais Informações"
            onBtnClick={() => handleClickCharacter(char.id)}
          />
        )}
      </div>

      <Paginator
        page={Number(page)}
        lastPage={data?.info.pages || 0}
        url="/characters"
      />
    </div>
  );
}