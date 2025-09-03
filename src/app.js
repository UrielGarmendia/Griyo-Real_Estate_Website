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
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // aplicar gradiente solo cuando el mouse está encima
  btn.style.backgroundImage = `
    radial-gradient(
      circle 100px at ${x}px ${y}px,
      #000 0%,
      transparent 80%
    )
  `;

  // cambiar color si pasa sobre las letras
  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (el === btn) {
    btn.style.color = "#000";
  } else {
    btn.style.color = "#fff";
  }
});

btn.addEventListener("mouseleave", () => {
  btn.style.backgroundImage = "none"; // reset
  btn.style.color = "#000"; // reset
});
