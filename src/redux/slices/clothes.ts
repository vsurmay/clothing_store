import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { ClothesProduct } from "../type";
import getSortProducts from "../../utils/getSortProducts";

interface InitialState {
  data: ClothesProduct[];
  status: "pending" | "fulfilled" | "rejected";
  productCodes: string[];
  dataPopular: ClothesProduct[];
  dataBiggestDiscount: ClothesProduct[];
  clotherProduct: ClothesProduct;
  statusClotherProduct: "pending" | "fulfilled" | "rejected";
}

const initialClotherProduct = {
  id: "",
  name: "",
  productCode: "",
  category: "",
  size: [],
  color: [],
  price: 0,
  discount: 0,
  rating: 0,
  images: {},
};

const initialState: InitialState = {
  data: [],
  status: "pending",
  productCodes: [],
  dataPopular: [],
  dataBiggestDiscount: [],
  clotherProduct: initialClotherProduct,
  statusClotherProduct: "pending",
};

export const getClothes = createAsyncThunk(
  "clothesSlice/getClothes",
  async () => {
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

export const getClotherProduct = createAsyncThunk(
  "clothesSlice/getClotherProduct",
  async (params: string) => {
    const db = getFirestore();
    const prodRef = doc(db, "products", params);
    const snapshot = await getDoc(prodRef);
    if (snapshot.exists()) {
      return { ...snapshot.data(), id: params };
    }
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

export const deleteClother = createAsyncThunk(
  "clothesSlice/deleteClother",
  async (params: string) => {
    const db = getFirestore();
    const docRef = doc(db, "products", params);
    await deleteDoc(docRef);
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
        state.dataPopular = getSortProducts(state.data, "rating", "desc");
        state.dataBiggestDiscount = getSortProducts(
          state.data,
          "discount",
          "desc"
        );
        state.status = "fulfilled";
      })
      .addCase(getClothes.pending, (state) => {
        state.data = [];
        state.productCodes = [];
        state.dataPopular = [];
        state.dataBiggestDiscount = [];
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
        console.log(action.payload);

        state.data = state.data.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          } else {
            return el;
          }
        });
        state.productCodes = state.data.map((el) => el.productCode);
      })
      .addCase(deleteClother.fulfilled, (state, action) => {
        state.data = state.data.filter((el) => el.id !== action.payload);
        state.productCodes = state.data.map((el) => el.productCode);
      })
      .addCase(getClotherProduct.fulfilled, (state, action) => {
        // @ts-ignore
        state.clotherProduct = action.payload;
        state.statusClotherProduct = "fulfilled";
      })
      .addCase(getClotherProduct.pending, (state) => {
        state.clotherProduct = initialClotherProduct;
        state.statusClotherProduct = "pending";
      });
  },
});

export const {} = clothesSlice.actions;

export default clothesSlice.reducer;
