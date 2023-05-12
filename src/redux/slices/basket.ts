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
    deleteBasketItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.uniqueCode !== action.payload
      );
      state.allUniqueCodes = state.products.map(
        (product) => product.uniqueCode
      );
      state.sumBasketProducts = getSumBasketProducts(state.products);
    },
    updateBasketProducts: (state, action: PayloadAction<BasketItem>) => {
      state.products = state.products.map((product) => {
        if (product.uniqueCode === action.payload.uniqueCode) {
          return action.payload;
        } else {
          return product;
        }
      });
      state.allUniqueCodes = state.products.map(
        (product) => product.uniqueCode
      );
      state.sumBasketProducts = getSumBasketProducts(state.products);
    },
    deleteAllBasketItems: (state) => {
      state.products = [];
      state.allUniqueCodes = [];
      state.sumBasketProducts = 0;
    },
  },
});

export const {
  adedBasketItem,
  getBasketItems,
  deleteBasketItem,
  updateBasketProducts,
  deleteAllBasketItems,
} = basketSlice.actions;

export default basketSlice.reducer;
