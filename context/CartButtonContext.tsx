"use client";
import { createContext, useContext, useState } from "react";
import { Text } from "@chakra-ui/react";
import { CartItem } from "@/types/cart";
import ButtonComponent from "@/components/Button";

const cart: CartItem[] = [];

interface CartButtonContextType {
  isCart: boolean;
  cartEmpty: () => void;
  cartNotEmpty: () => void;
  countTotalPrice: () => void;
  cart: CartItem[];
  totalPrice: number;
}

const CartButtonContext = createContext<CartButtonContextType>({
  isCart: false,
  cartEmpty: () => {},
  cartNotEmpty: () => {},
  countTotalPrice: () => {},
  cart,
  totalPrice: 0,
});

const CartButtonProvider = (props: any) => {
  const [isCart, setIsCart] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [currentItem, setCurrentItem] = useState<string[]>([]);
  const cartEmpty = () => {
    setIsCart(false);
  };
  const cartNotEmpty = () => {
    setIsCart(true);
  };
  const countTotalPrice = () => {
    let totalPriceItem = 0;
    const itemInCart: string[] = [];
    cart.map((item) => {
      const totalPrice = item.quantity * item.productId.price;
      totalPriceItem += totalPrice;
      itemInCart.push(item.productId.imageUrl);
    });
    setCurrentItem(itemInCart);
    setTotalPrice(totalPriceItem);
  };

  return (
    <CartButtonContext.Provider
      value={{
        isCart,
        cartEmpty,
        cartNotEmpty,
        cart,
        countTotalPrice,
        totalPrice,
      }}
    >
      {props.children}
      <div
        className={`fixed bottom-10 w-full max-w-screen px-4 ${
          isCart ? "" : "hidden"
        }`}
      >
        <ButtonComponent totalPrice={totalPrice} currentItem={currentItem} />
      </div>
    </CartButtonContext.Provider>
  );
};

export { CartButtonContext, CartButtonProvider };
