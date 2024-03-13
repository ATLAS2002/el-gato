const position = ["-bottom-96", "-bottom-40", "bottom-0"];

function updateClass(bingus, clicked) {
  if (clicked > 2) return;
  bingus.classList.add(position[clicked]);
  if (clicked === 0) bingus.classList.remove(position[(clicked + 2) % 3]);
}

const cookies = document.cookie;
const clicked = parseInt(cookies.split("=")[1], 10);
const bingus = document.querySelector("img");
console.log(clicked);
updateClass(bingus, clicked);
