const counterEl = document.querySelector("#counter");
const decrementEl = counterEl.firstElementChild;
const incrementEl = counterEl.lastElementChild;
const spanEl = document.querySelector("#value");
let counterValue = 0;
decrementEl.addEventListener("click", () => {
  counterValue--;
  spanEl.textContent = counterValue;
});
incrementEl.addEventListener("click", () => {
  counterValue++;
  spanEl.textContent = counterValue;
});
