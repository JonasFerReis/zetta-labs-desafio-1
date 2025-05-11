import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../services/CharacterService";
import Card from "../components/Card";
import type { Character } from "../types/Character";

export default function Characters() {

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getAllCharacters(),
  });

  function handleClickCharacter(id: number) {
    navigate(`/characters/${id}`);
  }

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center">
      {data?.results.map((char: Character) =>
        <Card
          image={char.image}
          title={char.name}
          btnText="Mais Informações"
          onBtnClick={() => handleClickCharacter(char.id)}
        />
      )}
    </div>
  );
}