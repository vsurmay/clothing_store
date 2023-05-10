import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./slices/clothes";

export const store = configureStore({
  reducer: {
    clothes: clothesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
