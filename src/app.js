/* CONSTANTES */
const hero = document.querySelector(".hero");
const bars = document.querySelectorAll(".progress-bar");
const progressContainer = document.getElementById("progress-container");
const btn = document.getElementById("btn-about");
const filtro = document.getElementById("filtro");
const placeholder = filtro.querySelector('option[value=""]');
const filterBtn = document.getElementById("filter-btn");
const filterContainer = document.querySelector(".filter-container");
const filterDropdown = document.querySelector(".filter-dropdown");
const filterOptions = document.querySelectorAll(".filter-option");
const filtroSelect = document.getElementById("filtro");

/*         ANIMACION DE CARRUSEL         */

const images = [
  "url('../public/assets/media/fondo-casa-1.webp')",
  "url('../public/assets/media/fondo-casa-2.webp')",
  "url('../public/assets/media/fondo-casa-3.webp')",
  "url('../public/assets/media/fondo-casa-4.webp')",
];

let index = 0;

function changeSlide() {
  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), ${images[index]}`;

  bars.forEach((bar) => bar.classList.remove("active"));
  bars[index].classList.add("active");

  index = (index + 1) % images.length;
}

changeSlide();
setInterval(changeSlide, 6000);

/*     ANIMACION DE BOTON          */

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
  btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
});

/*    ANIMACIONES DE LA BARRA DE BUSQUEDA     */

filterBtn.addEventListener("click", function (e) {
  e.preventDefault();
  filterContainer.classList.toggle("expanded");
});

document.addEventListener("click", function (e) {
  if (!filterContainer.contains(e.target)) {
    filterContainer.classList.remove("expanded");
  }
});

filterOptions.forEach((option) => {
  option.addEventListener("click", function () {
    filterOptions.forEach((opt) => opt.classList.remove("selected"));

    this.classList.add("selected");

    const value = this.dataset.value;
    filtroSelect.value = value;

    filterContainer.classList.remove("expanded");

    console.log("Filtro seleccionado:", this.textContent, "Valor:", value);
  });
});

filtro.addEventListener("focus", () => {
  if (placeholder) placeholder.style.display = "none";
});
filtro.addEventListener("blur", () => {
  if (placeholder) placeholder.style.display = "";
});
