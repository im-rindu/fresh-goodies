import { CartButtonContext } from "@/context/CartButtonContext";
import { CartItem } from "@/types/cart";
import { Button, Heading, Box, Text, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";

const CartProduct = (item: CartItem) => {
  const { isCart, cartEmpty, cartNotEmpty, cart, countTotalPrice } =
    useContext(CartButtonContext);
  const [totalPrice, setTotalPrice] = useState(
    item.productId.price * item.quantity
  );
  const [totalWeight, setTotalWeight] = useState(
    (item.quantity * item.productId.weight) / 10
  );
  const cartId = cart.findIndex(
    (product) => product.productId === item.productId
  );

  const addCount = () => {
    setTotalWeight(totalWeight + 100);
    setTotalPrice(totalPrice + item.productId.price);
    cart[cartId].quantity += 100 / item.productId.metadata.weight;
    //item.quantity += 100 / item.productId.metadata.weight;
  };
  const reduceCount = () => {
    setTotalWeight(totalWeight - 100);
    setTotalPrice(totalPrice - item.productId.price);
    cart[cartId].quantity += 100 / item.productId.metadata.weight;
  };
  return (
    <Box className="grid grid-cols-5 items-center">
      <Image
        src={item.productId.imageUrl}
        alt={item.productId.name}
        className="col-span-2"
      />
      <div className="grid col-span-3">
        <Heading as={"h3"} size={"md"} mb={4}>
          {item.productId.name}
        </Heading>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center w-3/4 justify-between">
            <Button
              borderRadius={"full"}
              border={"1px"}
              opacity={0.5}
              p={0}
              bg={"transparent"}
              onClick={() => reduceCount()}
            >
              <Text fontSize="xl">-</Text>
            </Button>
            <Text>
              {totalWeight >= 1000
                ? `${(totalWeight / 1000).toFixed(1)} kg`
                : `${totalWeight} g`}
            </Text>
            <Button
              borderRadius={"full"}
              border={"1px"}
              opacity={0.5}
              p={0}
              bg={"transparent"}
              onClick={() => addCount()}
            >
              <Text fontSize="xl">+</Text>
            </Button>
          </div>
          <Text>${totalPrice.toFixed(2)}</Text>
        </div>
      </div>
    </Box>
  );
};

export default CartProduct;
