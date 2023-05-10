import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductForm from "../../forms/ProductForm/ProductForm";

const EditProduct = () => {
  const { productId } = useParams();

  const loader = useSelector((state) => state.loader.loader);
  const currentProduct = useSelector((state) => {
    return state.products.data.find(
      (product) => product.id === Number(productId)
    );
  });

  return (
    <>
      {loader && currentProduct == undefined ? null : (
        <ProductForm editProduct={currentProduct} />
      )}
    </>
  );
};

export default EditProduct;
