// OBJETOS

// ---  microprocesador ---
const array = [
  (micro = [
    {
      id: 1,
      name: "Micro AMD athlon 3000G 3.5 Ghz AM4",
      img: "../img/componentes/micro/micro-1.jpg",
      precio: 19750,
    },
    {
      id: 1,
      name: "Micro AMD Ryzen 5 4600G 4.2 Ghz AM4",
      img: "../img/componentes/micro/micro-2.jpg",
      precio: 27770,
    },
    {
      id: 1,
      name: "Micro AMD Ryzen 7 4750G Pro 3.6 Ghz AM4 OEM",
      img: "../img/componentes/micro/micro-3.jpg",
      precio: 43150,
    },
    {
      id: 1,
      name: "Micro AMD Ryzen 9 5900x 4.8 Ghz AM4",
      img: "../img/componentes/micro/micro-4.jpg",
      precio: 77038,
    },
  ]),
  // --- cooler ---
  (cooler = [
    {
      id: 11,
      name: "No Incluir Cooler",
      img: "../img/componentes/cooler/cooler-1.svg",
      precio: 0,
    },
    {
      id: 12,
      name: "CPU Cooler Xigmatek WindPower WP963 RGB",
      img: "../img/componentes/cooler/cooler-2.jpg",
      precio: 3380,
    },
    {
      id: 13,
      name: "CPU Water Cooler Thermaltake TH120 ARGB",
      img: "../img/componentes/cooler/cooler-3.jpg",
      precio: 15800,
    },
    {
      id: 14,
      name: "CPU Water Cooler ASUS TUF LC 120 RGB",
      img: "../img/componentes/cooler/cooler-4.jpg",
      precio: 23500,
    },
  ]),
  (motherboard = [
    {
      id: 21,
      name: "Motherboard Arock B450M PRO4 AM4",
      img: "../img/componentes/mother/mother-1.jpg",
      precio: 12350,
    },
    {
      id: 22,
      name: "Motherboard Asus B450M-A Primer || AM4",
      img: "../img/componentes/mother/mother-2.jpg",
      precio: 13150,
    },
    {
      id: 23,
      name: "Motherboard Asus B550M-k Prime AM4",
      img: "../img/componentes/mother/mother-3.jpg",
      precio: 15149,
    },
    {
      id: 24,
      name: "Motherboard Gigabyte B550 Aorus Elite AX V2 AM4",
      img: "../img/componentes/mother/mother-4.jpg",
      precio: 36750,
    },
  ]),
];
// --- motherboard --

document.addEventListener("DOMContentLoaded", () => {
  showProduct(array[i]);
});

// ----- SELECTORS -----
const template = document.querySelector("#template").content;
const items = document.querySelector("#items");
const fragment = document.createDocumentFragment();

//--- PINTAR CARDS ---
let showProduct = (array) => {
  array.forEach((el) => {
    template.querySelector("#cTitle").textContent = el.name;
    template.querySelector("#cText").textContent = "$ " + el.precio;
    template.querySelector("#card-img").setAttribute("src", el.img);
    template.querySelector("#btn-compra").dataset.id = el.id;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};

// --- CARRITO ---
let compra = [];

// --- AGREGAR AL CARRITO ---
items.addEventListener("click", (e) => {
  addCarrito(e);
});

const addCarrito = (e) => {
  if (e.target.classList.contains("btn-primary")) {
    setCarrito(e.target.parentElement);
    i++;
    removeCards();
    showProduct(array[i]);
  }

  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector("#btn-compra").dataset.id,
    name: objeto.querySelector("#cTitle").textContent,
    price: objeto.querySelector("#cText").textContent,
  };
  compra.push(producto);
  console.log(i);
};

// ---- PASOS ----

let i = 0;

function removeCards() {
  let removeCard = document.querySelectorAll(".card");
  console.log(removeCard);
  removeCard[0].remove();
  removeCard[1].remove();
  removeCard[2].remove();
  removeCard[3].remove();
}
