const smallCups = document.querySelectorAll(".cup-small");
const litters = document.querySelector("#liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector("#remained");

function updateMainCup() {
  const mainCup = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  console.log(mainCup);
  if (mainCup === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(mainCup / totalCups) * 330}px`;
    percentage.innerText = `${(mainCup / totalCups) * 100}%`;
  }
  if (mainCup === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    litters.innerText = `${2 - (250 * mainCup) / 1000}L`;
  }
}

function highligtCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling?.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, idx) => {
    if (idx <= index) cup.classList.add("full");
    else cup.classList.remove("full");
  });
  updateMainCup();
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highligtCups(idx));
});
