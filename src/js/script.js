"use strict";
// const input = document.querySelector("#upload");
let sideBar = document.getElementById("modal");
let signUpBtn = document.getElementById("signBtn");
let closed = document.getElementById("close");
function options() {
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "block";
  }
}


