const initBannersSlider = (sliderEl) => {
  const slider = new Swiper(sliderEl, {
    slidesPerView: "auto",
    spaceBetween: 12,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    breakpoints: {
      769: {
        slidesPerView: 1,
        spaceBetween: 23,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        loop: true,
        autoplay: {
          delay: 30000,
        },
        pagination: {
          el: ".p-play__right-pagination",
          clickable: true,
          bulletClass: "p-play__right-bullet",
          bulletActiveClass: "p-play__right-active-bullet",
        },
      },
    },
  });

  return slider;
};

const initSelect = (select) => {
  const selectedEl = select.querySelector(".p-settings-modal__selected");
  const selectedInput = selectedEl.querySelector(".p-settings-modal__selected-input");
  const selectedText = selectedEl.querySelector(".p-settings-modal__selected-text");

  const windowClickHandler = (e) => {
    if (!e.target.closest(".p-settings-modal__country-select")) {
      select.classList.remove("p-options-list-open");
      window.removeEventListener("click", windowClickHandler);
    }
  };

  selectedEl.addEventListener("click", () => {
    const isOptionsListOpen = select.classList.contains("p-options-list-open");
    const optionInputs = select.querySelectorAll(".p-settings-modal__option-input");
    if (isOptionsListOpen) {
      select.classList.remove("p-options-list-open");
    } else {
      select.classList.add("p-options-list-open");
      window.addEventListener("click", windowClickHandler);
    }

    optionInputs.length > 0 &&
      optionInputs.forEach((input) => {
        input.addEventListener("input", () => {
          select.classList.remove("p-options-list-open");
          selectedInput.value = input.value;
          selectedText.textContent = input.nextElementSibling.textContent;
        });
      });
  });
};

const initFilterSelect = (select) => {
  const selectedEl = select.querySelector(".p-rating-filters__selected");
  const selectedInput = selectedEl.querySelector(".p-rating-filters__selected-input");
  const selectedText = selectedEl.querySelector(".p-rating-filters__selected-text");

  const windowClickHandler = (e) => {
    if (!e.target.closest(".p-rating-filters__select")) {
      select.classList.remove("p-options-list-open");
      window.removeEventListener("click", windowClickHandler);
    }
  };

  selectedEl.addEventListener("click", () => {
    const isOptionsListOpen = select.classList.contains("p-options-list-open");
    const optionInputs = select.querySelectorAll(".p-rating-filters__option-input");
    if (isOptionsListOpen) {
      select.classList.remove("p-options-list-open");
    } else {
      select.classList.add("p-options-list-open");
      window.addEventListener("click", windowClickHandler);
    }

    optionInputs.length > 0 &&
      optionInputs.forEach((input) => {
        input.addEventListener("input", () => {
          select.classList.remove("p-options-list-open");
          selectedInput.value = input.value;
          console.log(input.nextElementSibling);
          selectedText.innerHTML = input.nextElementSibling.innerHTML;
        });
      });
  });
};

const initMobileSlider = (sliderEl) => {
  let slider = null;
  const activeSlider = () => {
    console.log("init");
    return new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 12,
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

window.addEventListener("DOMContentLoaded", () => {
  const playBannersSliders = document.querySelectorAll(".p-play__banners-slider");

  playBannersSliders.length > 0 &&
    playBannersSliders.forEach((sliderEl) => {
      initBannersSlider(sliderEl);
    });

  const onlyMobileSliders = document.querySelectorAll(".p-js-only-mobile-slider");

  onlyMobileSliders.length > 0 &&
    onlyMobileSliders.forEach((sliderEl) => {
      initMobileSlider(sliderEl);
    });

  const selects = document.querySelectorAll(".p-settings-modal__country-select");

  selects.length > 0 &&
    selects.forEach((select) => {
      initSelect(select);
    });

  const filterSelects = document.querySelectorAll(".p-rating-filters__select");

  filterSelects.length > 0 &&
    filterSelects.forEach((s) => {
      initFilterSelect(s);
    });
});
