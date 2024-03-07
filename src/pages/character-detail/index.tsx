import CharacterDetailCard from "@/components/character/character-detail-card";
import { API } from "@/service/API";
import { Character } from "@/service/type";
import {
  addFavorite,
  charactersDataStore,
  deleteFavorite,
} from "@/store/characters/charactersSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { favorites } = useSelector(charactersDataStore);
  const [character, setCharacter] = useState<Character>();

  const handleFavorite = (id: number) => {
    const isActive = isFavorite(id);
    if (isActive) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const isFavorite = (id: number) => {
    return favorites.length > 0 && favorites.some((item) => item === id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`character/${id}`);
      setCharacter(response.data);
    };

    fetchData();
  }, [id, character]);

  return (
    <div>
      <div className="flex flex-col min-h-screen items-center gap-10 mt-20">
        <div className="w-full">
          {character === undefined && <div>Kayıt bulunamadı!</div>}
          {character && (
            <CharacterDetailCard
              character={character}
              isFavorite={isFavorite(character.id)}
              addFavorite={handleFavorite}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
