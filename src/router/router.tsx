import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProducts from "../pages/AllProducts/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "add_product",
        element: <AddProduct />,
      },
      {
        path: "all_products",
        element: <AllProducts />,
      },
    ],
  },
]);
