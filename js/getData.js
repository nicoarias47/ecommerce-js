const API = "../products.json";

export const pedirProduct = async () => {
  const resp = await fetch(API);
  const data = await resp.json();

  return data;
};
