import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ProductForm = (props) => {
  const [Product, setProduct] = useState(() => {
    return {
      Productname: props.Product ? props.Product.Productname : "",
      maxsupply: props.Product ? props.Product.maxsupply : "",
      quantity: props.Product ? props.Product.quantity : "drinks",
      price: props.Product ? props.Product.price : "",
      date: props.Product ? props.Product.date : "", 
      isVisible: props.Product ? props.Product.isVisible : true,
      specialFeatures: props.Product ? props.Product.specialFeatures : "",
      
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { Productname, maxsupply, price, quantity,isVisible,specialFeatures } = Product;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [Productname, maxsupply, quantity,isVisible,specialFeatures];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const Product = {
        id: uuidv4(),
        Productname,
        maxsupply,
        price,
        quantity,isVisible,specialFeatures,
        date: new Date(),
      };
      props.handleOnSubmit(Product);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value !== "") {
          setProduct((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProduct((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setProduct((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="Productname"
            value={Productname}
            placeholder="Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="maxsupply">
          <Form.Label>Max Supply *</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="maxsupply"
            value={maxsupply}
            placeholder="Max Supply"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <select
            className="input-control"
            name="quantity"
            value={quantity}
            onChange={handleInputChange}
          >
            <option value="drinks">drinks</option>
            <option value="drinks2">drinks 2</option>
            </select>
          
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Visibility on website</Form.Label>
          {['radio'].map((type) => (
        <div key={`default-${type}`}>
          <Form.Check 
            type={type}
            id={`Visible-${type}`}
            label={`Visible`} 
            name="isVisible" 
            onChange={handleInputChange}
          />
          <Form.Check
            type={type}
            label={`Hidden`}
            id={`Hidden-${type}`}  
            name="isVisible"
            onChange={handleInputChange}
          />
        </div>
      ))}
        </Form.Group>  
        <Form.Group controlId="price">
          <Form.Label>Special features</Form.Label>
          {['checkBox'].map((type) => (
        <div key={`default-${type}`}>
          <Form.Check 
            type={type}
            id={`Fragile-${type}`}
            label={`Fragile`} 
            name="specialFeatures" 
            onChange={handleInputChange}
          />
          <Form.Check
            type={type}
            label={`Preshiable`}
            id={`Preshiable-${type}`}  
            name="specialFeatures"
            onChange={handleInputChange}
          />
          <Form.Check
          type={type}
          label={`Heavy Weight`}
          id={`Hidden-${type}`}  
          name="specialFeatures"
          onChange={handleInputChange}
        />
        </div>
      ))}
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
