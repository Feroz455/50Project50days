const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;

const update = function () {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
      prev.disabled = false;
      prev.classList.remove("btn:disabled");
      if (currentActive >= circles.length) {
        next.disabled = true;
        next.classList.add("btn:disabled");
      }
    } else {
      circle.classList.remove("active");
      if (currentActive <= 1) {
        prev.disabled = true;
        prev.classList.add("btn:disabled");
      }
      next.disabled = false;
      next.classList.remove("btn:disabled");
    }
    const actives = document.querySelectorAll(".active");
    progress.style.width = `${
      ((actives.length - 1) / (circles.length - 1)) * 100
    }%`;
  });
};



next.addEventListener("click", function () {
  ++currentActive;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", function () {
  --currentActive;
  if (currentActive <= 1) {
    currentActive = 1;
  }
  update();
});
