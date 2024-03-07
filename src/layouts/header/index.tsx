import Search from "@/components/search-bar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { useIsLoggedIn } from "@/hooks/useAuth";
import { logOut } from "@/store/auth/authSlice";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import { addSearch } from "@/store/characters/charactersSlice";

const Header = () => {
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const isLoggedIn = useIsLoggedIn();

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      setSearch(criteria);
    }, 300)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function onChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  useEffect(() => {
    dispatch(addSearch(search));
  }, [search, dispatch]);

  return (
    <header>
      <div className="px-4 py-8 flex items-center justify-around">
        <div>
          <Link to={"/"} className="mr-auto md:w-48 flex-shrink-0">
            <img className="h-24 w-24" src="/logorick.png" alt="" />
          </Link>
        </div>
        <Search value={search || ""} onChange={onChangeSearchInput} />
        <div className="flex items-center gap-8">
          <div className="">
            <Link to={"/favorite-characters"}>
              <FaHeart
                size={30}
                className="text-slate-400 transition duration-300 ease-in-out hover:text-red-500 active:text-red-700"
              />
            </Link>
          </div>
          <div>
            {!isLoggedIn ? (
              <Link
                to={"/sign-in"}
                className="font-semibold bg-green-700 text-white flex items-center justify-center rounded-md text-sm  h-10 px-4 py-2"
              >
                Log in
              </Link>
            ) : (
              <button
                onClick={() => dispatch(logOut())}
                className="text-lg font-medium px-4 py-2 rounded-md text-gray-700 hover:bg-gradient-to-r hover:from-violet-400 hover:to-indigo-500 hover:text-white "
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
