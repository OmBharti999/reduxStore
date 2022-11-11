import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        padding: "0 5px",
        alignItems: "center",
        justifyContent: "space-between",
        background: "purple",
        color: "white"
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "12px 5px"
        }}
      >
        <NavLink
          to="/home"
          style={{
            color: "white"
          }}
        >
          Home
        </NavLink>
        <NavLink
          style={{
            color: "white"
          }}
          to="/cart"
        >
          Cart <span className="cart-count">{items.length}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
