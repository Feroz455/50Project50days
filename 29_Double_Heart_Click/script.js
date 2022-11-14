const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("dblclick", function (e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  heart.style.left = `${e.clientX - e.target.offsetLeft}px`;
  heart.style.top = `${e.clientY - e.target.offsetTop}px`;
  console.log(heart.style.left, heart.style.top);
  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
});
