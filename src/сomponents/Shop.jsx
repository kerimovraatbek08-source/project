import React from "react";
import ListData from "../db/data.json";
import { Card } from "./Card";
import "./Shop.scss";

export const Shop = () => {
  const products = ListData.products;

  const images = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1612831455549-d0de23b4c3f8?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1596496056741-0e0d0f236df0?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1616628188661-7b0ff11a89a4?auto=format&fit=crop&w=150&q=80",
  ];
  return (
    <div className="shop">
      {products.map((product) => (
        <Card key={product.id} product={product} images={images} />
      ))}
    </div>
  );
};
