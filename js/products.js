// importamos los productos desde el json
import { pedirProduct } from "./getData.js";
const jsonProducts = await pedirProduct();

// --- filtramos los niveles del array ---
const setArray = () => {
  const newArr = [];
  jsonProducts.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      newArr.push(e[i]);
    }
  });

  return newArr;
};

// --- Limpiamos los productos duplicados ---

const filtrarDuplicados = (arr) => {
  const productoDuplicado = arr.map((array) => {
    return [array.name, array];
  });

  return [...new Map(productoDuplicado).values()];
};

// --- Seteamos los dos array que usaremos ---

const array = filtrarDuplicados(setArray());
let newArray = array;

// -- DOMcontentload ---

document.addEventListener("DOMContentLoaded", () => {});

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
showProduct(newArray);

//--- ORDENANDO PRODUCTOS ---

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
      text: `Añadiste: ${producto.name}
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
  contar();
};

// -- storage de costos por items --
const costosItemStorage = () => {
  localStorage.setItem("costosItems", JSON.stringify(costosItems));
  costosItemGet();
  contar();
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
    contar();
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
  localStorage.clear();
  location.reload();
};

// --- SWEET ALERT: delete all---

deleteAllBtn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Esta seguro de vaciar el carrito?",
    text: "¡No podrás revertir esto!",
    color: "#fff",
    imageUrl: "../img/conejo.png",
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: "Conejo enojado",
    showCancelButton: true,
    confirmButtonColor: "#ffb320",
    cancelButtonColor: "#ff205f",
    confirmButtonText: "Si, Vaciar",
    cancelButtonText: "Cancelar",
    background: "linear-gradient(to top, #536976, #292e49)",
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
  contar();
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
    document.querySelector("#btn-col-icon").style.color = "#ffb320";
  } else {
    btnCol.classList.remove("btn-background");
    document.querySelector("#btn-col-icon").style.color = "#d6dee7";
  }

  if (cardId.classList.contains("card-row")) {
    btnRow.classList.add("btn-background");
    document.querySelector("#btn-row-icon").style.color = "#ffb320";
  } else {
    btnRow.classList.remove("btn-background");
    document.querySelector("#btn-row-icon").style.color = "#d6dee7";
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
      background: "linear-gradient(to top, #536976, #292e49)",
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

// --- pintar links: filtros ---
const panelFiltros = document.querySelector("#filtros");

panelFiltros.addEventListener("click", (e) => {
  print(e);
});

const print = (e) => {
  if (e.target.classList.contains("productos-link")) {
    const text = e.target;
    const target = e.target.dataset.id;
    // eliminamos el color del filtro por precio
    const removePrice = () => {
      document.querySelector("#mayorPrecio").style.color = "#252525";
      document.querySelector("#menorPrecio").style.color = "#252525";
    };
    //eliminamos el color de todos los filtros
    const all = document.querySelectorAll(".productos-link");
    const removeAll = () => {
      all.forEach((el) => {
        el.style.color = "#252525";
      });
    };
    // eliminamos el color de los filtros por productos
    const products = document.querySelectorAll(".filters");
    const removeProducts = () => {
      products.forEach((el) => {
        el.style.color = "#252525";
      });
    };

    switch (target) {
      case "1":
        removePrice();
        text.style.color = "#ffb320";
        break;
      case "2":
        removePrice();
        text.style.color = "#ffb320";
        break;
      case "3":
        removeAll();
        text.style.color = "#ffb320";
        break;
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
      case "11":
        removeProducts();
        text.style.color = "#ffb320";
        break;
    }
  }

  e.stopPropagation();
};

contar();
segundaCompraGet();
compraGet();
costosArmarPcStorageGet();
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
