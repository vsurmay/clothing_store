import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasketItem } from "../type";
import getSumBasketProducts from "../../utils/getSumBasketProducts";

interface InitialState {
  products: BasketItem[];
  allUniqueCodes: string[];
  sumBasketProducts: number;
}

const initialState: InitialState = {
  products: [],
  allUniqueCodes: [],
  sumBasketProducts: 0,
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState: initialState,
  reducers: {
    getBasketItems: (state, action) => {
      state.products = action.payload;
      state.allUniqueCodes = state.products.map(
        (product) => product.uniqueCode
      );
      state.sumBasketProducts = getSumBasketProducts(state.products);
    },
    adedBasketItem: (state, action: PayloadAction<BasketItem>) => {
      state.products = [...state.products, action.payload];
      state.allUniqueCodes = [
        ...state.allUniqueCodes,
        action.payload.uniqueCode,
      ];
      state.sumBasketProducts = getSumBasketProducts(state.products);
    },
  },
});

export const { adedBasketItem, getBasketItems } = basketSlice.actions;

export default basketSlice.reducer;
