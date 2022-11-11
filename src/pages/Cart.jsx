import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { v4 } from "uuid";
// import "./styles.css";

export default function Cart() {
  const items = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  //  for total amount
  let total = 0;
  items.map((s) => {
    total += s.price;
  });

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-cont">
        {items.map((i) => (
          <div className="cart-item" key={v4()}>
            <div>
              <img src={i.image} height="90px" />
            </div>
            <b style={{ width: "35%" }}>{i.title}</b>
            <h5>Rs. {i.price}</h5>
            <button onClick={() => dispatch(remove(i.id))}>remove</button>
          </div>
        ))}
      </div>
      <h4 className="h4-typer">Total: Rs</h4> {total.toFixed(2)}
    </div>
  );
}
