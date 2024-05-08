let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sginUpBtn = document.getElementById("btn-sign-up");

sginUpBtn.addEventListener("click", signUp);

function signUp(e) {
  e.preventDefault();
  if (username.value == "" || email.value == "" || password.value == "") {
    alert("Please fill out all fields!");
  } else {
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
