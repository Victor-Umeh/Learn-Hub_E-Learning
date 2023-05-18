`use strict`;
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".desktop__nav--wrapper");
const navLinks = document.querySelectorAll(".Desktop__nav--icons");
const overlay = document.querySelector(".overlay");

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 800,
  delay: 400,
});
const revealRight = {
  distance: "150%",
  origin: "top",
  delay: 200,
};
const revealImgRight = {
  delay: 600,
  distance: "0%",
  origin: "top",
  opacity: 0,
  easing: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
};
const coursesTop = {
  delay: 1400,
  origin: "top",
  distance: "5%",
  opacity: 0,
  interval: 400,
};
ScrollReveal().reveal(".head__animation", revealRight);
ScrollReveal().reveal(".sect__head", revealImgRight);
ScrollReveal().reveal(".head__courses-animation", revealImgRight);
ScrollReveal().reveal(".courses__animation article", coursesTop);
ScrollReveal().reveal(".header__user", revealRight);

//----------------HAMBURGER---------------
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("toggle");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

navLinks.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
  });
});
