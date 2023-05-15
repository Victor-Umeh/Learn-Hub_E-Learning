`use strict`;
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 800,
  delay: 400,
});
const revealRight = {
  distance: "150%",
  origin: "top",
  delay: 200,
  //   transiton: "ease-in",
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

ScrollReveal().reveal(".head__animation", revealRight);
ScrollReveal().reveal(".sect__head", revealImgRight);
ScrollReveal().reveal(".head__courses-animation", revealImgRight);
ScrollReveal().reveal(".courses__animation article", coursesTop);
