const timer = document.querySelector(".watch .timer");
// alert("Your timer will automatically start");

let seconds = 0;
let interval = setInterval(time, 1000);

function time() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
}
  timer.textContent = `${hrs}:${min}:${secs}`;
  
  // Save the timer value to localStorage
//   localStorage.setItem("timerValue", seconds.toString());
// }

// Load the timer value from localStorage on page load
// window.addEventListener("load", () => {
//   timer.textContent = formatTime(seconds);
// });

// // Helper function to format the time
// function formatTime(seconds) {
//   let hrs = Math.floor(seconds / 3600);
//   let min = Math.floor((seconds - hrs * 3600) / 60);
//   let secs = seconds % 60;
//   if (hrs < 10) {
//     hrs = "0" + hrs;
//   }
//   if (min < 10) {
//     min = "0" + min;
//   }
//   if (secs < 10) {
//     secs = "0" + secs;
//   }
//   return `${hrs}:${min}:${secs}`;
// }

