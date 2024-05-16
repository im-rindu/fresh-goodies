"use client";
import { Product } from "@/types/product";
import { createContext } from "react";

const productTemplate = {
  id: 0,
  name: "",
  price: 0,
  weight: 0,
  category: "",
  imageUrl: "",
  metadata: {
    unit: "",
    increment: 0,
    weight: 0,
    calorie: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
  },
};

const ProductContext = createContext<Product>(productTemplate);

const ProductProvider = (props: any) => {
  const productDetail: Product = productTemplate;
  return (
    <ProductContext.Provider value={productDetail}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
