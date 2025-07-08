"use strict";

// add bg to nav
if ($("nav").length) {
  const header = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY >= 10);
  });
}

$(document).ready(function () {
  var swiper = new Swiper(".project-swiper", {
    grabCursor: true,
    slidesPerView: 3,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  // odommeter start
  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }
  // odommeter end
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// curved-circle start
$(window).on("load", function () {
  if ($(".curved-circle").length) {
    $(".curved-circle").circleType({
      position: "absolute",
      dir: 1,
      radius: 72,
      forceHeight: true,
      forceWidth: true,
    });
  }
});
// curved-circle end

// curved-circle2 start
$(window).on("load", function () {
  if ($(".curved-circle2").length) {
    $(".curved-circle2").circleType({
      position: "absolute",
      dir: 1,
      radius: 74,
      forceHeight: true,
      forceWidth: true,
    });
  }
});
// curved-circle2 end

// Custom dropdown start
document.addEventListener("DOMContentLoaded", function () {
  function toggleDropdownAttributes() {
    const dropdowns = document.querySelectorAll(".custom-dropdown > a"); // Select all dropdown links

    dropdowns.forEach((dropdown) => {
      if (window.innerWidth >= 992) {
        dropdown.removeAttribute("role");
        dropdown.removeAttribute("data-bs-toggle");
        dropdown.removeAttribute("aria-expanded");
      } else {
        dropdown.setAttribute("role", "button");
        dropdown.setAttribute("data-bs-toggle", "dropdown");
        dropdown.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Run on page load
  toggleDropdownAttributes();

  // Run on window resize
  window.addEventListener("resize", toggleDropdownAttributes);
});
// Custom dropdown end
