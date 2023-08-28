const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", handlerChangeFocus);
function handlerChangeFocus(event) {
  const inputValidationLength = inputEl.dataset.length;
  const inputCurrentLength = inputEl.value.length;
  if (inputCurrentLength === Number(inputValidationLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
