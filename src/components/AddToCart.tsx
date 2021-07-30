import React from "react";
import { AddToCartProps } from "../interface/interface";
import { useStateDispatch } from "./AppState";

export function widthAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCart: AddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return (
      <ChildComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCart}
      />
    );
  };
  return AddToCartHOC;
}

export const WidthAddToCartProps: React.FC<{
  childern: (props: AddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  //@ts-ignore
  return children({ addToCart });
};

export const useAddToCart = () => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return addToCart;
};
