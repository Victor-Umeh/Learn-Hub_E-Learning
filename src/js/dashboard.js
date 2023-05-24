
const storedUser = localStorage.getItem("data")
const user = JSON.parse(storedUser)
// const userNma = document.querySelector(".header .span")
console.log(user.firstname)
// userNma.innerHTML = user.firstname


document.addEventListener("DOMContentLoaded", function() {
  // Get the userName element
  const userNameElement = document.getElementById("userName");

  if (userNameElement) {
    userNameElement.innerHTML = user.firstname; 
  }
});

function logout(){
  localStorage.removeItem('data');
  window.location.href = 'index.html'

}


