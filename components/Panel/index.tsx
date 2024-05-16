"use client";
import { TabPanel } from "@chakra-ui/react";
import { Card } from "@/components";
import { getAllProduct, getProductByCategories } from "@/utils/getProduct";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

const fetchData = async (category: string) => {
  try {
    const data = await (category === "All"
      ? getAllProduct()
      : getProductByCategories(category));
    return productCard(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const productCard = (productData: Product[]) =>
  productData.map((product: Product, index: number) => (
    <Card key={index} product={product} />
  ));

const Panel = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    setProducts(fetchData(category));
  }, [category]);
  return <TabPanel className="grid grid-cols-2 gap-4 p-6">{products}</TabPanel>;
};

export default Panel;
