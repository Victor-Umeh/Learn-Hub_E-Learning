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
  localStorage.clear()
  localStorage.removeItem('data');
  window.location.href = 'index.html'

}
console.log(user.last)

const logOUT = document.querySelector(".profile__icon")

logOUT = addEventListener("click",)