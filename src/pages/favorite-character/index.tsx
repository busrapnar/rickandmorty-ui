import Card from "@/components/character/character-card";
import { Character } from "@/service/type";
import {
  addFavorite,
  charactersDataStore,
  deleteFavorite,
} from "@/store/characters/charactersSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteCharacters = () => {
  const [favoriCharacters, setFavoriCharacters] = useState<Character[]>([]);
  const dispatch = useDispatch();
  const { characters, favorites } = useSelector(charactersDataStore);

  useEffect(() => {
    if (favorites.length && characters.length) {
      const items = characters.filter((character) =>
        favorites.includes(character.id)
      );
      setFavoriCharacters(items);
    }
  }, [characters, favorites]);

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

  return (
    <div className="flex min-h-screen flex-col mb-6 gap-8">
      <div className="mx-auto w-full">
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {favoriCharacters.length &&
            favoriCharacters.map((character: Character) => (
              <Card
                key={character.id}
                character={character}
                isFavorite={isFavorite(character.id)}
                addFavorite={handleFavorite}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteCharacters;
