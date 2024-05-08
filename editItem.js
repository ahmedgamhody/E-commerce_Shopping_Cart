let userArea = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");
let btnLogOut = document.getElementById("logOut");
let containerProdects = document.getElementById("prodects");
let user = localStorage.getItem("username");
let menu = document.querySelector(".prodects-menu");
let cardIcon = document.getElementById("card-icon");
let prodectsAddedName = document.querySelector(".prodects-added");
let badge = document.getElementById("badge");
let inpSearch = document.getElementById("search");
let prodects = [
  {
    id: "2",
    name: "Hand Watch",
    discrition:
      "Citizen Eco-Drive Men's Sport Casual Brycen Watch, 3-Hand Date, Luminous, 43mm",
    price: "103.99",
    imgUrl: "https://m.media-amazon.com/images/I/81O0+522oVL._AC_SX679_.jpg",
    qty: 1,
    isMe: "n",
  },
  {
    id: "3",
    name: "SAMSUNG 16",
    discrition:
      "Galaxy Book4 Pro Laptop PC Computer, Intel Core 7 Ultra Processor 1TB, 3K AMOLED (2880 x 1800) Touchscreen, Advanced Security, 2024 Model, NP960XGK-KG1US, Moonstone Gray",
    price: "1749.99",
    imgUrl: "https://m.media-amazon.com/images/I/71ysHVMH4FL._AC_SL1500_.jpg",
    qty: 1,
    isMe: "n",
  },
  {
    id: "1",
    name: "Handbag",
    discrition:
      "Fossil Women's Jolie Leather Crossbody Purse Handbag, Brown (Model: ZB7716200)",
    price: "101.99",
    imgUrl: "https://m.media-amazon.com/images/I/81ybc-Q9KBL._AC_SY575_.jpg",
    qty: 1,
    isMe: "n",
  },
  {
    id: "4",
    name: "Dell Optiplex",
    discrition:
      "Dell Optiplex Small Desktop Computer (SFF) PC | Quad Core Intel i5 (3.2GHz) | 16GB DDR3 RAM | 512GB SSD | 24 Inch Monitor | RGB Gaming Keyboard & Mouse, Headset | Windows 10 Pro (Renewed)",
    price: "245.99",
    imgUrl: "https://m.media-amazon.com/images/I/81UAXjWUDTL._AC_SL1496_.jpg",
    qty: 1,
  },
  {
    id: "5",
    name: "Computer Monitor",
    discrition:
      "KOORUI 24-Inch Curved Computer Monitor- Full HD 1080P 60Hz Gaming Monitor 1800R LED Monitor HDMI VGA, Tilt Adjustment, Eye Care, Black 24N5C",
    price: "84.97",
    imgUrl: "https://m.media-amazon.com/images/I/711U7Cqp-LL._AC_SL1500_.jpg",
    qty: 1,
    isMe: "n",
  },
];

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

///////////////////////////////////////////////
let allProducts = JSON.parse(localStorage.getItem("oldAndNewProdects"));
let modifiedProductId = localStorage.getItem("editingId");
let modifiedProduct = allProducts.find((item) => item.id == modifiedProductId);
// ////////////////////////////////////////
let itemName = document.getElementById("create-name");
let itemDes = document.getElementById("create-des");
let itemType = document.getElementById("size");
let formUpdate = document.getElementById("create-form");
let itemPrice = document.getElementById("create-price");
let itemImageInp = document.getElementById("create-image");
let itemImage;
let typeItem;

//////
itemName.value = modifiedProduct.name;
itemDes.value = modifiedProduct.discrition;
itemPrice.value = modifiedProduct.price;
itemImage = modifiedProduct.imgUrl;
// //
itemType.addEventListener("change", getTypeItem);
formUpdate.addEventListener("submit", updatFun);
// //
function getTypeItem(e) {
  typeItem = e.target.value;
}

function updatFun(e) {
  e.preventDefault();
  modifiedProduct.name = itemName.value;
  modifiedProduct.discrition = itemDes.value;
  modifiedProduct.price = itemPrice.value;
  modifiedProduct.imgUrl = itemImage;
  localStorage.setItem("oldAndNewProdects", JSON.stringify(allProducts));

  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
}

itemImageInp.addEventListener("change", getImage);
function getImage() {
  let file = this.files[0];
  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    alert("Type Not Support");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("Image Not Exect 2MB");
    return;
  }

  getBasd64(file);
}

function getBasd64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    itemImage = reader.result;
  };
  reader.onerror = function () {
    alert("Error.....!@!@");
  };
}
