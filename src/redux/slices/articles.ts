import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
import { ArticleItem } from "../type";

interface InitialState {
  articles: ArticleItem[];
  status: "pending" | "fulfilled" | "rejected";
  articleItem: ArticleItem;
  articleItemStatus: "pending" | "fulfilled" | "rejected";
}
const initialArticleItem: ArticleItem = {
  bgBanner: "",
  date: "",
  firstDescribtion: "",
  firstSubtitle: "",
  id: "",
  image: "",
  mainTitle: "",
  secondlyDescribtion: "",
  secondlySubtitle: "",
  type: "",
  blogCartDescribtion: "",
};

const initialState: InitialState = {
  articles: [],
  status: "pending",
  articleItem: initialArticleItem,
  articleItemStatus: "pending",
};

export const getArticles = createAsyncThunk(
  "articleSlice/getArticles",
  async () => {
    const db = getFirestore();
    const artRef = collection(db, "articles");
    const snapshot = await getDocs(artRef);
    const articles: any = [];
    snapshot.forEach((doc) => {
      articles.push({ ...doc.data(), id: doc.id });
    });
    return articles;
  }
);

export const getArticleItem = createAsyncThunk(
  "articleSlice/getArticleItem",
  async (param: string) => {
    const db = getFirestore();
    const docRef = doc(db, "articles", param);
    const snapshot = await getDoc(docRef);
    return { ...snapshot.data(), id: param };
  }
);

export const adedArticles = createAsyncThunk(
  "articleSlice/adedArticles",
  async (param: ArticleItem) => {
    const { id, ...article } = param;
    const db = getFirestore();
    const docRef = collection(db, "articles");
    const doc = await addDoc(docRef, article);
    return { ...article, id: doc.id };
  }
);

export const deleteArticle = createAsyncThunk(
  "articleSlice/deleteArticle",
  async (param: string) => {
    const db = getFirestore();
    const docRef = doc(db, "articles", param);
    await deleteDoc(docRef);
    return param;
  }
);

export const updateArticle = createAsyncThunk(
  "articleSlice/updateArticle",
  async (param: ArticleItem) => {
    const db = getFirestore();
    const docRef = doc(db, "articles", param.id);
    const snapshot = await updateDoc(docRef, param);
    return param;
  }
);

const articleSlice = createSlice({
  name: "articleSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.status = "fulfilled";
      })
      .addCase(adedArticles.fulfilled, (state, action) => {
        state.articles = [...state.articles, action.payload];
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.articles = state.articles.filter(
          (article) => article.id !== action.payload
        );
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.articles = state.articles.map((article) => {
          if (article.id === action.payload.id) {
            return action.payload;
          } else {
            return article;
          }
        });
      })
      .addCase(getArticleItem.fulfilled, (state, action) => {
        // @ts-ignore
        state.articleItem = action.payload;
        state.articleItemStatus = "fulfilled";
      })
      .addCase(getArticleItem.pending, (state) => {
        state.articleItem = initialArticleItem;
        state.articleItemStatus = "pending";
      });
  },
});

export default articleSlice.reducer;
