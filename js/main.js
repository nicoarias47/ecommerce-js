import { pedirImg } from "./getImg.js";

// --- json con url de img ---
const images = await pedirImg();

// --- donde colocaremos nuestras imgs ---
const background = document.querySelector("#background");

// --- seteamos el comienzo ---

let currentItem = 0;

// --- cargamos el item inicial ---

document.addEventListener("DOMcontentLoaded", () => {
  showImg(currentItem);
});

// -- showItem: mostramos las imgs --

const showImg = (url) => {
  const item = images[url];
  background.src = item.img;
};

//-- cambiamos la img cada 3 seg --

setInterval(() => changeImg(), 4000);

const changeImg = () => {
  currentItem++;
  if (currentItem >= images.length) {
    currentItem = 0;
  }
  showImg(currentItem);
};

showImg(currentItem);
