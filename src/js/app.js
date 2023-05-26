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
hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay?.addEventListener("click", () => {
  hamburger.classList.remove("toggle");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

navLinks?.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
  });
});


  // Get the timer display element
  const timerDisplay = document.getElementById('timer-display');

  // Retrieve the timer values from localStorage or initialize them to 0
  let hours = parseInt(localStorage.getItem('hours')) || 0;
  let minutes = parseInt(localStorage.getItem('minutes')) || 0;
  let seconds = parseInt(localStorage.getItem('seconds')) || 0;

  // Function to update the timer display
  function updateTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    // Format the time values with leading zeros
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Update the timer display
    timerDisplay.textContent = formattedTime;

    // Store the timer values in localStorage
    localStorage.setItem('hours', hours);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('seconds', seconds);
  }

  // Start the timer
  setInterval(updateTimer, 1000);

// Username and email
const storedUser = localStorage.getItem("data")
const user = JSON.parse(storedUser)
console.log(user.firstname)

document.addEventListener("DOMContentLoaded", function() {
  // Get the userName element
  const userNameElement = document.getElementById("userName");
  const profileFirstNmae = document.getElementById("profileFirstNmae")
  const profileLast = document.getElementById("lastName")
  const profileemail = document.getElementById("profileEmail")

  if (userNameElement) {
    userNameElement.innerHTML = user.firstname; 
    profileFirstNmae.innerHTML = user.firstname;
  }
  if (profileemail){
    profileemail.innerHTML = user.email
  }
  if (profileLast){
    profileLast.innerHTML = user.lastname
  }
});

function logOut(){
  localStorage.removeItem('data');
  window.location.href = 'index.html'
  console.log('heyyy')
}