import React from "react";
import { Pizza } from "../interface/interface";
import { useAddToCart } from "./AddToCart";
import PizzaCss from "../css/Pizza.module.css";

interface Props {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const { desc, id, name, price } = pizza;
  const addToCart = useAddToCart();
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
    });
  };
  return (
    <li className={PizzaCss.container}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
};

export default PizzaItem;
