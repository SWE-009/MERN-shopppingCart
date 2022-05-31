import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ imageUrl, name, price, description, productId }) => {
  const [product, setProduct] = useState(0);
  false && console.log(product);
  false && console.log(setProduct);

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__price">${price}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
