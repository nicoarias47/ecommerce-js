const IMG = "../data/images.json";

export const pedirImg = async () => {
  const resp = await fetch(IMG);
  const data = await resp.json();

  return data;
};
