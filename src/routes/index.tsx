import Layout from "@/layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import AuthLayout from "@/layouts/auth/AuthLayout.tsx";
import Login from "@/pages/login";
import Register from "@/pages/register";
import ErrorPage from "@/pages/error-page";
import { CharacterDetail, FavoriteCharacter } from "@/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="character/:id" element={<CharacterDetail/>}/>
          <Route path="favorite-characters" element={<FavoriteCharacter/>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Route>
        <Route errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
