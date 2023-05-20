//for login details
const email = document.getElementById('email')
const password = document.getElementById("password")
const form = document.getElementById("form")
const mentorLogin = document.getElementById("mentor")
const studentLogin = document.getElementById("student")
const username = document.getElementById('userName')
//for signup

async function onStudentLogin(event){
  event.preventDefault();
const response = await fetch(`https://learnhub-y2uf.onrender.com/users/login?email=${email.value}&password=${password.value}`,
{method:"GET"}
);
const user = await response.json();
.console.log('user');
if (user.length>0){
  localStorage.setItem((user),JSON.stringify(user))
  console.log("simp")
  window.location.href = "user.html"
}else if(user.length<0){ 
  console.log("incorrect details")
  const errorMessage = document.getElementById('errorMessage');
errorMessage.style.color = 'red';
errorMessage.style.marginLeft = '80px' 
errorMessage.textContent = "wrong login details"
}
}
form.addEventListener("submit",onStudentLogin,true)

async function onMentorLogin(event){
  event.preventDefault();
const response = await fetch(`https://learnhub-y2uf.onrender.com/users/login?email=${email.value}&password=${password.value}`,
{method:"GET"}
);
const user = await response.json();
if (user.length>0){
  localStorage.setItem((user),JSON.stringify(user))
  console.log(user)
  username.innerHTML = user.firstname
  window.location.href = "dashboard.html"
}else if(user.length<=0){ 
  console.log("incorrect details")
  const errorMessage = document.getElementById('errorMessage');
errorMessage.style.color = 'red';
errorMessage.style.marginLeft = '80px' 
errorMessage.textContent = "wrong login details"
}
}
form.addEventListener("submit",onMentorLogin,true)

// console.log("ahhhh")
