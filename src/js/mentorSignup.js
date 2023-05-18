const firstname = document.getElementById("firstName")
const lastname = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("passcode")
const signUpforMentor = document.getElementById("mentorForm");

 function signUpMentor(){
  // event.preventDefault();
  const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password:password.value
  };
 fetch(`http://localhost:3000/mentor`,  {
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(user)
  }
  ).then().catch()
}
signUpforMentor.addEventListener("submit",(e)=>{
e.preventDefault();
signUpMentor()
console.log("signed up")

window.location.href = "login.html"

})
 

fetch('https://tosxin-456.github.io/learnHub-server/data.json')