const panels = document.querySelectorAll(".panel");

panels.forEach((pan) => {
  pan.addEventListener("click", () => {
    panels.forEach((pp) => {
      pp.classList.remove("active");
    });
    pan.classList.add("active");
  });
});
