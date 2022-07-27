import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Product = ({
  id,
  Productname,
  author,
  price,
  quantity,
  date,
  handleRemoveProduct,
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: "18rem" }} className="Product">
      <Card.Body>
        <Card.Title className="Product-title">{Productname}</Card.Title>
        <div className="Product-details">
          {/*
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
  */}
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveProduct(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
