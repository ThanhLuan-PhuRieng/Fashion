let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-list");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
function rotateCube(direction) {
  let currentRotation = { x: 0, y: 0 };
  switch (direction) {
    case "font":
      currentRotation.x = 0;
      currentRotation.y = 0;
      break;
    case "right":
      currentRotation.y = -90;
      break;
    case "left":
      currentRotation.y = 90;
      break;
    case "back":
      currentRotation.y = 180;
      break;
    case "top":
      currentRotation.x = -90;
      break;
    case "bottom":
      currentRotation.x = 90;
      break;
  }
  document.getElementById(
    "cube"
  ).style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
}
