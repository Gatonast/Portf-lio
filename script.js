const frases = [
  "Onde termina o caos, começa a criação.",
  "O futuro é tecido por quem sonha acordado.",
  "O impossível é apenas uma opinião.",
  "Crie, destrua, renasça.",
];

const elemento = document.querySelector(".frase-impacto");
let fraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let erroFeito = false;

function digitar() {
  const frase = frases[fraseIndex];
  let textoAtual = elemento.textContent;

  // Decide se deve errar
  if (!isDeleting && !erroFeito && Math.random() < 0.05 && charIndex > 2) {
    const letraErrada = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    elemento.textContent += letraErrada;
    erroFeito = true;
    setTimeout(() => {
      elemento.textContent = textoAtual;
      setTimeout(digitar, 60);
    }, 120);
    return;
  }

  if (!isDeleting) {
    elemento.textContent = frase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === frase.length) {
      isDeleting = true;
      erroFeito = false;
      setTimeout(digitar, 1000);
      return;
    }
  } else {
    elemento.textContent = frase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      fraseIndex = (fraseIndex + 1) % frases.length;
    }
  }

  // Velocidade com mais ritmo realista
  const delay = isDeleting
    ? Math.random() * 40 + 20
    : Math.random() * 80 + 30;

  erroFeito = false;
  setTimeout(digitar, delay);
}

document.addEventListener("DOMContentLoaded", digitar);

// Mostrar header e mudar cor de fundo ao rolar
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    hero.classList.add("scrolled");
    header.classList.add("show");
  } else {
    hero.classList.remove("scrolled");
    header.classList.remove("show");
  }
});

