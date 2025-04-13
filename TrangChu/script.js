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
sr.reveal(".hero-image", { delay: 200, origin: "right" });
sr.reveal(".hero-content", { delay: 100, origin: "left" });
sr.reveal(".opening", { delay: 500, origin: "bottom" });

sr.reveal("#introduce-box-content-1", { delay: 550, origin: "left" });
sr.reveal("#introduce-box-content-2", { delay: 550, origin: "right" });
sr.reveal("#introduce-box-content-3", { delay: 550, origin: "left" });
sr.reveal("#introduce-box-content-4", { delay: 550, origin: "right" });

sr.reveal("#a", { delay: 900, origin: "top" });
sr.reveal("#b", { delay: 900, origin: "top" });
sr.reveal("#c", { delay: 900, origin: "top" });
sr.reveal("#d", { delay: 900, origin: "top" });

sr.reveal(".Outstanding-Girls", { delay: 900, origin: "bottom" });
sr.reveal(".container-img", { delay: 500, origin: "left" });
sr.reveal(".mutil-img", { delay: 500, origin: "right" });

const swiper = new Swiper(".carousel", {
  loop: true,
  grapCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicsBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
