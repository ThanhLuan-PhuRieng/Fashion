const btn = document.getElementById("btn");
const input = document.querySelector(".input");
btn.addEventListener("click", () => {
  const act = document.getElementById("search");
  act.classList.toggle("active");
  input.focus();
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-list");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

let watchMore = document.querySelector(".watch-more");
let sideBar = document.querySelector(".side-bar");

watchMore.onclick = () => {
  sideBar.classList.toggle("watch-more-open");
  Create();
};

function Create() {
  const sideBarContent = document.querySelector(".side-bar-content");
  const newDiv = document.createElement("div");
  const text = document.createElement("p");
  text.innerText = "Đóng!";
  text.style = "text-align: center; margin-top: 10px;";
  newDiv.append(text);
  sideBarContent.append(newDiv);
  newDiv.onclick = () => {
    sideBar.classList.toggle("watch-more-open");
    newDiv.remove(text);
  };
}

const sr = ScrollReveal({
  distance: "65px",
  duration: 1600,
  delay: 450,
  reset: true,
});
sr.reveal(".navbar-content", { delay: 100, origin: "top" });
sr.reveal(".side-bar", { delay: 100, origin: "left" });
sr.reveal(".container", { delay: 100, origin: "right" });
