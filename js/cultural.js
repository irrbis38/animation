var initClassicModeInput = (input) => {
  const parent = input.closest(".p-play__profile-panel-v2");

  input.addEventListener("input", () => {
    parent.classList.toggle("p-classic-is-opened");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const classic_mode_inputs = document.querySelectorAll(".p-classic-mode");

  classic_mode_inputs.length > 0 && classic_mode_inputs.forEach((input) => initClassicModeInput(input));
});
