import React, { useContext } from "react";
import ProductForm from "./ProductForm";
import { useParams } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const EditProduct = ({ history }) => {
  const { Products, setProducts } = useContext(ProductsContext);
  const { id } = useParams();
  const ProductToEdit = Products.find((Product) => Product.id === id);

  const handleOnSubmit = (Product) => {
    const filteredProducts = Products.filter((Product) => Product.id !== id);
    setProducts([Product, ...filteredProducts]);
    history.push("/");
  };

  return (
    <div>
      <ProductForm Product={ProductToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProduct;
