import { Character } from '@/service/type'
import { addFavorite, charactersDataStore, deleteFavorite } from '@/store/characters/charactersSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../character-card'

type Props = {
    characters: Character[]
}

const CharacterList = ({characters}: Props) => {
    const dispatch = useDispatch();
    
    const { isLoading, error, favorites } =
    useSelector(charactersDataStore);

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
    <div>
        <div className="mx-auto w-full">
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {isLoading && <div>Yükleniyor...</div>}
          {error && <div>Bir sorun oluştu!</div>}
          {characters.length &&
            characters.map((character: Character) => (
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
  )
}

export default CharacterList