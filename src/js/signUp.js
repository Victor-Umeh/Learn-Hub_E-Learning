const firstname = document.getElementById("fname")
const lastname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("pword")
const signUpForm = document.getElementById("formForSignUp");
const btn = document.getElementById('btn')

function signUpStudent(e) {
  e.preventDefault()
  console.log(firstname.value, lastname.value, email.value, password.value  )
  console.log('hii ')
  const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  };
  fetch(`https://learnhub-y2uf.onrender.com/users/register`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(user)
  }
  ).then(res => res.json())
    .then(data => {
      console.log(data)
      window.location.href = "login.html"
    }
    )
    .catch(err => console.log(err))
}
btn.addEventListener("click", signUpStudent);