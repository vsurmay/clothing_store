import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProducts from "../pages/AllProducts/AllProducts";
import Shop from "../pages/Shop/Shop";
import ProductPage from "../pages/ProductPage/ProductPage";
import Basket from "../pages/Basket/Basket";
import AllArticles from "../pages/AllArticles/AllArticles";
import AddActicle from "../pages/AddActicle/AddActicle";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/blog/article/:articleId",
        element: <Blog />,
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
      { path: "all_articles", element: <AllArticles /> },
      { path: "add_article", element: <AddActicle /> },
    ],
  },
]);
