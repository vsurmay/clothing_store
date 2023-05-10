import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { ClothesProduct } from "../type";

interface InitialState {
  data: ClothesProduct[];
  status: "pending" | "fulfilled" | "rejected";
  productCodes: string[];
}

const initialState: InitialState = {
  data: [],
  status: "pending",
  productCodes: [],
};

export const getClothes = createAsyncThunk(
  "clothesSlice/getClothes",
  async (params) => {
    const db = getFirestore();
    const clotRef = collection(db, "products");

    const snapshot = await getDocs(clotRef);
    let clothes: any = [];
    snapshot.forEach((doc) => {
      clothes.push({ ...doc.data(), id: doc.id });
    });
    return clothes;
  }
);

export const adedClother = createAsyncThunk(
  "clothesSlice/adedClother",
  async (params: ClothesProduct) => {
    const db = getFirestore();
    const clotRef = collection(db, "products");

    const snapshot = await addDoc(clotRef, params);

    return { ...params, id: snapshot.id };
  }
);

export const updateClother = createAsyncThunk(
  "clothesSlice/updateClother",
  async (params: ClothesProduct) => {
    const db = getFirestore();
    const clotRef = doc(db, "products", params.id);

    await updateDoc(clotRef, params);

    return params;
  }
);

const clothesSlice = createSlice({
  name: "clothesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClothes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.productCodes = state.data.map((el) => el.productCode);
        state.status = "fulfilled";
      })
      .addCase(getClothes.pending, (state, action) => {
        state.data = [];
        state.status = "pending";
      })
      .addCase(adedClother.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
        state.productCodes = [
          ...state.productCodes,
          action.payload.productCode,
        ];
      })
      .addCase(updateClother.fulfilled, (state, action) => {
        state.data = state.data.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          } else {
            return el;
          }
        });
        state.productCodes = state.data.map((el) => el.productCode);
      });
  },
});

export default clothesSlice.reducer;
