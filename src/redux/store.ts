import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./slices/clothes";
import basketSlice from "./slices/basket";
import articlesSlice from "./slices/articles";

export const store = configureStore({
  reducer: {
    clothes: clothesSlice,
    basket: basketSlice,
    articles: articlesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
