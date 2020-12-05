const button = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  // Toggle adds and removes, saves time from adding two seperate lines
  search.classList.toggle("active");
  // Cause the search bar to become active
  input.focus();
});
