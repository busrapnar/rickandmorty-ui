import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase.ts";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return isLoggedIn;
};
