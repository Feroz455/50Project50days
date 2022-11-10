const open = document.querySelector("#open");
const close = document.querySelector("#close");

const container = document.querySelector(".container");
console.log(container);
open.addEventListener("click", () => {
  container.classList.add("show-nav");
});
close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
