document.addEventListener("DOMContentLoaded", () => {
  // Header
  fetch("assets/include/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Header Load Error:", error));

  // Footer
  fetch("assets/include/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Footer Load Error:", error));
});



// Product Slider
// Product Slider
// Product Slider
const studySlider = new Swiper(".studyCardsSlider", {
  loop: true,
  speed: 800,
  spaceBetween: 25,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});




// dashboard

function toggleMenu() {
    document.querySelector(".main-menu").classList.toggle("show-menu");
    document.querySelector(".navside").classList.toggle("active");
    
}