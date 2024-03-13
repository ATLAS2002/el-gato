const cookies = document.cookie;
const clicked = parseInt(cookies.split("=")[1], 10);
const gatoz = document.querySelector(".gatoz");
// for (let i = 0; i < Math.min(5, clicked); i++) {
//   const clone = document.createElement("img");
//   clone.setAttribute("src", "./elgato-base.png");
//   clone.setAttribute("height", "50px");
//   clone.setAttribute("width", "50px");
//   gatoz.appendChild(clone);
// }
