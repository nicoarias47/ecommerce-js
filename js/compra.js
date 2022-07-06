const btnCompra = document.querySelector("#btn-comprar");

btnCompra.addEventListener("submit", () => {
  if (btnCompra.willValidate) {
    window.location.href = "../pages/armatupc.html";
  }
});
