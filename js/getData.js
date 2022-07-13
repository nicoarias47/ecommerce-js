const API = "../data/products.json";

export const pedirProduct = async () => {
  const resp = await fetch(API);
  const data = await resp.json();

  return data;
};

const IMG = "../data/img.json";

export const pedirImg = async () => {
  const resp = await fetch(IMG);
  const data = await resp.json();

  return data;
};
