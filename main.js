import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var swiper = new Swiper(".blogSwiper", {
  loop: true,
  slidesPerView: 1.1,
  grabCursor: true,
  pagination: {
    el: ".swiper-blog-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-blog-next",
    prevEl: ".swiper-button-blog-prev",
  },
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
