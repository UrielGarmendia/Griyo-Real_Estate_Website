/* CONSTANTES */
const hero = document.querySelector(".hero");
const bars = document.querySelectorAll(".progress-bar");
const progressContainer = document.getElementById("progress-container");
const btn = document.getElementById("btn-about");

/*         ANIMACION DE CARRUSEL         */

const images = [
  "url('../public/assets/media/fondo-casa-1.webp')",
  "url('../public/assets/media/fondo-casa-2.webp')",
];

let index = 0;

function changeSlide() {
  // cambiar imagen de fondo
  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), ${images[index]}`;

  // resetear progres bars
  bars.forEach((bar) => bar.classList.remove("active"));
  bars[index].classList.add("active");

  // avanzar al siguiente
  index = (index + 1) % images.length;
}

// inicializar
changeSlide();
setInterval(changeSlide, 8000); // cambiar los segundos a la par que en la animacion del css

/*     ANIMACION DE BOTON          */

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
  btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
});
