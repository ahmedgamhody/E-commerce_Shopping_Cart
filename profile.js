let userArea = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");
let btnLogOut = document.getElementById("logOut");
let user = localStorage.getItem("username");

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

//////////////////////
let prodects = localStorage.getItem("oldAndNewProdects");
let myCreatingProdects = JSON.parse(prodects).filter((i) => i.isMe == "y");
let userLocal = localStorage.getItem("username");
let emailLocal = localStorage.getItem("email");
//
let userDom = document.getElementById("username");
let emailDom = document.getElementById("email");
let userImage = document.getElementById("user-image");
let myProductsLength = document.querySelector("#products-lenth span");
//
userDom.innerHTML = userLocal;
emailDom.innerHTML = emailLocal;
myProductsLength.innerHTML = myCreatingProdects.length;
