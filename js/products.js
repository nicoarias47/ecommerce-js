// OBJETOS

const array = [
  // ---  microprocesador ---
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

  // --- cooler ---

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
    name: "CPU Watercooler 360MM Corsair 3X Cooler BLACK",
    img: "../img/componentes/cooler/cooler-7.jpg",
    precio: 51578,
  },

  //MOTHERBOARD

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
  //RAM
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
  // Placas de video
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
  // DISCOS
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
  // FUENTES
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

  // GABINETES
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
];

document.addEventListener("DOMContentLoaded", () => {
  compraGet();
  segundaCompraGet();
  costosArmarPcStorageGet();
  showProduct(newArray);
});

// -- localStorage -- traemos el carrito de arma tu pc del localStorage
let compra = {};
const compraGet = () => {
  if (localStorage.getItem("compra")) {
    compra = JSON.parse(localStorage.getItem("compra"));
    pintarCarrito();
  }
};

// --- PINTAR CARRITO ---

// - Templates carrito -
const templateCarrito = document.querySelector("#template-carrito").content;
const fragment = document.createDocumentFragment();

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

  setCostosItems();
};

// - template cards -
const template = document.querySelector("#template").content;
const cards = document.querySelector("#items");

//--- PINTAR CARDS ---

const showProduct = (array) => {
  array.forEach((el) => {
    if (el.precio > 0) {
      template.querySelector("#cTitle").textContent = el.name;
      template.querySelector("#cText").textContent = el.precio;
      template.querySelector("#card-img").setAttribute("src", el.img);
      template.querySelector("#btn-compra").dataset.id = el.id;
      const clone = template.cloneNode(true);
      fragment.appendChild(clone);
    }
  });
  cards.appendChild(fragment);
};

// -- Eliminar cards (para poder ordenar) --
function removeCards() {
  let cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    document.querySelector(".card").remove();
  }
}

//--- ORDENANDO PRODUCTOS ---

let newArray = array;

const mayorPrecio = () => {
  document.querySelector("#mayorPrecio").addEventListener("click", () => {
    removeCards();
    removeCardsRow(); // con esto eliminamos las cards en vista de rows

    newArray.sort(function (a, b) {
      if (a.precio < b.precio) {
        return 1;
      }
      if (a.precio > b.precio) {
        return -1;
      }

      return 0;
    });

    showProduct(newArray);
  });
};

const menorPrecio = () => {
  document.querySelector("#menorPrecio").addEventListener("click", () => {
    removeCards();
    removeCardsRow();

    newArray.sort(function (a, b) {
      if (a.precio > b.precio) {
        return 1;
      }
      if (a.precio < b.precio) {
        return -1;
      }

      return 0;
    });

    showProduct(newArray);
  });
};

const filtroTodos = () => {
  document.querySelector("#filtro-todos").addEventListener("click", () => {
    removeCards();
    removeCardsRow(); // con esto eliminamos las cards en vista de rows
    newArray = array;
    newArray.sort((a, b) => Math.random() - 0.5);
    showProduct(newArray);
  });
};

const filtroMicro = () => {
  document.querySelector("#filtro-micro").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Micro"));
    showProduct(newArray);
  });
};

const filtroCooler = () => {
  document.querySelector("#filtro-cooler").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Cooler"));
    showProduct(newArray);
  });
};

const filtroMother = () => {
  document.querySelector("#filtro-mother").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Mother"));
    showProduct(newArray);
  });
};

const filtroRam = () => {
  document.querySelector("#filtro-ram").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Ram"));
    showProduct(newArray);
  });
};

const filtroVideo = () => {
  document.querySelector("#filtro-video").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Video"));
    showProduct(newArray);
  });
};
const filtroDisco = () => {
  document.querySelector("#filtro-disco").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Disco"));
    showProduct(newArray);
  });
};

const filtroFuente = () => {
  document.querySelector("#filtro-fuente").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Fuente"));
    showProduct(newArray);
  });
};

const filtroGabinete = () => {
  document.querySelector("#filtro-gabinete").addEventListener("click", () => {
    removeCards();
    removeCardsRow();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Gabinete"));
    showProduct(newArray);
  });
};

//--- SELECCION DE PRODUCTOS ---

let compraItems = {};

// --- AGREGAR AL CARRITO ---
cards.addEventListener("click", (e) => {
  addCarrito(e);
});

const addCarrito = (e) => {
  if (e.target.classList.contains("btn-primary")) {
    setCarrito(e.target.parentElement);
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

  if (compraItems.hasOwnProperty(producto.id)) {
    producto.amount = compraItems[producto.id].amount + 1;
  }

  compraItems[producto.id] = { ...producto };
  pintarSegundoCarrito();
  // Toastyfy
  if (producto.price > 0) {
    Toastify({
      text: `añadiste al carrito: ${producto.name}
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

// --- PINTAR SEGUNDO CARRITO --- (de productos individuales)

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

  segundaCompraStorage();
  setCostosItems();
  costosItemStorage();
  pintarCostos();
};

// --- Pintamos los costos del segundo carrito --

let costosItems = {
  total: 0,
  subTotal: 0,
  iva: 0,
  envio: 0,
};

let costosPc = {
  total: 0,
  subTotal: 0,
  iva: 0,
  envio: 0,
};

// --- Enviamos los costos al local storage ---
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

// -- storage de costos por items --
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

// -- recuperamos los costos de arma tu pc --
const costosArmarPcStorageGet = () => {
  if (localStorage.getItem("costos pc")) {
    costosPc = JSON.parse(localStorage.getItem("costos pc"));
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

// --- LOCALSTORAGE 2DO CARRITO ("PRODUCTOS")---
const segundaCompraStorage = () => {
  localStorage.setItem("productos", JSON.stringify(compraItems));
};

const segundaCompraGet = () => {
  if (localStorage.getItem("productos")) {
    compraItems = JSON.parse(localStorage.getItem("productos"));
    pintarSegundoCarrito();
  }
};

// --- Eliminar productos del carrito ---

const deleteAllBtn = document.querySelector("#delete-all");
const deleteAll = () => {
  compraItems = {};
  compra = {};
  localStorage.clear();

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
    segundaCompraStorage();
    pintarSegundoCarrito();
  }

  e.stopPropagation();
};

// --- BUSCADOR DE ITEMS ---

const formulario = document.querySelector("#buscador");

const buscar = () => {
  cards.innerHTML = "";

  const texto = formulario.value.toLowerCase();

  for (let producto of newArray) {
    let nombre = producto.name.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      // con los if de abajo creamos cards nuevas dependiendo de la vista (row o col)

      if (btnCol.classList.contains("btn-background") && producto.precio > 0) {
        cards.innerHTML += `
      <div class="card"  id="card-remove">
        <img src="${producto.img}" class="card-img-top" id="card-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="cTitle">${producto.name}</h5>
          <p class="card-text" id="cText">${producto.precio}</p>
           <button class="btn btn-primary" id="btn-compra">Comprar</button>
        </div>
      </div>
      `;
      }
      if (btnRow.classList.contains("btn-background") && producto.precio > 0) {
        cards.innerHTML += `
      <div class="card-row"  id="card-remove">
        <img src="${producto.img}" class="card-img-top" id="card-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="cTitle">${producto.name}</h5>
          <p class="card-text" id="cText">${producto.precio}</p>
           <button class="btn btn-primary" id="btn-compra">Comprar</button>
        </div>
      </div>
      `;
      }
    }
    //Solucionar: se bugea
    // if (!cards.classList.contains("card")) {
    //   cards.innerHTML = `<h2 class="noSearch">No se han encontrado coincidencias</h2>`;
    // }
  }
};

formulario.addEventListener("input", buscar, removeCards);

// --- cards direccion (col - row) ---

const btnRow = document.getElementById("btn-row");
const btnCol = document.getElementById("btn-col");

const cardId = template.querySelector("#card-remove");

const cardRow = () => {
  cardId.classList.remove("card");
  cardId.classList.add("card-row");
  cards.classList.add("flex-column");
};

const cardColumn = () => {
  cardId.classList.remove("card-row");
  cards.classList.remove("flex-column");
  cardId.classList.add("card");
};

// primero eliminamos todas las cards con class .card-row
const removeCardsRow = () => {
  let cards = document.querySelectorAll(".card-row");
  for (let i = 0; i < cards.length; i++) {
    document.querySelector(".card-row").remove();
  }
};

btnCol.addEventListener("click", () => {
  removeCardsRow();
  cardColumn();
  showProduct(newArray);
  btnActive();
});

btnRow.addEventListener("click", () => {
  removeCards();
  cardRow();
  showProduct(newArray);
  btnActive();
});

// -- background de btn orden (col, row) --
const btnActive = () => {
  if (cardId.classList.contains("card")) {
    btnCol.classList.add("btn-background");
    document.querySelector("#btn-col-icon").style.color = "#03cc90";
  } else {
    btnCol.classList.remove("btn-background");
    document.querySelector("#btn-col-icon").style.color = "#353849";
  }

  if (cardId.classList.contains("card-row")) {
    btnRow.classList.add("btn-background");
    document.querySelector("#btn-row-icon").style.color = "#03cc90";
  } else {
    btnRow.classList.remove("btn-background");
    document.querySelector("#btn-row-icon").style.color = "#353849";
  }
};

// --- BTN: FINALIZAR COMPRA ---

const finish = document.querySelector("#finish-buy");

finish.addEventListener("click", () => {
  Swal.fire({
    title: "¿Seguro que no quieres algo mas?",
    imageUrl: "../img/conejo-fin.jpg",
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: "Conejo",
    showCancelButton: true,
    confirmButtonColor: "#03cc90",
    cancelButtonColor: "#232734",
    confirmButtonText: "Finalizar compra",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../pages/compra.html";
    }
  });
});

btnActive();
filtroTodos();
filtroMicro();
filtroCooler();
filtroMother();
filtroRam();
filtroVideo();
filtroDisco();
filtroFuente();
filtroGabinete();
mayorPrecio();
menorPrecio();
