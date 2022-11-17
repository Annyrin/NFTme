const menuButton = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

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

// hand Animation
const lazyImages = document.querySelectorAll(".partner__hand");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(".partner__container--scaled");
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  // root: по умолчанию window, но можно задать любой элемент-контейнер
  root: document.querySelector(".partner__container"),
  threshold: [0, 0.25],
};

const observer = new IntersectionObserver(callback, options);

lazyImages.forEach((image) => observer.observe(image));
