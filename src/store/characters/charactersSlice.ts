import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "@/service/type.ts";
import { RootState } from "@/store";
import { API } from "@/service/API.ts";

interface CharactersState {
  characters: Character[];
  favorites: number[];
  isLoading: boolean;
  search: string;
  error: any;
}

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await API.get("character");
    return response.data;
  }
);

const initialState: CharactersState = {
  characters: [],
  favorites: [],
  search: "",
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (char) => char !== action.payload
      );
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.characters = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, deleteFavorite, addSearch } = charactersSlice.actions;
export const getCharacters = (state: RootState) => state.characters.characters;
export const getFavoriteCharacters = (state: RootState) =>
  state.characters.favorites;
export const charactersDataStore = (state: RootState) => state.characters;
export default charactersSlice.reducer;
