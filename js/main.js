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
      id: 32,
      name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-2.jpg",
      precio: 5650,
    },
    {
      id: 33,
      name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
      img: "../img/componentes/ram/ram-3.jpg",
      precio: 7540,
    },
    // {
    //   id: 34,
    //   name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
    //   img: "../img/componentes/ram/ram-4.jpg",
    //   precio: 22655,
    // },
  ]),
  (ram2 = [
    {
      id: 30,
      name: "No incluir Segunda Memoria RAM",
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
      id: 32,
      name: "Memoria Ram PNY Performance 8GB 2666 Mhz DDR4",
      img: "../img/componentes/ram/ram-2.jpg",
      precio: 5650,
    },
    {
      id: 33,
      name: "Memoria Ram Adata Xpg SPECTRIX D60 RGB 8GB 3200 Mhz DDR4",
      img: "../img/componentes/ram/ram-3.jpg",
      precio: 7540,
    },
    // {
    //   id: 34,
    //   name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
    //   img: "../img/componentes/ram/ram-4.jpg",
    //   precio: 22655,
    // },
  ]),
  (video = [
    {
      id: 41,
      name: "No Incluir Placa de Video",
      img: "../img/componentes/placaVideo/noPlaca.svg",
      precio: 0,
    },
    {
      id: 42,
      name: "Placa de Video Asus Nvidia Geforce GTX 1650 OC 4GB GDDR6",
      img: "../img/componentes/placaVideo/video-2.jpg",
      precio: 49900,
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
      id: 54,
      name: "Disco Solido SSD 512GB Gigabyte M.2 NVMe PCIe x4 3.0",
      img: "../img/componentes/disco/disco-3.jpg",
      precio: 9850,
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
      id: 62,
      name: "Fuente 600W Thermaltake Smart 80 PLUS White",
      img: "../img/componentes/fuente/fuente-1.jpg",
      precio: 9239,
    },
    {
      id: 63,
      name: "Fuente 750W Gigabyte AORUS AP750GM 80 PLUS GOLD",
      img: "../img/componentes/fuente/fuente-2.jpg",
      precio: 23998,
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
  ]),
];

document.addEventListener("DOMContentLoaded", () => {
  pasosObtener();
  iconSet();
  compraGet();
  showProduct(array[i]);
});

// ----- SELECTORS -----
// - template cards -
const template = document.querySelector("#template").content;
const cards = document.querySelector("#items");
const fragment = document.createDocumentFragment();

//--- PINTAR CARDS ---
const showProduct = (array) => {
  array.forEach((el) => {
    template.querySelector("#cTitle").textContent = el.name;
    template.querySelector("#cText").textContent = el.precio;
    template.querySelector("#card-img").setAttribute("src", el.img);
    template.querySelector("#btn-compra").dataset.id = el.id;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
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

    if (i < 9) {
      showProduct(array[i]);
    }
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
  compra[producto.id] = { ...producto };
  pintarCarrito();
};

// ---- PASOS ----

let i = 0;

function removeCards() {
  let removeCard = document.querySelectorAll(".card");
  removeCard[0].remove();
  removeCard[1].remove();
  removeCard[2].remove();
  removeCard[3].remove();
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

// - Donde se pintaran nuestros costos
const carritoSubTotal = document.querySelector(".carrito-subTotal");
const carritoEnvio = document.querySelector(".carrito-envio");
const carritoIva = document.querySelector(".carrito-iva");
const carritoTotal = document.querySelector(".carrito-total");

const pintarCarrito = () => {
  listProducts.innerHTML = ""; // evitamos que recarge nuevamente los productos
  Object.values(compra).forEach((producto) => {
    if (producto.price > 0) {
      // evitamos que muestre los productos con precio > 0
      templateCarrito.querySelectorAll("td")[0].textContent = producto.id;
      templateCarrito.querySelectorAll("td")[1].textContent = producto.name;
      templateCarrito.querySelectorAll("td")[2].textContent = producto.amount;
      templateCarrito.querySelectorAll("td")[3].textContent =
        producto.amount * producto.price;

      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    }
  });
  listProducts.appendChild(fragment);

  pintarCostos();
  compraStorage();
  pasosStorage();
};

// --- PINTANDO LOS COSTOS ---
const pintarCostos = () => {
  const subTotal = Object.values(compra).reduce(
    (acc, { amount, price }) => acc + price * amount,
    0
  );

  carritoSubTotal.textContent = "$ " + subTotal;

  const iva = subTotal * 0.21;
  carritoIva.textContent = "$ " + Math.trunc(iva);

  let envio = 0;

  const mostrarEnvio = () => {
    if (total > 140000) {
      envio = 0;
    } else {
      envio = 800;
    }
  };

  const total = subTotal + iva + envio;
  carritoTotal.textContent = "$ " + total;

  mostrarEnvio();
  carritoEnvio.textContent = "$ " + envio;
};

// --- LOCAL STORAGE ---
const compraStorage = () => {
  localStorage.setItem("compra", JSON.stringify(compra));
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

const compraGet = () => {
  if (localStorage.getItem("compra")) {
    compra = JSON.parse(localStorage.getItem("compra"));
    pintarCarrito();
  }
};

// --guardamos let i para guardar pasos

const pasosStorage = () => {
  localStorage.setItem("pasos", JSON.stringify(i));
};

const pasosObtener = () => {
  if (localStorage.getItem("pasos")) {
    if (i < 7) {
      i = JSON.parse(localStorage.getItem("pasos")) + 1;
    } else {
      i = JSON.parse(localStorage.getItem("pasos"));
    }
  }
};
