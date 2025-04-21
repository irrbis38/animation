"use strict";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    debounceDelay: 50,
    throttleDelay: 99,
    duration: 500,
    easing: "ease-out-cubic",
    once: true,
  });
});
