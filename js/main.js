document.addEventListener("DOMContentLoaded", () => {
  compraGet();
});

// -- localStorage -- traemos el carrito de la pagina "arma tu pc"
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
      templateCarrito.querySelectorAll("td")[0].textContent = producto.name;
      templateCarrito.querySelectorAll("td")[1].textContent = producto.amount;
      templateCarrito.querySelectorAll("td")[2].textContent =
        producto.amount * producto.price;

      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    }
  });
  listProducts.appendChild(fragment);

  pintarCostos();
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
