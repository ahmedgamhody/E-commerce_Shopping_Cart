let containerProdects = document.getElementById("prodects");
let userArea = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");
let btnLogOut = document.getElementById("logOut");
let user = localStorage.getItem("username");
let messNoPro = document.getElementById("noPro");

// function showProdects(allprodect = []) {
//   if (JSON.parse(localStorage.getItem("prodectChossen")).length == 0) {
//     messNoPro.innerHTML = "There is no prodect in card";
//   }
//   let prodects =
//     JSON.parse(localStorage.getItem("prodectChossen")) || allprodect;
//   let prodectsShow = prodects.map((item) => {
//     return `
//       <div class="box">
//       <div class="imge">
//         <img src="${item.imgUrl}" alt="" id="prodect-img" />
//       </div>
//       <div class="info">
//         <h4 id="prodect-name">${item.name}</h4>
//         <p id="prodect-dis">
//         ${item.discrition}
//         </p>
//         <span id="prodect-price">${item.price}</span>
//         </div>
//         <span>Quantity:${item.qty}</span>
//         <span>The final price:${
//           Number(item.qty) * Number(item.price).toFixed(2)
//         }</span>
//       <button id="btn-ord" onclick ="remveFormCart(${
//         item.id
//       })">Remve From Cart</button>
//     </div>
//       `;
//   });
//   containerProdects.innerHTML = prodectsShow.join("");
// }

function showProdects(allprodect = []) {
  if (JSON.parse(localStorage.getItem("prodectChossen")).length == 0) {
    messNoPro.innerHTML = "There is no product in the cart";
  }
  let prodects =
    JSON.parse(localStorage.getItem("prodectChossen")) || allprodect;

  // تصفية العناصر المكررة
  let uniqueProdects = prodects.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  let prodectsShow = uniqueProdects.map((item) => {
    return `
      <div class="box">
        <div class="imge">
          <img src="${item.imgUrl}" alt="" id="prodect-img" />
        </div>
        <div class="info">
          <h4 id="prodect-name">${item.name}</h4>
          <p id="prodect-dis">${item.discrition}</p>
          <span id="prodect-price">${item.price}</span>
        </div>
        <span>Quantity: ${item.qty}</span>
        <span>The final price: ${
          Number(item.qty) * Number(item.price).toFixed(2)
        }</span>
        <button id="btn-ord" onclick="remveFormCart(${
          item.id
        })">Remove From Cart</button>
      </div>
    `;
  });

  containerProdects.innerHTML = prodectsShow.join("");
}

showProdects();
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

function remveFormCart(id) {
  let ckeck = localStorage.getItem("prodectChossen");
  if (ckeck) {
    let items = JSON.parse(ckeck);
    let filterItems = items.filter((item) => item.id != id);
    localStorage.setItem("prodectChossen", JSON.stringify(filterItems));
    showProdects(filterItems);
  }
}
