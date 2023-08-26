const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
buttonEl.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  console.log(spanEl);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
