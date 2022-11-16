const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#nav");
const body = document.querySelector("#body");

menuButton.addEventListener("click", () => {
  body.classList.toggle("stopped");
  menuButton.classList.toggle("header__menu--active");
  nav.classList.toggle("header__nav--active");
});

const makeSwiper = (selector) => {
  return new Swiper(selector, {
    spaceBetween: 64,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    slidesPerView: "auto",
    loop: true,
    allowTouchMove: false,
  });
};

let mySwiper1 = makeSwiper(".slider__left");
let mySwiper2 = makeSwiper(".slider__right");

mySwiper1.el.addEventListener("mouseleave", function (event) {
  mySwiper1.autoplay.start();
});

mySwiper2.el.addEventListener("mouseleave", function (event) {
  mySwiper2.autoplay.start();
});

// Mobile Header
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});
