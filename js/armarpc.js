// JS CORRESPONDIENTE AL HTML ARMA TU PC

import { pedirProduct } from "./getData.js";

document.addEventListener("DOMContentLoaded", () => {
  stopGet();
  pasosObtener();
  iconSet();
  compraGet();
  segundaCompraGet();
  costosItemGet();
  pintarCostos();
  showProduct(i);
});

// ----- SELECTORS -----
// - template cards -
const template = document.querySelector("#template").content;
const cards = document.querySelector("#items");
const fragment = document.createDocumentFragment();

//--- PINTAR CARDS ---
const showProduct = async (i) => {
  const array = await pedirProduct();

  if (i < array.length) {
    array[i].forEach((el) => {
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

    i < 9 && showProduct(i); // si pasos es -9 recargamos el siguiente paso
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
        backgroundImage: "url(../img/pattern.png)",
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
  contar();
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
    contar();
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
  localStorage.clear();

  location.reload();
};

// --- SWEET ALERT: delete all---

deleteAllBtn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Esta seguro de vaciar el carrito?",
    text: "¡No podrás revertir esto!",
    color: "#fff",
    imageUrl: "../img/logo.png",
    imageWidth: 150,
    imageHeight: 80,
    imageAlt: "HYPE LOGO",
    showCancelButton: true,
    confirmButtonColor: "#ffb320",
    cancelButtonColor: "#ff205f",
    confirmButtonText: "Si, Vaciar",
    cancelButtonText: "Cancelar",
    background: "#1f2225",
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
  contar();
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
      cards.innerHTML = ` <div class="ultimoPaso">
        <h2 class="ultimoPaso-title">
          Sabemos que eres un poco ansioso, pero antes de finalizar tu
          compra, ¿te gustaria comprar algo mas ?
        </h2>
        <img
          src="../img/conejo-fin.jpg"
          alt=""
          class="ultimoPaso-img mx-auto"
        />
        <button class="ultimoPaso-btn" id="seguir-comprando">
          Seguir comprando
        </button>
        <button class="ultimoPaso-btn btn-finalizar" id="fin" data-bs-toggle="offcanvas"
        data-bs-target="#demo">
          Finalizar compra
        </button>
        <button class="ultimoPaso-btn btn-reiniciar" id="reiniciar">
          Reiniciar
        </button>
      </div> `;

      // --- BTNS: ULTIMO PASO ---
      const seguir = document.querySelector("#seguir-comprando");
      const reiniciar = document.querySelector("#reiniciar");

      seguir.addEventListener("click", () => {
        window.location.href = "./productos.html";
      });

      reiniciar.addEventListener("click", () => {
        localStorage.removeItem("stop");
        localStorage.removeItem("compra");
        localStorage.removeItem("pasos");
        localStorage.removeItem("costos pc");
        localStorage.removeItem("imgMicro");
        localStorage.removeItem("imgMicro");
        localStorage.removeItem("nameMicro");
        localStorage.removeItem("nameMicro");
        localStorage.removeItem("imgCooler");
        localStorage.removeItem("nameCooler");
        localStorage.removeItem("imgMother");
        localStorage.removeItem("nameMother");
        localStorage.removeItem("imgRam1");
        localStorage.removeItem("nameRam1");
        localStorage.removeItem("imgRam2");
        localStorage.removeItem("nameRam2");
        localStorage.removeItem("imgVideo");
        localStorage.removeItem("nameVideo");
        localStorage.removeItem("imgDisco");
        localStorage.removeItem("nameDisco");
        localStorage.removeItem("imgFuente");
        localStorage.removeItem("nameFuente");
        localStorage.removeItem("imgGabinete");
        localStorage.removeItem("nameGabinete");
        location.reload();
      });
      break;
  }
};

// --- BTN: FINALIZAR COMPRA (sweet alert)---

const finish = document.querySelector("#finish-buy");

finish.addEventListener("click", () => {
  if (
    !localStorage.getItem("costos pc") &&
    !localStorage.getItem("costosItems")
  ) {
    Swal.fire({
      text: "No has agregado productos a tu carro de compras",
      confirmButtonColor: "#ffb320",
      color: "#fff",
      confirmButtonText: "Continuar",
      imageUrl: "../img/logo.png",
      imageAlt: "HYPE LOGO",
      imageWidth: 150,
      imageHeight: 80,
      background: "#1f2225",
    });
  }
  if (
    localStorage.getItem("costos pc") ||
    localStorage.getItem("costosItems")
  ) {
    window.location.href = "../pages/compra.html";
  }
});

// --- pintar contador en carrito ---

export const contar = () => {
  const contador = document.querySelector("#contador");
  let cuenta = 0;

  for (let i in compraItems) {
    cuenta += compraItems[i].amount;
  }
  for (let i in compra) {
    cuenta += compra[i].amount;
  }

  contador.textContent = cuenta;
};

contar();

// --- BTN BACK TO TOP ---

const btnTop = document.querySelector("#myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

btnTop.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
