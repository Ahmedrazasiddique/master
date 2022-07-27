import React, { useContext } from "react";
import ProductForm from "./ProductForm";
import ProductsContext from "../context/ProductsContext";

const AddProduct = ({ history }) => {
  const { Products, setProducts } = useContext(ProductsContext);

  const handleOnSubmit = (Product) => {
    setProducts([Product, ...Products]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <ProductForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddProduct;
