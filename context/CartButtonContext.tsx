"use client";
import { createContext, useState } from "react";
import { Image, Text } from "@chakra-ui/react";
import { CartItem } from "@/types/cart";

const cart: CartItem[] = [];

interface CartButtonContextType {
  isCart: boolean;
  cartEmpty: () => void;
  cartNotEmpty: () => void;
  countTotalPrice: () => void;
  cart: CartItem[];
}

const CartButtonContext = createContext<CartButtonContextType>({
  isCart: false,
  cartEmpty: () => {},
  cartNotEmpty: () => {},
  countTotalPrice: () => {},
  cart,
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
      value={{ isCart, cartEmpty, cartNotEmpty, cart, countTotalPrice }}
    >
      {props.children}
      <div
        className={`fixed bottom-10 w-full max-w-screen px-4 ${
          isCart ? "" : "hidden"
        }`}
      >
        <button className="w-full bg-black py-4 px-6 text-white rounded-full flex flex-row justify-between">
          <div className="flex flex-row align-middle relative items-center">
            <Text mr={5} className="inline-block">
              Cart
            </Text>
            {currentItem.map((item, index) => (
              <Image
                className={`rounded-full ${
                  currentItem.length < 3
                    ? "-mr-1"
                    : currentItem.length < 5
                    ? "-mr-2"
                    : currentItem.length < 6
                    ? "-mr-3"
                    : currentItem.length < 8
                    ? "-mr-4"
                    : currentItem.length < 10
                    ? "-mr-5"
                    : "-mr-[1.625em]"
                }`}
                key={index}
                src={item}
                alt={item}
                boxSize="36px"
              />
            ))}
          </div>
          <Text className="inline-block my-auto">${totalPrice.toFixed(2)}</Text>
        </button>
      </div>
    </CartButtonContext.Provider>
  );
};

export { CartButtonContext, CartButtonProvider };
