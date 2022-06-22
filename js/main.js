// OBJETOS

//---  microprocesador ---
const micro = [
  {
    id: 1,
    name: "Micro AMD athlon 3000G 3.5 Ghz AM4",
    img: "../img/componentes/micro/micro-1.jpg",
    precio: 19750,
  },
  {
    id: 2,
    name: "Micro AMD Ryzen 5 4600G 4.2 Ghz AM4",
    img: "../img/componentes/micro/micro-2.jpg",
    precio: 27770,
  },
  {
    id: 3,
    name: "Micro AMD Ryzen 7 4750G Pro 3.6 Ghz AM4 OEM",
    img: "../img/componentes/micro/micro-3.jpg",
    precio: 43150,
  },
  {
    id: 4,
    name: "Micro AMD Ryzen 9 5900x 4.8 Ghz AM4",
    img: "../img/componentes/micro/micro-4.jpg",
    precio: 77038,
  },
];

// --- cooler ---
const cooler = [
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
];

// --- motherboard --
const motherboard = [
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
];

// ----- SELECTORS -----

// -- cards --
const imgCard1 = document.querySelector("#card-img-1");
const imgCard2 = document.querySelector("#card-img-2");
const imgCard3 = document.querySelector("#card-img-3");
const imgCard4 = document.querySelector("#card-img-4");
const titleCard1 = document.querySelector("#cTitle-1");
const titleCard2 = document.querySelector("#cTitle-2");
const titleCard3 = document.querySelector("#cTitle-3");
const titleCard4 = document.querySelector("#cTitle-4");
const textCard1 = document.querySelector("#cText-1");
const textCard2 = document.querySelector("#cText-2");
const textCard3 = document.querySelector("#cText-3");
const textCard4 = document.querySelector("#cText-4");

// -- btns --
const btnCompra1 = document.querySelector("#btn-compra-1");
const btnCompra2 = document.querySelector("#btn-compra-2");
const btnCompra3 = document.querySelector("#btn-compra-3");
const btnCompra4 = document.querySelector("#btn-compra-4");

// -- panel izq --
const iconMicro = document.querySelector("#icon-micro");
const iconCooler = document.querySelector("#icon-cooler");
const iconMother = document.querySelector("#icon-mother");
const iconRam = document.querySelector("#icon-ram");
const iconVideo = document.querySelector("#icon-video");
const iconDisco = document.querySelector("#icon-disco");
const iconFuente = document.querySelector("#icon-fuente");
const iconGabinete = document.querySelector("#icon-gabinete");

// --- NEW ARRAY ---

let compra = [];

// --- variable pasos ---
let pasos = 0;

// --- FUNCTION: SHOW PRODUCTS ---

function showProduct(array) {
  const item1 = array[0];
  imgCard1.src = item1.img;
  titleCard1.textContent = item1.name;
  textCard1.textContent = "$ " + item1.precio;
  const item2 = array[1];
  imgCard2.src = item2.img;
  titleCard2.textContent = item2.name;
  textCard2.textContent = "$ " + item2.precio;
  const item3 = array[2];
  imgCard3.src = item3.img;
  titleCard3.textContent = item3.name;
  textCard3.textContent = "$ " + item3.precio;
  const item4 = array[3];
  imgCard4.src = item4.img;
  titleCard4.textContent = item4.name;
  textCard4.textContent = "$ " + item4.precio;
}

// -- FUNCTION: ELECTION ---

function election(array, icon) {
  btnCompra1.addEventListener("click", () => {
    compra.push(array[0]);
    console.log(compra);
    icon.src = array[0].img;
    pasos++;
    console.log(pasos);
  });
  btnCompra2.addEventListener("click", () => {
    compra.push(array[1]);
    console.log(compra);
    icon.src = array[1].img;
    pasos++;
  });
  btnCompra3.addEventListener("click", () => {
    compra.push(array[2]);
    console.log(compra);
    icon.src = array[2].img;
    pasos++;
  });
  btnCompra4.addEventListener("click", () => {
    compra.push(array[3]);
    console.log(compra);
    icon.src = array[3].img;
    pasos++;
  });
}

// --- 😎 ---

// function paso1() {
//   showProduct(micro);
//   election(micro, iconMicro);
// }

function paso2() {
  showProduct(cooler);
  election(cooler, iconCooler);
}

function pasitos() {
  switch (pasos) {
    case 0:
      showProduct(micro);
      election(micro, iconMicro);
      break;
    case 1:
      showProduct(cooler);
      election(cooler, iconCooler);
      break;
  }
  if (pasos < 7) {
    pasitos();
  }
}
// showProduct(micro);
// election(micro);

// paso1();

console.log(pasos);
pasitos();
