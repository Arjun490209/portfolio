import React from "react";
import "./Card.css";

const Cart = ({ title, image }) => {
  return (
    <div id="card">
      <h2>{title}</h2>
      <div className="hover-card">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Cart;
