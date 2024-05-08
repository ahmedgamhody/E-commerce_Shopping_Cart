let containerProdects = document.getElementById("prodects");
let userArea = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");
let btnLogOut = document.getElementById("logOut");
let user = localStorage.getItem("username");
let messNoPro = document.getElementById("noPro");
////////////
if (user) {
  links.remove();
  userInfo.style.display = "flex";
  userArea.innerHTML = user;
}

btnLogOut.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "registration.html";
  }, 1500);
});

/////////////////////

let form = document.getElementById("create-form");
let nameValue = document.getElementById("edit-name");
let emailValue = document.getElementById("edit-email");

///////
let userLocal = localStorage.getItem("username");
let emailLocal = localStorage.getItem("email");
//

//
nameValue.value = userLocal;
emailValue.value = emailLocal;
////
form.addEventListener("submit", editProfileFun);

function editProfileFun(e) {
  e.preventDefault();
  if (nameValue.value !== "" && emailValue.value !== "") {
    localStorage.setItem("username", nameValue.value);
    localStorage.setItem("email", emailValue.value);
    setTimeout(() => {
      window.location = "profile.html";
    }, 500);
  }
}
