import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
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
  async (params: any) => {
    console.log(params);

    const db = getFirestore();
    const clotRef = collection(db, "products");

    const snapshot = await addDoc(clotRef, params);

    return { id: snapshot.id, ...params };
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
      });
  },
});

export default clothesSlice.reducer;
