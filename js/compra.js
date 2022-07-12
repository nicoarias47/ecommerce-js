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
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Gracias",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#ffb320",
    background: "linear-gradient(to top, #536976, #292e49)",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../index.html";
    }
  });
  deleteStorage();
});

const btnClear = document.querySelector("#btn-clear");

btnClear.addEventListener("click", () => {
  Swal.fire({
    title: `¿Estas seguro de vaciar tu carrito de compras?`,
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Gracias",
    showCancelButton: true,
    color: "#fff",
    background: "linear-gradient(to top, #536976, #292e49)",
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
