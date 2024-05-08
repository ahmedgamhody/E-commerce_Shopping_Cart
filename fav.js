let containerProdects = document.getElementById("prodects");
let userArea = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");
let btnLogOut = document.getElementById("logOut");
let user = localStorage.getItem("username");
let messNoPro = document.getElementById("noPro");

let showProdects;
(showProdects = function (allprodect = []) {
  if (JSON.parse(localStorage.getItem("prodectsFav")).length == 0) {
    messNoPro.innerHTML = "There is no prodect in card";
  }
  let prodects = JSON.parse(localStorage.getItem("prodectsFav")) || allprodect;
  let prodectsShow = prodects.map((item) => {
    return `
      <div class="box">
      <div class="imge">
        <img src="${item.imgUrl}" alt="" id="prodect-img" />
      </div>
      <div class="info">
        <h4 id="prodect-name">${item.name}</h4>
        <p id="prodect-dis">
        ${item.discrition}
        </p>
        <span id="prodect-price">${item.price}</span>
        </div>
      <button id="btn-ord" onclick ="remveFormCart(${item.id})">Remve From favourite</button>
    </div>
      `;
  });
  containerProdects.innerHTML = prodectsShow.join("");
})(prodects);

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

showProdects();
function remveFormCart(id) {
  let ckeck = localStorage.getItem("prodectsFav");
  if (ckeck) {
    let items = JSON.parse(ckeck);
    let filterItems = items.filter((item) => item.id != id);
    localStorage.setItem("prodectsFav", JSON.stringify(filterItems));
    showProdects(filterItems);
  }
}
