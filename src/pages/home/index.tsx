import { useDispatch, useSelector } from "react-redux";
import {
  charactersDataStore,
  fetchCharacters,
} from "@/store/characters/charactersSlice.ts";
import { useEffect, useState } from "react";
import { Character } from "@/service/type";
import CharacterList from "@/components/character/character-list";

const Home = () => {
  const dispatch = useDispatch();
  const [filterCharacters, setFilterCharacters] = useState<Character[]>([]);
  const { search, characters } = useSelector(charactersDataStore);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    const searchText = search?.toLocaleLowerCase().trim();

    if (searchText?.length) {
      const filteredCharacters = characters
        .filter((item) =>
          item.name?.toLocaleLowerCase().includes(searchText)
        )
      setFilterCharacters(filteredCharacters);
      console.log("Filtreleme sonucu:",filteredCharacters)
    } else {
      const sortedCharacters = characters
        .slice()

      setFilterCharacters(sortedCharacters);
    }
  }, [search, characters, dispatch]);

  return (
    <div className="flex min-h-screen flex-col  mb-6 gap-8">
      <CharacterList characters={filterCharacters || []} />
    </div>
  );
};

export default Home;
