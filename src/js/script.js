"use strict";
const input = document.querySelector("#upload");
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

// Get the file input element
console.log(input);
// Add an event listener to the input
input.addEventListener("change", function (event) {
  // Get the selected file
  const file = event.target.files[0];
  console.log(file);
  // Check if the file is an image
  if (file && file.type.startsWith("image")) {
    // Create a FileReader object
    const reader = new FileReader();

    // Set up the FileReader onload function
    reader.onload = function (e) {
      // Create an image element
      const img = document.createElement("img");

      // Set the source of the image element to the data URL
      img.className = "preview__image";
      img.src = e.target.result;

      console.log(img);
      // Append the image element to the preview container
      const preview = document.getElementById("imagePreview");
      preview.innerHTML = "";
      preview.appendChild(img);
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
});
