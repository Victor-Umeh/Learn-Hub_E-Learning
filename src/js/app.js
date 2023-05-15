`use strict`;
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 800,
  delay: 400,
});

const revealTop = {
  distance: "50%",
  origin: "top",
};
transiton: "ease-in-out";
const revealRight = {
  distance: "50%",
  origin: "right",
  intervaL: "600",
};
const revealImgRight = {
  delay: 600,
  distance: "0%",
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

ScrollReveal().reveal(".head__animation", revealImgRight);
ScrollReveal().reveal(".sect__head", revealImgRight);
ScrollReveal().reveal(".head__courses-animation", revealImgRight);
ScrollReveal().reveal(".courses__animation article", coursesTop);
