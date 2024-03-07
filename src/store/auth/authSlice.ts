import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/config/firebase.ts";
import { RootState } from "@/store";

interface AuthState {
  name: "";
  email: "";
  password: "";
  isLoading: boolean;
  error: any | null;
}

interface Request {
  name: string;
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  "auth/register",
  async ({ email, password }: Request, { rejectWithValue }: any) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Request, { rejectWithValue }: any) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const initialState: AuthState = {
  name: "",
  email: "",
  password: "",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(signUp.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state: any) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state: any, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state: any) => {
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state: any, action: any) => {
        console.log("error", action.payload);
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const authDataStore = (state: RootState) => state.auth;
export default authSlice.reducer;
