import "./scss/reset.scss";
import "./scss/global.scss";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyBMX8_qfiyjpE9htzvFqexOX7lEvnM46V8",
  authDomain: "shoping-store-b2134.firebaseapp.com",
  databaseURL:
    "https://shoping-store-b2134-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoping-store-b2134",
  storageBucket: "shoping-store-b2134.appspot.com",
  messagingSenderId: "798294658979",
  appId: "1:798294658979:web:f1338df8d207a31f8b9416",
  measurementId: "G-5ZG44XB9HF",
};

initializeApp(firebaseConfig);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
