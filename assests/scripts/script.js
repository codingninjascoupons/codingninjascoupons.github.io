const hamBtn = document.querySelector(".fa-bars");
const navItemsContainer = document.querySelector(".nav-items");
const navItems = document.querySelectorAll(".nav-link");
const courses = document.querySelector(".courses");
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

window.onload = function () {
  fetch("./assests/data/courses.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((course) => {
        let div = document.createElement("div");
        div.classList.add("course-container");
        div.innerHTML = `<h2 class="course-title">${course["course-title"]}</h2>
        <p class="course-desc">
          ${course["course-desc"]}
        </p>`;
        const cards = document.createElement("div");
        cards.classList.add("course-cards");
        course["courses"].forEach((c) => {
          const card = document.createElement("a");
          card.href = c["course-link"];
          card.classList.add("course-card");
          card.innerHTML = `<div class="course-icon">
              <img
                src=${c["course-icon"]}
                alt="Cpp Live logo"
              />
            </div>
            <div class="course-name">${c["course-name"]}</div>
          `;
          cards.appendChild(card);
        });
        div.appendChild(cards);
        courses.appendChild(div);
      });
    });
};
