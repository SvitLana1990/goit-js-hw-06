const categoriesEl = document.querySelector("#categories");
const itemEls = categoriesEl.querySelectorAll(".item");
const totalItem = itemEls.length;
console.log("Number of categories: ", totalItem);

const secondTitleEls = document.querySelectorAll("h2");

secondTitleEls.forEach(function (element, index) {
  console.log("Category: ", element.textContent);
  const totalElements = itemEls[index].querySelectorAll("li").length;
  console.log("Elements: ", totalElements);
});