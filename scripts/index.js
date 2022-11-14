const $menuButton = document.querySelector("#menu-button");
const $nav = document.querySelector("#nav");

$menuButton.addEventListener("click", () => {
  $menuButton.classList.toggle("header__menu--active");

  $nav.classList.toggle("header__nav--active");
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
