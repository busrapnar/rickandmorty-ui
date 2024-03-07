import Header from "./header";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./footer";
import { useIsLoggedIn } from "@/hooks/useAuth.ts";

const Layout = () => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) return <div>Loading...</div>;
  else if (!isLoggedIn) return <Navigate to="/sign-in" replace={true} />;

  return (
    <main>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <div className="relative -mb-px h-px w-full bg-gradient-to-r from-green-500 to-transparent"></div>
      <Footer />
    </main>
  );
};

export default Layout;
