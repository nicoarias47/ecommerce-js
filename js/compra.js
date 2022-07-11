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
          <span class="sweet-fechas">Tu compra llegara aprox: ${llegada.toLocaleString()}</span>`,
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Gracias",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#ffb320",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../index.html";
    }
  });
  deleteStorage();
});
