const firstname = document.getElementById("firstName")
const lastname = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("passcode")
const btn = document.getElementById('butn')

function signUpStudent(e) {
  e.preventDefault()
  // console.log(firstname.value, lastname.value, email.value, password.value  )
  console.log('hii ')
  const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  };
  fetch(`https://learnhub-y2uf.onrender.com/mentor/register`, {
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