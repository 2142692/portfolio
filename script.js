const swiperHero = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const swiperSecond = new Swiper(".myOthersSwiper", {
  direction: "horizontal",
  slidesPerView:1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    
  },

  navigation: {
    el: ".swiper-pagination",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },
});

