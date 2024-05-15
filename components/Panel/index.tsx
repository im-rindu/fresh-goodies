"use client";
import { TabPanel } from "@chakra-ui/react";
import { Card } from "@/components";
import { getAllProduct } from "@/utils/getProduct";
import { useEffect, useState } from "react";

const fetchData = async () => {
  try {
    const data = await getAllProduct();
    return productCard(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const productCard = (productData: any) =>
  productData.map((product: any, index: number) => (
    <Card
      key={index}
      name={product.name}
      price={product.price}
      weight={product.weight}
      imageUrl={product.imageUrl}
    />
  ));

const Panel = () => {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    setProducts(fetchData());
  }, []);
  return <TabPanel className="grid grid-cols-2 gap-4 p-6">{products}</TabPanel>;
};

export default Panel;
