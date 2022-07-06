// OBJETOS

// ---  microprocesador ---
const array = [
  (micro = [
    {
      id: 5,
      name: "Micro AMD Ryzen 3 4100 4.0 Ghz AM4 OEM",
      img: "../img/componentes/micro/micro-5.jpg",
      precio: 17080,
    },

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
      id: 6,
      name: "Micro AMD Ryzen 7 5700G 4.6 Ghz AM4",
      img: "../img/componentes/micro/micro-6.jpg",
      precio: 54754,
    },
    {
      id: 4,
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
      id: 18,
      name: "CPU Cooler ID-Cooling SE-902-SD",
      img: "../img/componentes/cooler/cooler-8.jpg",
      precio: 2199,
    },
    {
      id: 12,
      name: "CPU Cooler Xigmatek WindPower WP963 RGB",
      img: "../img/componentes/cooler/cooler-2.jpg",
      precio: 3380,
    },
    {
      id: 15,
      name: "CPU Cooler Master Hyper H411R WHITE LED",
      img: "../img/componentes/cooler/cooler-5.jpg",
      precio: 5330,
    },
    {
      id: 16,
      name: "CPU CoolerMaster Hyper 212 LED Turbo WHITE EDITION",
      img: "../img/componentes/cooler/cooler-6.jpg",
      precio: 8649,
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
    {
      id: 19,
      name: "CPU Watercooler Coolermaster Masterliquid ML240L V2 ARGB",
      img: "../img/componentes/cooler/cooler-9.jpg",
      precio: 24275,
    },
    {
      id: 17,
      name: "CPU Watercooler 360MM Corsair 3X CPU COOLER BLACK",
      img: "../img/componentes/cooler/cooler-7.jpg",
      precio: 51578,
    },
  ]),
  (motherboard = [
    {
      id: 25,
      name: "Motherboard Msi A320-A Pro Max Compatible 5Ta Generacion",
      img: "../img/componentes/mother/mother-5.jpg",
      precio: 8266,
    },
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
      id: 26,
      name: "Motherboard Asus B550M-PLUS TUF Gaming Dual M.2 (Wifi)",
      img: "../img/componentes/mother/mother-6.jpg",
      precio: 26834,
    },
    {
      id: 27,
      name: "Motherboard Msi B550 Gaming Plus AM4 DDR4",
      img: "../img/componentes/mother/mother-7.jpg",
      precio: 27232,
    },
    {
      id: 24,
      name: "Motherboard Gigabyte B550 Aorus Elite AX V2 AM4",
      img: "../img/componentes/mother/mother-4.jpg",
      precio: 36750,
    },
  ]),
  (ram = [
    {
      id: 30,
      name: "No incluir Memoria RAM",
      img: "../img/componentes/ram/noRam.svg",
      precio: 0,
    },
    {
      id: 31,
      name: "Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-1.jpg",
      precio: 3850,
    },
    {
      id: 35,
      name: "Memoria Ram Kingston Fury Beast 4GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-5.jpg",
      precio: 4800,
    },
    {
      id: 32,
      name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-2.jpg",
      precio: 5650,
    },
    {
      id: 36,
      name: "Memoria Ram PNY XLR8 GAMING 8GB 3200Mhz RGB DDR4",
      img: "../img/componentes/ram/ram-6.jpg",
      precio: 6641,
    },
    {
      id: 33,
      name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
      img: "../img/componentes/ram/ram-3.jpg",
      precio: 7540,
    },
    {
      id: 37,
      name: "Memoria Ram 8GB DDR4 3466 Mhz Hyperx Fury RGB Kingston",
      img: "../img/componentes/ram/ram-7.jpg",
      precio: 8720,
    },
    {
      id: 39,
      name: "Memoria Ram Corsair 16GB DDR4 2666 Value",
      img: "../img/componentes/ram/ram-9.jpg",
      precio: 11760,
    },
    {
      id: 38,
      name: "Memoria Ram Corsair 16GB DDR4 3000 Vengeance LPX",
      img: "../img/componentes/ram/ram-8.jpg",
      precio: 20500,
    },
    {
      id: 34,
      name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
      img: "../img/componentes/ram/ram-4.jpg",
      precio: 22655,
    },
  ]),
  (ram2 = [
    {
      id: 30,
      name: "No incluir Memoria RAM",
      img: "../img/componentes/ram/noRam.svg",
      precio: 0,
    },
    {
      id: 31,
      name: "Memoria Ram Kingston 4GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-1.jpg",
      precio: 3850,
    },
    {
      id: 35,
      name: "Memoria Ram Kingston Fury Beast 4GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-5.jpg",
      precio: 4800,
    },
    {
      id: 32,
      name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-2.jpg",
      precio: 5650,
    },
    {
      id: 36,
      name: "Memoria Ram PNY XLR8 GAMING 8GB 3200Mhz RGB DDR4",
      img: "../img/componentes/ram/ram-6.jpg",
      precio: 6641,
    },
    {
      id: 33,
      name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
      img: "../img/componentes/ram/ram-3.jpg",
      precio: 7540,
    },
    {
      id: 37,
      name: "Memoria Ram 8GB DDR4 3466 Mhz Hyperx Fury RGB Kingston",
      img: "../img/componentes/ram/ram-7.jpg",
      precio: 8720,
    },
    {
      id: 39,
      name: "Memoria Ram Corsair 16GB DDR4 2666 Value",
      img: "../img/componentes/ram/ram-9.jpg",
      precio: 11760,
    },
    {
      id: 38,
      name: "Memoria Ram Corsair 16GB DDR4 3000 Vengeance LPX",
      img: "../img/componentes/ram/ram-8.jpg",
      precio: 20500,
    },
    {
      id: 34,
      name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
      img: "../img/componentes/ram/ram-4.jpg",
      precio: 22655,
    },
  ]),
  (video = [
    {
      id: 41,
      name: "No Incluir Placa de Video",
      img: "../img/componentes/placaVideo/noPlaca.svg",
      precio: 0,
    },
    {
      id: 45,
      name: "Placa de Video Geforce GT 730 2GB Gigabyte DDR3",
      img: "../img/componentes/placaVideo/video-5.jpg",
      precio: 15910,
    },
    {
      id: 46,
      name: "Placa de Video Radeon RX 550 AMD 2GB DDR5 LOW Profile OEM",
      img: "../img/componentes/placaVideo/video-6.jpg",
      precio: 21800,
    },
    {
      id: 42,
      name: "Placa de Video Asus Nvidia Geforce GTX 1650 OC 4GB GDDR6",
      img: "../img/componentes/placaVideo/video-2.jpg",
      precio: 49900,
    },
    {
      id: 47,
      name: "Placa de Video RX 6500 XT 4GB MSI Mech 2X OC",
      img: "../img/componentes/placaVideo/video-7.jpg",
      precio: 79100,
    },
    {
      id: 48,
      name: "Placa de Video Geforce RTX 3050 8GB Asus Dual",
      img: "../img/componentes/placaVideo/video-8.jpg",
      precio: 95500,
    },
    {
      id: 49,
      name: "Placa de Video Power Color Radeon Rx 6700 XT ReD Evil 12GB GDDR6",
      img: "../img/componentes/placaVideo/video-9.jpg",
      precio: 110000,
    },
    {
      id: 43,
      name: "Placa de Video PNY RTX 3060 Ti UPRISING Fan 8GB GDDR6 LHR",
      img: "../img/componentes/placaVideo/video-3.jpg",
      precio: 116000,
    },
    {
      id: 44,
      name: "Placa de Video PNY Geforce RTX 3080 Ti XLR8 Gaming REVEL EPIC-X RGB 12GB GDDR6X",
      img: "../img/componentes/placaVideo/video-4.jpg",
      precio: 224000,
    },
  ]),
  (disco = [
    {
      id: 51,
      name: "No agregar Disco",
      img: "../img/componentes/disco/noDisco.svg",
      precio: 0,
    },
    {
      id: 55,
      name: "Disco Solido SSD 120GB Netac N535S 2.5 Sata III",
      img: "../img/componentes/disco/disco-4.jpg",
      precio: 2812,
    },
    {
      id: 52,
      name: "Disco solido SSD 240GB Kingston A400 SATA III",
      img: "../img/componentes/disco/disco-1.jpg",
      precio: 4550,
    },
    {
      id: 53,
      name: "Disco Rigido 1TB Western Digital Blue",
      img: "../img/componentes/disco/disco-2.jpg",
      precio: 6250,
    },
    {
      id: 56,
      name: "Disco Solido SSD 480GB Western Digital SN350 Green M.2 NVMe PCIe X4 3.0",
      img: "../img/componentes/disco/disco-5.jpg",
      precio: 7511,
    },
    {
      id: 54,
      name: "Disco Solido SSD 512GB Gigabyte M.2 NVMe PCIe x4 3.0",
      img: "../img/componentes/disco/disco-3.jpg",
      precio: 9850,
    },
    {
      id: 57,
      name: "Disco HDD 2TB SATA3 Wd Purple",
      img: "../img/componentes/disco/disco-6.jpg",
      precio: 10500,
    },
  ]),
  (fuente = [
    {
      id: 61,
      name: "No agregar fuente",
      img: "../img/componentes/fuente/noFuente.svg",
      precio: 0,
    },
    {
      id: 65,
      name: "Fuente 500W Thermaltake Smart 80 PLUS White",
      img: "../img/componentes/fuente/fuente-4.jpg",
      precio: 8020,
    },
    {
      id: 62,
      name: "Fuente 600W Thermaltake Smart 80 PLUS White",
      img: "../img/componentes/fuente/fuente-1.jpg",
      precio: 9239,
    },
    {
      id: 66,
      name: "Fuente 600W Gamemax VP-600 RGB 80 PLUS Bronze",
      img: "../img/componentes/fuente/fuente-5.jpg",
      precio: 9817,
    },
    {
      id: 67,
      name: "Fuente 700W Gamermax VP-700 80 PLUS Bronze",
      img: "../img/componentes/fuente/fuente-6.jpg",
      precio: 12442,
    },
    {
      id: 63,
      name: "Fuente 750W Gigabyte AORUS AP750GM 80 PLUS GOLD",
      img: "../img/componentes/fuente/fuente-2.jpg",
      precio: 23998,
    },
    {
      id: 68,
      name: "Fuente 750W Corsair CX750F Full Modular 80 PLUS Bronze RGB W",
      img: "../img/componentes/fuente/fuente-7.jpg",
      precio: 27450,
    },
    {
      id: 64,
      name: "Fuente 850W Seasonic Focus 850 80 PLUS Gold",
      img: "../img/componentes/fuente/fuente-3.jpg",
      precio: 34580,
    },
  ]),
  (gabinete = [
    {
      id: 71,
      name: "No incluir Gabinete",
      img: "../img/componentes/gabinete/noGabinete.svg",
      precio: 0,
    },
    {
      id: 72,
      name: "Gabinete Kiy BRB SB-30 500W Gen",
      img: "../img/componentes/gabinete/gabinete-1.jpg",
      precio: 4950,
    },
    {
      id: 75,
      name: "Gabinete Xigmatek Vortex Artic",
      img: "../img/componentes/gabinete/gabinete-4.jpg",
      precio: 6850,
    },
    {
      id: 73,
      name: "Gabinete Gamer FALCOM G-8012 RAINBOW",
      img: "../img/componentes/gabinete/gabinete-2.jpg",
      precio: 7079,
    },
    {
      id: 74,
      name: "Gabinete Xigmatek Gaming X 6 Fan Edition - No LED",
      img: "../img/componentes/gabinete/gabinete-3.jpg",
      precio: 9308,
    },
    {
      id: 76,
      name: "Gabinete Gamer Aureox Sculptor ARX380G",
      img: "../img/componentes/gabinete/gabinete-5.jpg",
      precio: 10500,
    },
    {
      id: 77,
      name: "Gabinete Corsair Carbide Spec Delta RGB 3 Fun",
      img: "../img/componentes/gabinete/gabinete-6.jpg",
      precio: 15500,
    },
    {
      id: 78,
      name: "Gabinete Corsair ICUE 220T RGB TG-Tower Black",
      img: "../img/componentes/gabinete/gabinete-7.jpg",
      precio: 20560,
    },
  ]),
];

document.addEventListener("DOMContentLoaded", () => {
  stopGet();
  pasosObtener();
  iconSet();
  compraGet();
  segundaCompraGet();
  costosItemGet();
  pintarCostos();
  showProduct(array[i]);
});

// ----- SELECTORS -----
// - template cards -
const template = document.querySelector("#template").content;
const cards = document.querySelector("#items");
const fragment = document.createDocumentFragment();

//--- PINTAR CARDS ---
const showProduct = (array) => {
  if (i < 9) {
    array.forEach((el) => {
      template.querySelector("#cTitle").textContent = el.name;
      template.querySelector("#cText").textContent = el.precio;
      template.querySelector("#card-img").setAttribute("src", el.img);
      template.querySelector("#btn-compra").dataset.id = el.id;
      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
    });
  }
  cards.appendChild(fragment);
  pasosBarra();
};

// --- CARRITO ---
let compra = {};

// --- AGREGAR AL CARRITO ---
cards.addEventListener("click", (e) => {
  addCarrito(e);
  showIcons(e);
});

const addCarrito = (e) => {
  if (e.target.classList.contains("btn-primary")) {
    setCarrito(e.target.parentElement);
    i++; // aumentamos "i" de array
    removeCards(); // removemos antiguas tarjetas

    i < 9 && showProduct(array[i]); // si pasos es -9 recargamos el siguiente paso
  }

  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector("#btn-compra").dataset.id,
    name: objeto.querySelector("#cTitle").textContent,
    price: objeto.querySelector("#cText").textContent,
    amount: 1,
  };

  if (compra.hasOwnProperty(producto.id)) {
    producto.amount = compra[producto.id].amount + 1;
  }

  stop++;

  compra[producto.id] = { ...producto };
  pintarCarrito();
  // Toastyfy
  if (producto.price > 0) {
    Toastify({
      text: `añadiste a tu PC: ${producto.name}
              Cantidad: ${producto.amount}`,
      duration: 2500,
      gravity: "bottom",
      position: "left",
      className: "toasty",
      style: {
        background: "#03cc90",
        color: "#ffffff",
      },
    }).showToast();
  }
};

// ---- PASOS ----

let i = 0;

function removeCards() {
  let removeCard = document.querySelectorAll(".card");

  for (let i = 0; i < removeCard.length; i++) {
    removeCard[i].remove();
  }
}

// --- PINTAR PANEL IZQ ---
function showIcons(e) {
  if (e.target.parentElement.parentElement.classList.contains("card")) {
    setIcons(e.target.parentElement.parentElement);
  }
  e.preventDefault();
}

const setIcons = (objeto) => {
  const iconImg = objeto.querySelector(".card-img-top").src;
  const img = document.querySelectorAll(".componentes-img");
  img[i - 1].src = iconImg;
  const iconName = objeto.querySelector(".card-title").textContent;
  const name = document.querySelectorAll(".componentes-cardName");
  name[i - 1].textContent = iconName;

  iconStorage(iconImg, iconName);
};

// --- PINTAR CARRITO ---

// - Templates carrito -
const templateCarrito = document.querySelector("#template-carrito").content;

const listProducts = document.querySelector("#list-product"); // donde se colocaran nuestros productos

const pintarCarrito = () => {
  listProducts.innerHTML = ""; // evitamos que recarge nuevamente los productos
  Object.values(compra).forEach((producto) => {
    if (producto.price > 0) {
      // evitamos que muestre los productos con precio > 0
      templateCarrito.querySelectorAll("td")[0].textContent = producto.name;
      templateCarrito.querySelectorAll("td")[1].textContent = producto.amount;
      templateCarrito.querySelectorAll("td")[2].textContent =
        producto.amount * producto.price;

      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    }
  });
  listProducts.appendChild(fragment);
  stopStorage();
  setCostos();
  compraStorage();
  pasosStorage();
  costosArmarPcStorage();
  pintarCostos();
};

// --- LOCAL STORAGE ---
const compraStorage = () => {
  localStorage.setItem("compra", JSON.stringify(compra));
};

const compraGet = () => {
  if (localStorage.getItem("compra")) {
    compra = JSON.parse(localStorage.getItem("compra"));
    pintarCarrito();
  }
};

const iconStorage = (el, iconName) => {
  if (i - 1 === 0) {
    localStorage.setItem("imgMicro", JSON.stringify(el));
    localStorage.setItem("nameMicro", JSON.stringify(iconName));
  } else if (i - 1 === 1) {
    localStorage.setItem("imgCooler", JSON.stringify(el));
    localStorage.setItem("nameCooler", JSON.stringify(iconName));
  } else if (i - 1 === 2) {
    localStorage.setItem("imgMother", JSON.stringify(el));
    localStorage.setItem("nameMother", JSON.stringify(iconName));
  } else if (i - 1 === 3) {
    localStorage.setItem("imgRam1", JSON.stringify(el));
    localStorage.setItem("nameRam1", JSON.stringify(iconName));
  } else if (i - 1 === 4) {
    localStorage.setItem("imgRam2", JSON.stringify(el));
    localStorage.setItem("nameRam2", JSON.stringify(iconName));
  } else if (i - 1 === 5) {
    localStorage.setItem("imgVideo", JSON.stringify(el));
    localStorage.setItem("nameVideo", JSON.stringify(iconName));
  } else if (i - 1 === 6) {
    localStorage.setItem("imgDisco", JSON.stringify(el));
    localStorage.setItem("nameDisco", JSON.stringify(iconName));
  } else if (i - 1 === 7) {
    localStorage.setItem("imgFuente", JSON.stringify(el));
    localStorage.setItem("nameFuente", JSON.stringify(iconName));
  } else if (i - 1 === 8) {
    localStorage.setItem("imgGabinete", JSON.stringify(el));
    localStorage.setItem("nameGabinete", JSON.stringify(iconName));
    pasosBarra(); // seteo el ultimo paso de la barra aqui
  }
};

const iconSet = () => {
  const img = document.querySelectorAll(".componentes-img");
  const name = document.querySelectorAll(".componentes-cardName");

  if (localStorage.getItem("imgMicro")) {
    img[0].src = JSON.parse(localStorage.getItem("imgMicro"));
    name[0].textContent = JSON.parse(localStorage.getItem("nameMicro"));
  }
  if (localStorage.getItem("imgCooler")) {
    img[1].src = JSON.parse(localStorage.getItem("imgCooler"));
    name[1].textContent = JSON.parse(localStorage.getItem("nameCooler"));
  }
  if (localStorage.getItem("imgMother")) {
    img[2].src = JSON.parse(localStorage.getItem("imgMother"));
    name[2].textContent = JSON.parse(localStorage.getItem("nameMother"));
  }
  if (localStorage.getItem("imgRam1")) {
    img[3].src = JSON.parse(localStorage.getItem("imgRam1"));
    name[3].textContent = JSON.parse(localStorage.getItem("nameRam1"));
  }
  if (localStorage.getItem("imgRam2")) {
    img[4].src = JSON.parse(localStorage.getItem("imgRam2"));
    name[4].textContent = JSON.parse(localStorage.getItem("nameRam2"));
  }
  if (localStorage.getItem("imgVideo")) {
    img[5].src = JSON.parse(localStorage.getItem("imgVideo"));
    name[5].textContent = JSON.parse(localStorage.getItem("nameVideo"));
  }
  if (localStorage.getItem("imgDisco")) {
    img[6].src = JSON.parse(localStorage.getItem("imgDisco"));
    name[6].textContent = JSON.parse(localStorage.getItem("nameDisco"));
  }
  if (localStorage.getItem("imgFuente")) {
    img[7].src = JSON.parse(localStorage.getItem("imgFuente"));
    name[7].textContent = JSON.parse(localStorage.getItem("nameFuente"));
  }
  if (localStorage.getItem("imgGabinete")) {
    img[8].src = JSON.parse(localStorage.getItem("imgGabinete"));
    name[8].textContent = JSON.parse(localStorage.getItem("nameGabinete"));
  }
};

// --- PASOS LOCALSTORAGE --- guardamos progreso de la compra

const pasosStorage = () => {
  localStorage.setItem("pasos", JSON.stringify(i));
};

const pasosObtener = () => {
  if (localStorage.getItem("pasos")) {
    if (
      localStorage.getItem("pasos") < localStorage.getItem("stop") &&
      localStorage.getItem("pasos") < 9
    ) {
      i = JSON.parse(localStorage.getItem("pasos")) + 1;
    } else {
      i = JSON.parse(localStorage.getItem("pasos"));
    }
  }
};

let costosItems = {
  total: 0,
  subTotal: 0,
  iva: 0,
  envio: 0,
};

let costosPc = {
  total: 0,
  subTotal: 0,
  envio: 0,
  iva: 0,
};

// --- Enviamos los costos al local storage ---
const setCostos = () => {
  let subTotalPc = Object.values(compra).reduce(
    (acc, { amount, price }) => acc + price * amount,
    0
  );

  let ivaPc = subTotalPc * 0.21;

  let envioPc = 0;

  const mostrarEnvio = () => {
    if (totalPc > 140000) {
      envioPc = 0;
    } else {
      envioPc = 800;
    }
  };

  let totalPc = subTotalPc + ivaPc + envioPc;

  mostrarEnvio();
  costosPc.total = totalPc;
  costosPc.subTotal = subTotalPc;
  costosPc.iva = ivaPc;
  costosPc.envio = envioPc;
};

// --- enviamos los costos de los productos por item al local storage ---
const setCostosItems = () => {
  let subTotalPc = Object.values(compraItems).reduce(
    (acc, { amount, price }) => acc + price * amount,
    0
  );

  let ivaPc = subTotalPc * 0.21;

  let envioPc = 0;

  const mostrarEnvio = () => {
    if (totalPc > 140000) {
      envioPc = 0;
    } else {
      envioPc = 800;
    }
  };

  let totalPc = subTotalPc + ivaPc + envioPc;

  mostrarEnvio();
  costosItems.total = totalPc;
  costosItems.subTotal = subTotalPc;
  costosItems.iva = ivaPc;
  costosItems.envio = envioPc;
};

// -- STORAGE CARRITO ARMA TU PC --
const costosArmarPcStorage = () => {
  localStorage.setItem("costos pc", JSON.stringify(costosPc));
  costosArmarPcStorageGet();
};

const costosArmarPcStorageGet = () => {
  if (localStorage.getItem("costos pc")) {
    costosPc = JSON.parse(localStorage.getItem("costos pc"));
    pintarCostos();
  }
};

const costosItemStorage = () => {
  localStorage.setItem("costosItems", JSON.stringify(costosItems));
  costosItemGet();
};

const costosItemGet = () => {
  if (localStorage.getItem("costosItems")) {
    costosItems = JSON.parse(localStorage.getItem("costosItems"));
    pintarCostos();
  }
};

// --- PINTAR COSTOS EN CARRITO ---

// - Donde se pintaran nuestros costos
const carritoSubTotal = document.querySelector(".carrito-subTotal");
const carritoEnvio = document.querySelector(".carrito-envio");
const carritoIva = document.querySelector(".carrito-iva");
const carritoTotal = document.querySelector(".carrito-total");

const pintarCostos = () => {
  if (costosPc.subTotal > 0 && costosItems.subTotal <= 0) {
    carritoSubTotal.textContent = "$ " + costosPc.subTotal;
    carritoIva.textContent = "$ " + Math.trunc(costosPc.iva);
    carritoTotal.textContent = "$ " + costosPc.total;
    carritoEnvio.textContent = "$ " + costosPc.envio;
  } else if (costosItems.subTotal > 0 && costosPc.subTotal <= 0) {
    carritoSubTotal.textContent = "$ " + costosItems.subTotal;
    carritoIva.textContent = "$ " + Math.trunc(costosItems.iva);
    carritoTotal.textContent = "$ " + costosItems.total;
    carritoEnvio.textContent = "$ " + costosItems.envio;
  } else if (costosPc.subTotal > 0 && costosItems.subTotal > 0) {
    let costosTotal = {
      total: 0,
      subTotal: 0,
      envio: 0,
      iva: 0,
    };

    costosTotal.total = costosPc.total + costosItems.total;
    costosTotal.subTotal = costosPc.subTotal + costosItems.subTotal;
    costosTotal.iva = costosPc.iva + costosItems.iva;
    if (costosTotal.total > 140000) {
      costosTotal.envio = 0;
    } else {
      costosTotal.envio = 800;
    }
    carritoSubTotal.textContent = "$ " + costosTotal.subTotal;
    carritoIva.textContent = "$ " + Math.trunc(costosTotal.iva);
    carritoTotal.textContent = "$ " + costosTotal.total;
    carritoEnvio.textContent = "$ " + costosTotal.envio;
  } else {
    carritoSubTotal.textContent = "$ " + costosPc.subTotal;
    carritoIva.textContent = "$ " + Math.trunc(costosPc.iva);
    carritoTotal.textContent = "$ " + costosPc.total;
    carritoEnvio.textContent = "$ " + costosPc.envio;
  }
};

// --- STOP --- le ponemos un freno a "i", para que no siga sumando pasos al recargar la pagina
let stop = 0;

const stopStorage = () => {
  localStorage.setItem("stop", JSON.stringify(stop));
};

const stopGet = () => {
  if (localStorage.getItem("stop")) {
    stop = JSON.parse(localStorage.getItem("stop"));
  }
};

// --- CARRITO DE PRODUCTOS (individuales) ----

let compraItems = {};

const segundaCompraGet = () => {
  if (localStorage.getItem("productos")) {
    compraItems = JSON.parse(localStorage.getItem("productos"));
    pintarSegundoCarrito();
  }
};

// --- PINTAR SEGUNDO CARRITO --- (de productos individuales - lo pintamos en el carrito)

const templateCarritoDos = document.querySelector(
  "#template-segundo-carrito"
).content;

const list = document.querySelector("#list-items");

const pintarSegundoCarrito = () => {
  list.innerHTML = ""; // evitamos que recarge nuevamente los productos
  Object.values(compraItems).forEach((producto) => {
    if (producto.price > 0) {
      // evitamos que muestre los productos con precio > 0
      templateCarritoDos.querySelectorAll("td")[0].textContent = producto.name;
      templateCarritoDos.querySelectorAll("td")[1].textContent =
        producto.amount;
      templateCarritoDos.querySelectorAll("td")[2].textContent =
        producto.amount * producto.price;
      templateCarritoDos.querySelector(".fa-trash").dataset.id = producto.id;

      const clone = templateCarritoDos.cloneNode(true);
      fragment.appendChild(clone);
    }
  });
  list.appendChild(fragment);
};

// --- seteo el nuevo storage ---
const segundaCompraStorage = () => {
  localStorage.setItem("productos", JSON.stringify(compraItems));
};

const deleteAllBtn = document.querySelector("#delete-all");

// --- Eliminar productos del carrito ---
const deleteAll = () => {
  compraItems = {};
  compra = {};
  localStorage.clear();
  i = 0;
  stop = 0;
  pintarSegundoCarrito();

  pintarCarrito();

  location.reload();
};

// --- SWEET ALERT: delete all---

deleteAllBtn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Esta seguro de vaciar el carrito?",
    text: "¡No podrás revertir esto!",
    imageUrl: "../img/conejo.png",
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: "Conejo enojado",
    showCancelButton: true,
    confirmButtonColor: "#03cc90",
    cancelButtonColor: "#232734",
    confirmButtonText: "Si, Vaciar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteAll();
    }
  });
});

list.addEventListener("click", (e) => {
  deleteItem(e);
});

const deleteItem = (e) => {
  e.target;

  if (e.target.classList.contains("fa-trash")) {
    const producto = compraItems[e.target.dataset.id];
    producto.amount--;

    if (producto.amount === 0) {
      delete compraItems[e.target.dataset.id];
    }
    pintarSegundoCarrito();
    setCostosItems();
    costosItemStorage();
    segundaCompraStorage();
    pintarCostos();
  }

  e.stopPropagation();
};

// --- BARRA INDICADORA DE PASOS ---

const pasosBar = document.querySelector("#pasos-bar");

const pasosBarra = () => {
  switch (i) {
    case 0:
      pasosBar.textContent = "Paso 1: Selecciona tu Microprocesador";
      break;
    case 1:
      pasosBar.textContent = "Paso 2: Selecciona tu Cooler";
      break;
    case 2:
      pasosBar.textContent = "Paso 3: Selecciona tu Motherboard";
      break;
    case 3:
      pasosBar.textContent = "Paso 4: Selecciona tu Memoria RAM N° 1";
      break;
    case 4:
      pasosBar.textContent = "Paso 5: Selecciona tu Memoria RAM N° 2";
      break;
    case 5:
      pasosBar.textContent = "Paso 6: Selecciona tu Placa de Video";
      break;
    case 6:
      pasosBar.textContent = "Paso 7: Selecciona tu Disco";
      break;
    case 7:
      pasosBar.textContent = "Paso 8: Selecciona tu Fuente";
      break;
    case 8:
      pasosBar.textContent = "Paso 9: Selecciona tu Gabinete";
      break;
    case 9:
      pasosBar.textContent = "Felicitaciones, la PC ya casi es tuya!";
      break;
  }
};
