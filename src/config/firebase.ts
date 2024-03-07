import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGEgF1I9hRL2SX8NktPn03zKadppgi2wc",
  authDomain: "rick-and-morty-api-a8201.firebaseapp.com",
  projectId: "rick-and-morty-api-a8201",
  storageBucket: "rick-and-morty-api-a8201.appspot.com",
  messagingSenderId: "7466168412",
  appId: "1:7466168412:web:9aa15693bae246d93df699",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
