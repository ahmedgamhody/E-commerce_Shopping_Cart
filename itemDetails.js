let productArea = document.getElementById("prodects-detalis");

// let prodects = [
//   {
//     id: "2",
//     name: "Hand Watch",
//     discrition:
//       "Citizen Eco-Drive Men's Sport Casual Brycen Watch, 3-Hand Date, Luminous, 43mm",
//     price: "103.99",
//     imgUrl: "https://m.media-amazon.com/images/I/81O0+522oVL._AC_SX679_.jpg",
//     qty: 1,
//   },
//   {
//     id: "3",
//     name: "SAMSUNG 16",
//     discrition:
//       "Galaxy Book4 Pro Laptop PC Computer, Intel Core 7 Ultra Processor 1TB, 3K AMOLED (2880 x 1800) Touchscreen, Advanced Security, 2024 Model, NP960XGK-KG1US, Moonstone Gray",
//     price: "1,749.99",
//     imgUrl: "https://m.media-amazon.com/images/I/71ysHVMH4FL._AC_SL1500_.jpg",
//     qty: 1,
//   },
//   {
//     id: "1",
//     name: "Handbag",
//     discrition:
//       "Fossil Women's Jolie Leather Crossbody Purse Handbag, Brown (Model: ZB7716200)",
//     price: "101.99",
//     imgUrl: "https://m.media-amazon.com/images/I/81ybc-Q9KBL._AC_SY575_.jpg",
//     qty: 1,
//   },
//   {
//     id: "4",
//     name: "Dell Optiplex",
//     discrition:
//       "Dell Optiplex Small Desktop Computer (SFF) PC | Quad Core Intel i5 (3.2GHz) | 16GB DDR3 RAM | 512GB SSD | 24 Inch Monitor | RGB Gaming Keyboard & Mouse, Headset | Windows 10 Pro (Renewed)",
//     price: "245.99",
//     imgUrl: "https://m.media-amazon.com/images/I/81UAXjWUDTL._AC_SL1496_.jpg",
//     qty: 1,
//   },
//   {
//     id: "5",
//     name: "Computer Monitor",
//     discrition:
//       "KOORUI 24-Inch Curved Computer Monitor- Full HD 1080P 60Hz Gaming Monitor 1800R LED Monitor HDMI VGA, Tilt Adjustment, Eye Care, Black 24N5C",
//     price: "84.97",
//     imgUrl: "https://m.media-amazon.com/images/I/711U7Cqp-LL._AC_SL1500_.jpg",
//     qty: 1,
//   },
// ];
let prodects = JSON.parse(localStorage.getItem("oldAndNewProdects"));
let itemId = localStorage.getItem("prodectsData");
let ItemChossed = prodects.find((el) => el.id == itemId);
productArea.innerHTML = `

<img src="${ItemChossed.imgUrl}" alt="">
            <h2>${ItemChossed.name}</h2>
            <span>${ItemChossed.discrition}</span>

`;

// let itemId = localStorage.getItem("prodectsData");
// let ItemChossed = prodects.find((el) => el.id == itemId);

// if (ItemChossed) {
//   productArea.innerHTML = `
//         <img src="${ItemChossed.imgUrl}" alt="">
//         <h2>${ItemChossed.name}</h2>
//         <span>${ItemChossed.discrition}</span>
//     `;
// } else {
//   console.error("Item not found or undefined");
// }
