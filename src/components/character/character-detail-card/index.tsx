import { Character } from "@/service/type";
import { FaHeart } from "react-icons/fa6";

type Props = {
  character: Character;
  isFavorite: boolean;
  addFavorite: (id: number) => void;
};

const CharacterDetailCard = ({ character, addFavorite, isFavorite }: Props) => {
  return (
    <div>
      <div className="relative flex rounded-xl bg-white text-gray-700 shadow-md">
        <div className="relative m-0 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={character.image}
            alt="image"
            className="h-[500px] w-[500px]"
          />
        </div>
        <div className="flex flex-col gap-12 p-6">
          <h1 className="text-4xl font-bold text-slate-900">
            {character.name}
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <span className="text-xl text-slate-800 font-semibold">
                Gender:
              </span>
              <span className="text-xl text-slate-600 font-medium">
                {character.gender}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl text-slate-800 font-semibold">
                Status:
              </span>
              <span className="text-xl text-green-600 font-medium">
                {character.status}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl text-slate-800 font-semibold">
                Specias:
              </span>
              <span className="text-xl text-slate-600 font-medium">
                {character.species}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl text-slate-800 font-semibold">
                Location:
              </span>
              <span className="text-xl text-slate-600 font-medium">
                {character.location.name}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl text-slate-800 font-semibold">
                Total number of episodes:{" "}
              </span>
              <span className="text-xl text-slate-600 font-medium">
                {character.episode.length}
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            className={`text-${
              isFavorite ? "red" : "gray"
            }-600 absolute right-2`}
            onClick={() => addFavorite(character.id)}
          >
            <FaHeart size={42} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailCard;
