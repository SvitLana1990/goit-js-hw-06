const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = formEl;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All fields must be filled!");
  } else {
    let formData = { email: email.value, password: password.value };
    console.log(formData);
  }
  formEl.reset();
}
