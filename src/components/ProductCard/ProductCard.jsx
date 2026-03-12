import React from "react";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="image-box">
          <img src={data.image} alt="Wireless Headphones" />
        </div>
        <h3 className="product-name">{data.name}</h3>
        <p className="category">{data.category}</p>
        <p className="price">{data.price}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
