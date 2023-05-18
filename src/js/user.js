let Name  = document.querySelector(".nameOfUser")
const storedUserName =localStorage.getItem("user")
Name = storedUserName
const parsedUserNmae =storedUserName ? JSON.parse(storedUserName):[]; 
const User  = parsedUserNmae.map((user)=>{
  return`<span class="nameOfUser"> ${User.firstname}</span>` 
}) 
console.log(Name)

const userHtml  = User.join("")


function loginOut(){
  window.location.href = "index.html"
}