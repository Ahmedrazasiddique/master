import React, { useContext } from "react";
import _ from "lodash";
import Productx from "./Product";
import ProductsContext from "../context/ProductsContext";

const ProductsList = () => {
  const { Products, setProducts } = useContext(ProductsContext);

  const handleRemoveProduct = (id) => {
    setProducts(Products.filter((Product) => Product.id !== id));
  };

  return (
    <React.Fragment>
      <div className="Product-list">
        {!_.isEmpty(Products) ? (
          Products.map((Product) => (
            <Productx
              key={Product.id}
              {...Product}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
        ) : (
          <p className="message">
            No Products available. Please add some Products.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductsList;
