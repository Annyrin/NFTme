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
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    slidesPerView: "auto",
    loop: true,
    allowTouchMove: false,
  });
};

let mySwiper1 = makeSwiper(".slider__left");
let mySwiper2 = makeSwiper(".slider__right");

mySwiper1.el.addEventListener("mouseleave", function () {
  mySwiper1.autoplay.start();
});

mySwiper2.el.addEventListener("mouseleave", function () {
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

const image = document.querySelector(".partner__hand");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("partner__hand--scaled");
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(image);
