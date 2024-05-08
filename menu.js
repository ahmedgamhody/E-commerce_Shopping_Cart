let menu = document.querySelector(".prodects-menu"); //
let cardIcon = document.getElementById("card-icon"); //
let prodectsAddedName = document.querySelector(".prodects-added"); //
let badge = document.getElementById("badge");

///
///
//
let allItems = [];

function addToCard(id) {
  if (localStorage.getItem("username")) {
    let prodects2 =
      JSON.parse(localStorage.getItem("oldAndNewProdects")) || prodects;
    let checkCard = prodects2.find((el) => el.id == id);
    let checkItem = allItems.find((el) => el.id == checkCard.id);
    if (checkItem) {
      checkItem.qty += 1;
    } else {
      allItems.push(checkCard);
    }
    prodectsAddedName.innerHTML = "";
    allItems.forEach((e) => {
      prodectsAddedName.innerHTML += `
      <p>${e.name} ${e.qty}</p>
      `;
    });

    badge.style.display = "block";
    badge.innerHTML = `${prodectsAddedName.children.length}`;

    addItems = new Set([...allItems, checkCard]);
    localStorage.setItem(
      "prodectChossen",
      JSON.stringify(Array.from(addItems))
    );
  } else {
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
}

let addItems = JSON.parse(localStorage.getItem("prodectChossen"))
  ? JSON.parse(localStorage.getItem("prodectChossen"))
  : [];
if (addItems) {
  addItems.map((item) => {
    prodectsAddedName.innerHTML += `
    <p>${item.name} ${item.qty}</p>
    `;
  });
  badge.style.display = "block";
  badge.innerHTML = `${prodectsAddedName.children.length}`;
}

cardIcon.addEventListener("click", showMenu);

function showMenu() {
  if (prodectsAddedName.innerHTML != "") {
    if (menu.style.display == "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
}
