import { Product } from "@/types/product";

export const getAllProduct = async () => {
  try {
    const response = await fetch("http://localhost:8080/products");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await getAllProduct();
    const categories: string[] = ["All"];
    response.forEach((product: Product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategories = async (category: string) => {
  try {
    const response = await getAllProduct();
    return response.filter((product: Product) => product.category === category);
  } catch (error) {
    console.log(error);
  }
};
