const firstname = document.getElementById("fname")
const lastname = document.getElementById("lname")
const email = document.getElementById("mail")
const password = document.getElementById("pword")
const signUpForm = document.getElementById("formForSignUp");

 function signUpStudent(){
  // event.preventDefault();
  const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password:password.value
  };
 fetch(`http://localhost:3000/user`,  {
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(user)
  }
  ).then().catch()
}
signUpForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  signUpStudent()
  window.location.href = "login.html"
});