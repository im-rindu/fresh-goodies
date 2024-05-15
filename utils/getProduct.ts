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
    const categories: string[] = [];
    response.forEach((product: any) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
};