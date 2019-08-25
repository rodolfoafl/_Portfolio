//Get modal element
const modal = document.querySelector("#simpleModal");

//Get modal button
const modalBtn = document.querySelector("#modalBtn");

//Get close button
const closeBtn = document.querySelector(".closeBtn");

//Open button listen for click
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

//Close button listen for click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//Listen for outside click
window.addEventListener("click", e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
