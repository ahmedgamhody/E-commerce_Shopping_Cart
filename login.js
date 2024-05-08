let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btn-login");

let localUser = localStorage.getItem("username");
let localPassword = localStorage.getItem("password");
btnLogin.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Please fill out all fields!");
  } else {
    if (
      localUser.trim() === username.value.trim() &&
      localPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("username or password is wrong!!");
    }
  }
}
