const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const button = document.getElementById("buton");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const mentorRadio = document.getElementById("mentor");
  const studentRadio = document.getElementById("student");

  if (mentorRadio.checked && userEmail.value && userPassword.value) {
    mentorLogin();
  } else if (studentRadio.checked && userEmail.value && userPassword.value) {
    studentLogin();
  }
  else if(!studentRadio.checked && !mentorRadio.checked){
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '-30px';
    errorMessage.textContent = "Cant log without user-type";
  }
});

function mentorLogin() {
  button.addEventListener("click", async (e) => {
    console.log({ userEmail: userEmail.value, userPassword: userPassword.value }); // Log userEmail and userPassword values
    e.preventDefault();
    try {
      const response = await fetch("https://learnhub-y2uf.onrender.com/mentor/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail.value,
          password: userPassword.value,
        }),
      });
      const data = await response.json();
      console.log(data);

      if (data.email === userEmail.value ) {
        localStorage.setItem("data", JSON.stringify(data))
        window.location.href = "dashboard.html";
        console.log(data)
      } else {
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '-30px';
        errorMessage.textContent = "Wrong password, retry after correcting";
      }
    } catch (error) {
      console.log(error);
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '-30px';
      errorMessage.textContent = "Wrong login details, retry after correcting";
    }
  });
}

function studentLogin() {
  button.addEventListener("click", async (e) => {
    console.log({ userEmail: userEmail.value, userPassword: userPassword.value }); // Log userEmail and userPassword values
    e.preventDefault();
    try {
      const response = await fetch("https://learnhub-y2uf.onrender.com/student/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail.value,
          password: userPassword.value,
        }),
      });
      const data = await response.json();
      console.log(data);

      if (data.email === userEmail.value ) {
        localStorage.setItem("data", JSON.stringify(data))
        window.location.href = "user.html";
        console.log(data)
      } else {
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '-30px';
        errorMessage.textContent = "Wrong password, retry after correcting";
      }
    } catch (error) {
      console.log(error);
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '-30px';
      errorMessage.textContent = "Wrong login details, retry after correcting";
    }
  });
}
