import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

//All - Button RWD
const button = document.querySelectorAll("button");
function btnSize() {
  if (window.innerWidth >= 768) {
    button.forEach((btn) => {
      btn.classList.add("btn-lg");
    });
  } else {
    button.forEach((btn) => {
      btn.classList.remove("btn-lg");
    });
  }
}

btnSize();

//Homepage - Blog Swiper
var blogSwiper = new Swiper(".blogSwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
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
      slidesPerGroup: 2,
    },
  },
});

//Homepage - Hot Topic Swiper
var hotTopicSwiper = new Swiper(".hotTopicSwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 24,
});

//Homepage - Life Swiper
var lifeSwiper;

function createLifeSwiper() {
  lifeSwiper = new Swiper(".lifeSwiper", {
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerGroup: 2,
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-life-next",
          prevEl: ".swiper-button-life-prev",
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 48,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerGroup: 3,

        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-life-next",
          prevEl: ".swiper-button-life-prev",
        },
      },
    },
  });
}

const lifeCardContainer = document.querySelector(".lifeSwiper .swiper-wrapper");

//Home - Life Swiper - Remove Life Swiper on Mobile
function disableLifeSwiper() {
  if (window.innerWidth >= 768) {
    lifeCardContainer.classList.remove("d-flex");
    lifeCardContainer.classList.remove("flex-column");
    createLifeSwiper();
  } else {
    if (lifeSwiper) {
      lifeSwiper.destroy();
    }
    lifeCardContainer.classList.add("d-flex");
    lifeCardContainer.classList.add("flex-column");
  }
}

if (lifeCardContainer) {
  disableLifeSwiper();
}

//Homepage - Project Swiper
let projectSwiper;
function createProjectSwiper() {
  projectSwiper = new Swiper(".projectSwiper", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
        slidesPerGroup: 2,
      },
    },
  });
}

//Homepage - Project Swiper - Remove Project Swiper on Desktop
const projectSwiperWrapper = document.querySelector(".project .swiper-wrapper");
const projectSwiperContainer = document.querySelector(".projectSwiper");
const projectSwiperItem = document.querySelectorAll(
  ".project .swiper-wrapper .swiper-item"
);
function disableProjectSwiper() {
  if (window.innerWidth >= 992) {
    projectSwiperWrapper.classList.add("row");
    projectSwiperContainer.classList.remove("swiper");
    projectSwiperItem.forEach((item) => {
      item.classList.add("card-item");
      item.classList.remove("swiper-slide");
    });
    if (projectSwiper) {
      projectSwiper.destroy();
    }
  } else {
    createProjectSwiper();
    projectSwiperContainer.classList.add("swiper");
    projectSwiperWrapper.classList.remove("row");
    projectSwiperItem.forEach((item) => {
      item.classList.remove("card-item");
      item.classList.add("swiper-slide");
    });
  }
}
if (projectSwiperWrapper) {
  disableProjectSwiper();
}

//Article - Read More Swiper
let readMoreSwiper;
function createReadMoreSwiper() {
  readMoreSwiper = new Swiper(".readMoreSwiper", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
}

//Article - Read More Swiper - Remove Project Swiper on Desktop
const readMoreSwiperContainer = document.querySelector(
  ".readMoreSwiper .swiper-wrapper"
);

function disableReadMoreSwiper() {
  if (window.innerWidth >= 768) {
    if (readMoreSwiper) {
      readMoreSwiper.destroy();
    }
    readMoreSwiperContainer.classList.add("row");
  } else {
    createReadMoreSwiper();
    readMoreSwiperContainer.classList.remove("row");
  }
}

if (readMoreSwiperContainer) {
  disableReadMoreSwiper();
}

//All - Window Resize
window.addEventListener("resize", () => {
  disableLifeSwiper();
  btnSize();
  disableProjectSwiper();
  if (readMoreSwiperContainer) {
    disableReadMoreSwiper();
  }
});
