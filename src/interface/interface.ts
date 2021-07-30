export interface Pizza {
  id: number;
  name: string;
  desc: string;
  price: number;
}

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
