let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-list");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 1600,
  delay: 450,
  reset: true,
});
sr.reveal(".navbar-content", { delay: 100, origin: "top" });
sr.reveal("#a", { delay: 150, origin: "left" });
sr.reveal("#b", { delay: 150, origin: "right" });
sr.reveal("#c", { delay: 150, origin: "left" });
sr.reveal("#d", { delay: 150, origin: "right" });
sr.reveal("#e", { delay: 150, origin: "left" });
sr.reveal("#f", { delay: 150, origin: "right" });

sr.reveal(".numerical-order", { delay: 250, origin: "top" });
