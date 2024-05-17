"use client";
import { CartButtonContext } from "@/context/CartButtonContext";
import {
  DrawerContent,
  DrawerBody,
  Heading,
  Text,
  Box,
  Stack,
  Image,
  Progress,
  Button,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import CartProduct from "../CartItem";
import { CartPageContext } from "@/context/CartPageContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { cart } = useContext(CartButtonContext);
  const { onClose } = useContext(CartPageContext);

  useEffect(() => {
    let total = 0;
    cart.map((item) => (total += item.quantity * item.productId.price));
    setTotalPrice(total);
  }, [cart, totalPrice]);

  return (
    <DrawerContent h={"100vh"} py={8}>
      <DrawerBody>
        <div className="flex flex-row gap-4">
          <Button onClick={() => onClose()}>X</Button>
          <Heading as={"h1"} mb={8}>
            Cart
          </Heading>
        </div>
        <Stack spacing="6" className="-ml-8">
          <Box className="grid grid-cols-5 items-center">
            <div className="col-span-2 ml-12">
              <Image src="/car.svg" alt="product image" />
            </div>
            <div className="col-span-3">
              <Text>
                {totalPrice >= 5
                  ? `You Have a Free shipping`
                  : `Before free shipping{" "}
                ${(5 - totalPrice).toFixed(2)}`}
              </Text>
              <Progress
                colorScheme="green"
                value={(totalPrice / 5) * 100}
                size={"sm"}
                mt={2}
              />
            </div>
          </Box>
          {cart.map((item) => CartProduct(item))}
        </Stack>
      </DrawerBody>
      <div className={`fixed bottom-10 w-full max-w-screen px-4`}>
        <button className="w-full bg-black py-4 px-6 text-white rounded-full flex flex-row justify-between">
          <div className="flex flex-row align-middle relative items-center">
            <Text mr={5} className="inline-block">
              Cart
            </Text>
          </div>
          <Text className="inline-block my-auto">${totalPrice.toFixed(2)}</Text>
        </button>
      </div>
    </DrawerContent>
  );
};

export default Cart;
