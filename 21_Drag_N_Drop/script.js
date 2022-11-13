const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dradStart);

fill.addEventListener("dragend", dradEnd);

fill.addEventListener("dragover", dradOver);

fill.addEventListener("dragenter", dradEnter);

fill.addEventListener("dragleave", dragLeave);

fill.addEventListener("dragdrop", dragDrop);

for (const empty of empties) {
  empty.addEventListener("dragstart", dradStart);
  empty.addEventListener("dragend", dradEnd);
  empty.addEventListener("dragover", dradOver);
  empty.addEventListener("dragenter", dradEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
function dradStart(e) {
  e.target.className += " hold";
  setTimeout(function () {
    e.target.className = " invisible";
  }, 0);
}

function dradEnd(e) {
  e.target.className = "fill";
}

function dradOver(e) {
  e.preventDefault();
}

function dradEnter(e) {
  e.preventDefault();
  e.target.className += " hovered";
}

function dragLeave(e) {
  e.target.className = "empty";
}

function dragDrop(e) {
  e.target.className = "empty";
  e.target.append(fill);
}
