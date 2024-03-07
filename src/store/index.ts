import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "@/store/characters/charactersSlice";
import authReducer from "@/store/auth/authSlice.ts";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
