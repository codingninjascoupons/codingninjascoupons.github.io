const hamBtn = document.querySelector(".fa-bars");
const navItemsContainer = document.querySelector(".nav-items");
const navItems = document.querySelectorAll(".nav-link");

// Event Listeners

hamBtn.onclick = function () {
  navItemsContainer.classList.toggle("show");
};
navItems.forEach((item) => {
  item.onclick = () => {
    navItemsContainer.classList.remove("show");
    item.parentElement.classList.add("active");
    toggleUnderline(item);
  };
});

//  Handy Functions

function toggleUnderline(item) {
  navItems.forEach((el) => {
    if (el !== item) {
      el.parentElement.classList.remove("active");
    }
  });
}
