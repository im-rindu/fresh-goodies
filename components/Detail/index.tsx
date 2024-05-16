"use client";
import { ProductContext } from "@/context/ProductContext";
import {
  DrawerBody,
  DrawerContent,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

const Detail = () => {
  const productDetail = useContext(ProductContext);
  const [totalPrice, setTotalPrice] = useState(
    productDetail.price * (1000 / productDetail.metadata.weight)
  );
  const [totalWeight, setTotalWeight] = useState(1000);

  const addCount = () => {
    setTotalWeight(totalWeight + 100);
    setTotalPrice(totalPrice + productDetail.price);
  };
  const reduceCount = () => {
    setTotalWeight(totalWeight - 100);
    setTotalPrice(totalPrice - productDetail.price);
  };

  return (
    <DrawerContent h={"90vh"}>
      <DrawerBody>
        <div className="relative grid grid-cols-10">
          <button>{"<"}</button>
          <Image
            src={productDetail.imageUrl}
            alt="product image"
            width={"100%"}
            mb={4}
            className="col-span-8"
          />
          <button>{">"}</button>
        </div>
        <Heading as="h1">{productDetail.name}</Heading>
        <Text>In 100 gram</Text>
        <div className="grid grid-cols-4 my-4 border border-solid rounded-2xl">
          <div className="w-full h-full py-4 px-2 text-center">
            <Heading as="h3" size="md">
              {productDetail.metadata.calorie}
            </Heading>
            <Text fontSize="sm">Calorie</Text>
          </div>
          <div className="w-full h-full py-4 px-2 text-center">
            <Heading as="h3" size="md">
              {productDetail.metadata.proteins}
            </Heading>
            <Text fontSize="sm">Proteins</Text>
          </div>
          <div className="w-full h-full py-4 px-2 text-center">
            <Heading as="h3" size="md">
              {productDetail.metadata.fats}
            </Heading>
            <Text fontSize="sm">Fats</Text>
          </div>
          <div className="w-full h-full py-4 px-2 text-center">
            <Heading as="h3" size="md">
              {productDetail.metadata.carbs}
            </Heading>
            <Text fontSize="sm">Carbs</Text>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 my-4 font-bold">
          <div className="grid grid-cols-7 col-span-4">
            <button
              className="rounded-l-full rounded-r-none bg-[#FAFAFA] py-4 pl-5 text-2xl"
              onClick={() => reduceCount()}
            >
              -
            </button>
            <input
              value={
                totalWeight >= 1000
                  ? `${(totalWeight / 1000).toFixed(1)} kg`
                  : `${totalWeight} g`
              }
              className="col-span-5 rounded-none bg-[#FAFAFA] py-4 text-center text-md"
            />
            <button
              className="rounded-r-full rounded-l-none bg-[#FAFAFA] py-4 pr-5 text-2xl"
              onClick={() => addCount()}
            >
              +
            </button>
          </div>
          <a className="bg-[#FAFAFA] rounded-full flex">
            <Image alt="insert to favorite" src="/heart.svg" m="auto" />
          </a>
        </div>
        <div>
          <button className="rounded-full bg-black text-white w-full p-4 mb-4 flex flex-row justify-between">
            <Text className="mx-4">Add to Cart</Text>
            <Text className="mx-4">${totalPrice.toFixed(4)}</Text>
          </button>
        </div>
      </DrawerBody>
    </DrawerContent>
  );
};

export default Detail;
