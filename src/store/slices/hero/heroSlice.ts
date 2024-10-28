import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HeroSliceInterface, { HeroResponse } from "./heroSlice.interface";
import getHeroAPI from "../../../services/heroService";
import { getHeroStorageFromLocalStorage } from "./heroStorage";

const initialState: HeroSliceInterface = {
  response: getHeroStorageFromLocalStorage(),
  status: null,
  error: null,
};

//create hero async thunk
export const getHero = createAsyncThunk<HeroResponse, string>(
  "hero/get",
  async function (inputData: string) {
    return await getHeroAPI(inputData);
  }
);

const heroSLice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    removeHero: (state) => {
      state.error = null;
      state.response = null;
      state.status = null;
    },
    resetHeroError: (state) => {
      state.error = null;
      state.status = null;
      state.response = getHeroStorageFromLocalStorage();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHero.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getHero.fulfilled, (state, action) => {
        state.response = action.payload;
        state.status = "resolved";
        state.error = null;
      })
      .addCase(getHero.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "Not Found";
      });
  },
});

export const { removeHero, resetHeroError } = heroSLice.actions;

export default heroSLice.reducer;
