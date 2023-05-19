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
  ).then(res => res.json())
  .then(data => {console.log(data)
  window.location.href = "login.html"}
)
  .catch(err => console.log(err))
}
signUpforMentor.addEventListener("submit",(e)=>{
e.preventDefault();
signUpMentor()
console.log("signed up")


})
 

fetch('https://tosxin-456.github.io/learnHub-server/data.json')