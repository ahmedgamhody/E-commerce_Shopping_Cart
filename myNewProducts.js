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

let showProdects;
let allprodect = JSON.parse(localStorage.getItem("oldAndNewProdects"));
let myNewProducts = allprodect.filter((item) => item.isMe === "y");
(showProdects = function (allprodect = []) {
  if (myNewProducts.length == 0) {
    messNoPro.innerHTML = "There is no prodect in card";
  } else {
    let prodectsShow = myNewProducts.map((item) => {
      return `
        <div class="box" style="border:${
          item.isMe === "y" ? "2px solid #fac031" : ""
        }">
          <div class="imge">
            <img src="${item.imgUrl}" alt="" id="prodect-img" />
     
          </div>
          <div class="info">
            <h4 onclick="saveItemData(${item.id})" id="prodect-name">${
        item.name
      }</h4>
            <p id="prodect-dis">
            ${item.discrition}
            </p>
            <span id="prodect-price">${item.price}$</span>
          </div>
          ${
            item.isMe === "y"
              ? "<button id='edit-btn' onclick='editItem(" +
                item.id +
                ")' >Edit product</button>"
              : ""
          }
          <button id="btn-ord" onclick ="deleteNewProduct(${
            item.id
          })">Delete Product</button>
        </div>
          `;
    });
    containerProdects.innerHTML = prodectsShow.join("");
  }
})(myNewProducts);

function deleteNewProduct(id) {
  let ckeck = localStorage.getItem("oldAndNewProdects");
  if (ckeck) {
    let items = JSON.parse(ckeck);
    let filterItems = items.filter((item) => item.id != id);
    localStorage.setItem("oldAndNewProdects", JSON.stringify(filterItems));
    showProdects(filterItems);
    window.location = "myNewProducts.html";
  }
}

function editItem(id) {
  localStorage.setItem("editingId", id);
  setTimeout(() => {
    window.location = "editItem.html";
  }, 500);
}

function saveItemData(id) {
  localStorage.setItem("prodectsData", id);
  setTimeout(() => {
    window.location = "itemDetails.html";
  }, 500);
}
