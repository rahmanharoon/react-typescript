import React from "react";
import { Pizza } from "../interface/interface";
import { WidthAddToCartProps } from "./AddToCart";
import OfferCSS from "../css/SpecialOffer.module.css";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const { desc, id, name, price } = pizza;
  return (
    <div className={OfferCSS.container}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{price}</p>
      {/* @ts-ignore */}
      <WidthAddToCartProps>
        {/* @ts-ignore */}
        {({ addToCart }) => {
          return (
            <button
              type="button"
              onClick={() =>
                addToCart({
                  id,
                  name,
                  price,
                })
              }
            >
              Add to Cart
            </button>
          );
        }}
      </WidthAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
