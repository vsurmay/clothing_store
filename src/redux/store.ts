import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./slices/clothes";
import basketSlice from "./slices/basket";

export const store = configureStore({
  reducer: {
    clothes: clothesSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
