import React from "react";
import "./Card.scss";

export const Card = ({ product, images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleClick = () => {
    console.log(`Bought product: id=${product.id}, name=${product.name}`);
  };

  return (
    <div className="card">
      <img src={randomImage} alt={product.name} className="card__image" />
      <h2 className="card__title">{product.name}</h2>
      <button className="card__button" onClick={handleClick}>
        Buy now
      </button>
    </div>
  );
};
