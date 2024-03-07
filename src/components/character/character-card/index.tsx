import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Character } from "@/service/type";

type Props = {
  character: Character;
  isFavorite: boolean;
  addFavorite: (id: number) => void;
};

const Card = ({ character, addFavorite, isFavorite }: Props) => {
  return (
    <div>
      <div className="flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-xl shadow-slate-500 max-w-sm">
        <div className="h-[300px] overflow-hidden">
          <img src={character.image} alt="" className="w-full" />
        </div>
        <div className="bg-white py-4 px-3 flex justify-between">
          <h2 className="text-2xl mb-2">{character.name}</h2>
          <div>
            <button
              className={` ${isFavorite ? "text-red-600" : "text-slate-400"}`}
              onClick={() => addFavorite(character.id)}
            >
              <FaHeart size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-end mr-2 mb-2">
          <Link
            to={`/character/${character.id}`}
            className="flex items-center gap-2 rounded-lg py-3 px-6 text-center text-base font-semibold uppercase border border-pink-600/10  text-pink-600 transition-all hover:bg-pink-600/10 "
          >
            learn more
            <IoIosArrowRoundForward size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
