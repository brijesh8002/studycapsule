document.addEventListener("DOMContentLoaded", () => {
  // Header
 fetch("assets/include/header.html")
  .then((response) => response.text())
  .then((data) => {

      document.getElementById("header").innerHTML = data;

      initHeaderDropdown();

  })
  .catch((error) => console.error(error));

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

// Index Page Hero Section Carousel
// Index Page Hero Section Carousel

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".orbit-card");
  const prevBtn = document.querySelector(".orbit-prev");
  const nextBtn = document.querySelector(".orbit-next");
  const wrapper = document.querySelector(".orbit-wrapper");

  let current = 0;
  let autoPlay = null;

  // ==========================
  // UPDATE CAROUSEL
  // ==========================

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.className = "orbit-card";

      let offset = (index - current + cards.length) % cards.length;

      switch (offset) {
        case 0:
          card.classList.add("active");
          break;

        case 1:
          card.classList.add("next");
          break;

        case 2:
          card.classList.add("next2");
          break;

        case cards.length - 1:
          card.classList.add("prev");
          break;

        case cards.length - 2:
          card.classList.add("prev2");
          break;

        default:
          card.classList.add("hidden");
      }
    });
  }

  // ==========================
  // NEXT
  // ==========================

  function nextSlide() {
    current++;

    if (current >= cards.length) {
      current = 0;
    }

    updateCarousel();
  }

  // ==========================
  // PREVIOUS
  // ==========================

  function prevSlide() {
    current--;

    if (current < 0) {
      current = cards.length - 1;
    }

    updateCarousel();
  }

  // ==========================
  // AUTOPLAY
  // ==========================

  function startAuto() {
    stopAuto();

    autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopAuto() {
    if (autoPlay) {
      clearInterval(autoPlay);

      autoPlay = null;
    }
  }

  // ==========================
  // BUTTONS
  // ==========================

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();

      startAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();

      startAuto();
    });
  }

  // ==========================
  // PAUSE ON HOVER
  // ==========================

  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAuto);

    wrapper.addEventListener("mouseleave", startAuto);
  }

  // ==========================
  // TOUCH SWIPE
  // ==========================

  let startX = 0;
  let endX = 0;

  if (wrapper) {
    wrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    wrapper.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    });

    wrapper.addEventListener("touchend", () => {
      if (startX - endX > 60) {
        nextSlide();

        startAuto();
      }

      if (endX - startX > 60) {
        prevSlide();

        startAuto();
      }
    });
  }

  // ==========================
  // START
  // ==========================

  updateCarousel();

  startAuto();
});

function initHeaderDropdown() {

    // Top Level Dropdown
    document.querySelectorAll(".custom-dropdown > a").forEach(btn => {

        btn.addEventListener("click", function(e){

            e.preventDefault();
            e.stopPropagation();

            const menu = this.nextElementSibling;

            // Close other top menus
            document.querySelectorAll(".custom-menu").forEach(item=>{

                if(item !== menu){
                    item.classList.remove("show");
                }

            });

            menu.classList.toggle("show");

        });

    });


    // Unlimited Nested Submenu
    document.querySelectorAll(".has-submenu > a").forEach(btn=>{

        btn.addEventListener("click", function(e){

            e.preventDefault();
            e.stopPropagation();

            const submenu = this.nextElementSibling;

            const parent = this.parentElement.parentElement;

            parent.querySelectorAll(":scope > .has-submenu > .submenu").forEach(item=>{

                if(item !== submenu){
                    item.classList.remove("show");
                }

            });

            submenu.classList.toggle("show");

        });

    });


    // Outside Click
    document.addEventListener("click", function(){

        document.querySelectorAll(".custom-menu,.submenu").forEach(menu=>{

            menu.classList.remove("show");

        });

    });

}




// Download Sample Pop up
document.getElementById("sampleForm").addEventListener("submit", function(e){

    e.preventDefault();

    let mobile=document.getElementById("whatsapp").value.trim();

    if(!/^[6-9]\d{9}$/.test(mobile)){

        alert("Please enter a valid WhatsApp number.");

        return;

    }

    // Download File

    // const link=document.createElement("a");

    // link.href="assets/sample.pdf";   // your pdf

    // link.download="StudyCapsule-Sample.pdf";

    // link.click();

    // bootstrap.Modal.getInstance(document.getElementById("sampleModal")).hide();

    // document.getElementById("sampleForm").reset();

});