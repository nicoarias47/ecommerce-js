const deleteStorage = () => {
  localStorage.clear();
};

const btnCompra = document.querySelector("#btn-comprar");
const form = document.querySelector("#formulario");

const DateTime = luxon.DateTime;

const now = DateTime.now();
const llegada = DateTime.fromObject({ day: now.day + 10 });

form.addEventListener("submit", (e) => {
  const name = document.querySelector("#validationDefault01").value;
  const lastName = document.querySelector("#validationDefault02").value;
  e.preventDefault();
  e.stopPropagation();
  Swal.fire({
    title: `Gracias por confiar en HYPE! ${name} ${lastName}`,
    html: `<span class="sweet-fechas">Fecha actual: ${now.toLocaleString()}</span>
          <span class="sweet-fechas pt-2">Te enviamos un correo electronico con el detalle de tu compra y otras indicaciones.</span>
          <span class="sweet-fechas pt-3">Fecha de entrega aproximada: ${llegada.toLocaleString()}</span>`,
    color: "#fff",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#ffb320",
    imageUrl: "../img/logo.png",
    imageAlt: "HYPE LOGO",
    imageWidth: 150,
    imageHeight: 80,
    background: "#1f2225",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../index.html";
    }
  });
  setTimeout(() => (window.location.href = "../index.html"), 15000);
  deleteStorage();
});

// --- btn: vaciar carrito ---
const btnClear = document.querySelector("#btn-clear");

btnClear.addEventListener("click", () => {
  Swal.fire({
    title: `¿Estas seguro de vaciar tu carrito de compras?`,
    imageUrl: "../img/logo.png",
    imageAlt: "HYPE LOGO",
    imageWidth: 150,
    imageHeight: 80,
    background: "#1f2225",
    showCancelButton: true,
    color: "#fff",
    confirmButtonColor: "#ffb320",
    cancelButtonColor: "#ff205f",
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteStorage();
      window.location.href = "../index.html";
    }
  });
});
