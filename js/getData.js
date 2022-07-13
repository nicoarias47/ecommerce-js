const API = "../data/products.json";

export const pedirProduct = async () => {
  const resp = await fetch(API);
  const data = await resp.json();

  return data;
};

//const IMG = "../data/images.json";
const IMG = "https://nicoarias47.github.io/ecommerce-js/data/images.json";

export const pedirImg = async () => {
  const resp = await fetch(IMG);
  const data = await resp.json();

  return data;
};
