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
    isMe: "n",
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

let userArea = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");
let btnLogOut = document.getElementById("logOut");
let containerProdects = document.getElementById("prodects");
let user = localStorage.getItem("username");
// let menu = document.querySelector(".prodects-menu");//
// let cardIcon = document.getElementById("card-icon"); //
// let prodectsAddedName = document.querySelector(".prodects-added");//
// let badge = document.getElementById("badge");
let inpSearch = document.getElementById("search");
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
(showProdects = function (prodects = []) {
  for (let i = 0; i < prodects.length; i++) {
    containerProdects.innerHTML += `
    <div class="box" style="border:${
      prodects[i].isMe === "y" ? "2px solid #fac031" : ""
    }">
    <div class="imge">
      <img src="${prodects[i].imgUrl}" alt="" id="prodect-img" />
      <i class="fas fa-heart" id="add-to-fav-${
        prodects[i].id
      }" onclick="addToFav(${prodects[i].id})"></i>

    </div>
    <div class="info">
      <h4 onclick="saveItemData(${prodects[i].id})" id="prodect-name">${
      prodects[i].name
    }</h4>
      <p id="prodect-dis">
      ${prodects[i].discrition}
      </p>
      <span id="prodect-price">${prodects[i].price}$</span>
    </div>
    ${
      prodects[i].isMe === "y"
        ? "<button id='edit-btn' onclick='editItem(" +
          prodects[i].id +
          ")' >Edit product</button>"
        : ""
    }
    <button id="btn-ord" onclick ="addToCard(${
      prodects[i].id
    })">Order Now</button>
  </div>
    `;
  }
})(
  JSON.parse(localStorage.getItem("oldAndNewProdects"))
    ? JSON.parse(localStorage.getItem("oldAndNewProdects"))
    : prodects
);

// let addItems = JSON.parse(localStorage.getItem("prodectChossen"))
//   ? JSON.parse(localStorage.getItem("prodectChossen"))
//   : [];
// if (addItems) {
//   addItems.map((item) => {
//     prodectsAddedName.innerHTML += `
//     <p>${item.name} ${item.qty}</p>
//     `;
//   });
//   badge.style.display = "block";
//   badge.innerHTML = `${prodectsAddedName.children.length}`;
// }

// let allItems = [];

// function addToCard(id) {
//   if (localStorage.getItem("username")) {
//     let prodects2 =
//       JSON.parse(localStorage.getItem("oldAndNewProdects")) || prodects;
//     let checkCard = prodects2.find((el) => el.id == id);
//     let checkItem = allItems.find((el) => el.id == checkCard.id);
//     if (checkItem) {
//       checkItem.qty += 1;
//     } else {
//       allItems.push(checkCard);
//     }
//     prodectsAddedName.innerHTML = "";
//     allItems.forEach((e) => {
//       prodectsAddedName.innerHTML += `
//       <p>${e.name} ${e.qty}</p>
//       `;
//     });

//     badge.style.display = "block";
//     badge.innerHTML = `${prodectsAddedName.children.length}`;
//     addItems = new Set([...addItems, checkCard]);
//     localStorage.setItem(
//       "prodectChossen",
//       JSON.stringify(Array.from(addItems))
//     );
//   } else {
//     setTimeout(() => {
//       window.location = "login.html";
//     }, 1000);
//   }
// }

// cardIcon.addEventListener("click", showMenu);

// function showMenu() {
//   if (prodectsAddedName.innerHTML != "") {
//     if (menu.style.display == "block") {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "block";
//     }
//   }
// }

function saveItemData(id) {
  localStorage.setItem("prodectsData", id);
  setTimeout(() => {
    window.location = "itemDetails.html";
  }, 1000);
}

inpSearch.addEventListener("keyup", function (e) {
  let searchName = e.target.value;
  search(searchName, prodects);

  if (e.target.value.trim() == "") {
    containerProdects.innerHTML = "";
    showProdects(prodects);
  }
});

function search(title, arr) {
  containerProdects.innerHTML = "";
  let searchRes = arr.filter(
    (el) => el.name.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  showProdects(searchRes);
}

let allItemsFav = JSON.parse(localStorage.getItem("prodectsFav"))
  ? JSON.parse(localStorage.getItem("prodectsFav"))
  : [];

function addToFav(id) {
  if (localStorage.getItem("username")) {
    let checkFavCard = prodects.find((el) => el.id == id);
    checkFavCard.liked = !checkFavCard.liked;

    if (checkFavCard.liked) {
      document.getElementById("add-to-fav-" + id).classList.add("orange");
      let allItemsFav = JSON.parse(localStorage.getItem("prodectsFav")) || [];
      allItemsFav.push(checkFavCard);
      localStorage.setItem("prodectsFav", JSON.stringify(allItemsFav));
    } else {
      document.getElementById("add-to-fav-" + id).classList.remove("orange");
      let allItemsFav = JSON.parse(localStorage.getItem("prodectsFav")) || [];
      allItemsFav = allItemsFav.filter((item) => item.id !== id);
      localStorage.setItem("prodectsFav", JSON.stringify(allItemsFav));
    }
  } else {
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
}

window.onload = function () {
  let favProducts = JSON.parse(localStorage.getItem("prodectsFav")) || [];

  favProducts.forEach((product) => {
    let favIcon = document.getElementById(`add-to-fav-${product.id}`);
    if (favIcon) {
      favIcon.classList.add("orange");
    }
  });
};

function editItem(id) {
  localStorage.setItem("editingId", id);
  setTimeout(() => {
    window.location = "editItem.html";
  }, 1000);
}
