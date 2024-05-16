"use client";

import { CartButtonContext } from "@/context/CartButtonContext";
import { DrawerContext } from "@/context/DrawerContext";
import { ProductContext } from "@/context/ProductContext";
import { Product } from "@/types/product";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

const CardComponent = ({ product }: { product: Product }) => {
  const [totalPrice, setTotalPrice] = useState(
    product.price * (1000 / product.metadata.weight)
  );
  const [totalWeight, setTotalWeight] = useState(1000);
  const [inCart, setInCart] = useState(false);
  const [cartId, setCartId] = useState(-1);

  const onOpen = useContext(DrawerContext);
  const productDetail = useContext(ProductContext);
  const { isCart, cartEmpty, cartNotEmpty, cart, countTotalPrice } =
    useContext(CartButtonContext);

  const addCount = () => {
    if (!inCart) {
      cart.push({
        productId: product,
        quantity: totalWeight / product.metadata.weight,
      });
      setCartId(cart.findIndex((item) => item.productId === product));
      setInCart(true);
    } else {
      setTotalWeight(totalWeight + 100);
      setTotalPrice(totalPrice + product.price);
      cart[cartId].quantity += 100 / product.metadata.weight;
    }
    if (!isCart) {
      cartNotEmpty();
    }
    countTotalPrice();
  };
  const reduceCount = () => {
    setTotalWeight(totalWeight - 100);
    setTotalPrice(totalPrice - product.price);
    cart[cartId].quantity -= 100 / product.metadata.weight;
    if (totalWeight <= 200) {
      cartEmpty();
      setInCart(false);
      setTotalPrice(product.price);
    }
    countTotalPrice();
  };
  const openDrawer = () => {
    productDetail.id = product.id;
    productDetail.name = product.name;
    productDetail.category = product.category;
    productDetail.price = product.price;
    productDetail.weight = product.weight;
    productDetail.imageUrl = product.imageUrl;
    productDetail.metadata = product.metadata;
    onOpen();
  };
  return (
    <>
      <Card maxW="sm" borderRadius="lg" bg={"#F9F8F6"}>
        <CardBody>
          <Image
            src={product.imageUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            className="mix-blend-multiply	"
            onClick={() => openDrawer()}
          />
          <Stack spacing={0}>
            <Heading size="lg">{totalPrice.toFixed(4)}$</Heading>
            <Text>{product.name}</Text>
          </Stack>
        </CardBody>
        <CardFooter pt={0} className="flex justify-between items-center">
          <Button
            borderRadius={"full"}
            border={"1px"}
            opacity={0.5}
            p={0}
            bg={"transparent"}
            onClick={() => reduceCount()}
            hidden={!inCart}
          >
            <Text fontSize="xl">-</Text>
          </Button>
          <Text fontSize="xs">
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
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
