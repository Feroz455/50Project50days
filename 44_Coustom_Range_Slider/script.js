const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = Number(e.target.value);
  const label = e.target.nextElementSibling;
  label.innerHTML = value;
  const range_width = parseInt(getComputedStyle(e.target).width);
  const label_width = parseInt(getComputedStyle(label).width);
  const max = +e.target.max;
  const min = +e.target.min;
  const left =
    value * (range_width / max) -
    label_width / 2 +
    scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
