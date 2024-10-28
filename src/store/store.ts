import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user/userSlice";
import heroSlice from "./slices/hero/heroSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    hero: heroSlice,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
