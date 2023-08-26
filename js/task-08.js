const formEl = document.querySelector(".login-form");
const buttonEl = document.querySelector("button");
const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log(name);
    console.log(value);
  });
}
