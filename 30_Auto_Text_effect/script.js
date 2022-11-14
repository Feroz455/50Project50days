const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");

console.log(textEl, speedEl);
const text = "We love Programming";
let index = 1;
let speed = 300 / speedEl.value;

(function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 0;
  setTimeout(writeText, speed);
})();
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
