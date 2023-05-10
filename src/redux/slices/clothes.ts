import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { ClothesProduct } from "../type";

interface InitialState {
  data: ClothesProduct[];
  status: "pending" | "fulfilled" | "rejected";
}

const initialState: InitialState = {
  data: [],
  status: "pending",
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

const clothesSlice = createSlice({
  name: "clothesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClothes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getClothes.pending, (state, action) => {
        state.data = [];
        state.status = "pending";
      });
  },
});

export default clothesSlice.reducer;
