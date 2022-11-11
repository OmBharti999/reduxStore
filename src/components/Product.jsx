import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = ({ products }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    const obj = { ...product, id: v4() };
    dispatch(add(obj));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img className="img" src={product.image} alt="product" />
            <br />
            <br /> <h4>{product.title}</h4>
            <Badge bg="success">New</Badge>
            <br />
            <h5>Rs. {product.price}</h5>
            <br />
            <Button variant="outline-danger" onClick={() => handleAdd(product)}>
              Add to cart
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
