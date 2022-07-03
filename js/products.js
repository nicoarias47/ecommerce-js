// OBJETOS;

const array = [
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

  // --- cooler ---

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

  // motherboard
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
  // ram
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
  {
    id: 34,
    name: "Memoria Ram Adata Xpg Spectrix D50 RGB 32GB 3200 Mhz DDR4 Grey",
    img: "../img/componentes/ram/ram-4.jpg",
    precio: 22655,
  },
  // video
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
  // disco
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
  //fuente
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
  //gabinetes
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
    newArray = array;
    newArray.sort((a, b) => Math.random() - 0.5);
    showProduct(newArray);
  });
};

const filtroMicro = () => {
  document.querySelector("#filtro-micro").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Micro"));
    showProduct(newArray);
  });
};

const filtroCooler = () => {
  document.querySelector("#filtro-cooler").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Cooler"));
    showProduct(newArray);
  });
};

const filtroMother = () => {
  document.querySelector("#filtro-mother").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Mother"));
    showProduct(newArray);
  });
};

const filtroRam = () => {
  document.querySelector("#filtro-ram").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Ram"));
    showProduct(newArray);
  });
};

const filtroVideo = () => {
  document.querySelector("#filtro-video").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Video"));
    showProduct(newArray);
  });
};
const filtroDisco = () => {
  document.querySelector("#filtro-disco").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Disco"));
    showProduct(newArray);
  });
};

const filtroFuente = () => {
  document.querySelector("#filtro-fuente").addEventListener("click", () => {
    removeCards();
    newArray = array;
    newArray = array.filter((array) => array.name.includes("Fuente"));
    showProduct(newArray);
  });
};

const filtroGabinete = () => {
  document.querySelector("#filtro-gabinete").addEventListener("click", () => {
    removeCards();
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

const deleteAll = () => {
  const deleteAll = document.querySelector("#delete-all");

  deleteAll.addEventListener("click", () => {
    compraItems = {};
    compra = {};
    localStorage.clear();

    pintarSegundoCarrito();

    pintarCarrito();

    location.reload();
  });
};

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
deleteAll();
