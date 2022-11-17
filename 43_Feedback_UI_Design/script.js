const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");

const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "";

ratingsContainer.addEventListener("click", selectAction);
function selectAction(event) {
  if (
    event.target.parentNode.classList.contains("rating") &&
    event.target.nextElementSibling
  ) {
    removeActive();
    event.target.parentNode.classList.add("active");
    selectedRating = event.target.nextElementSibling.innerHTML;
    console.log(event.target.parentNode);
  }
}
function removeActive() {
  ratings.forEach((btn) => {
    btn.classList.remove("active");
  });
}
sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
  `;
});
