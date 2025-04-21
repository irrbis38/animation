"use strict";

const initMobileSlider = (sliderEl) => {
  let slider = null;
  const activeSlider = () => {
    return new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    });
  };

  if (window.innerWidth < 769) {
    slider = activeSlider();
  }

  const mm769 = window.matchMedia("(min-width: 769px)");

  mm769.addEventListener("change", (e) => {
    if (e.matches) {
      slider.destroy();
    } else {
      slider = activeSlider();
    }
  });
};

const initDesktopSlider = (sliderEl) => {
  let slider = null;
  const activeSlider = () => {
    return new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 17,
    });
  };

  if (window.innerWidth >= 769) {
    slider = activeSlider();
  }

  const mm769 = window.matchMedia("(min-width: 769px)");

  mm769.addEventListener("change", (e) => {
    if (e.matches) {
      slider = activeSlider();
    } else {
      slider.destroy();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    debounceDelay: 50,
    throttleDelay: 99,
    duration: 400,
    easing: "ease",
    once: true,
  });

  const sliderEl = document.querySelector(".p-landing-closed__top");

  sliderEl && initMobileSlider(sliderEl);

  const sliderReferees = document.querySelector(".p-landing-closed__referees-list");

  sliderReferees && initDesktopSlider(sliderReferees);
});
