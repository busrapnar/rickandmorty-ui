import { useIsLoggedIn } from "@/hooks/useAuth.ts";
import { useSelector } from "react-redux";
import { authDataStore } from "@/store/auth/authSlice.ts";
import { Link, Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();
  const { error } = useSelector(authDataStore);

  if (isLoggedIn === null) return <div>Loading...</div>;
  else if (isLoggedIn) return <Navigate to="/" replace={true} />;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Link to={"/"}>
        <p className="text-green-800 font-semibold text-2xl mx-auto flex items-center gap-2">
          Rick and Morty
        </p>
      </Link>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-1 w-full bg-gradient-to-r from-green-500 to-transparent"></div>
        {error !== null && <div>Kullanıcı bilgileri hatalıdır!</div>}
        <Outlet />
      </div>
    </div>
  );
}
