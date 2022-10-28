const hamBtn = document.querySelector(".fa-bars");
const navItemsContainer = document.querySelector(".nav-items");
const navItems = document.querySelectorAll(".nav-link");
const courses = document.querySelector(".courses");
const premium = document.querySelector(".premium-courses");
const offerings = document.querySelector(".offerings");
const features = document.querySelector(".features-cards");
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
  fetch("./assests/data/premium-courses.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((c) => {
        const pcard = document.createElement("a");
        pcard.href = c["course-link"];
        pcard.classList.add("course-card");
        pcard.innerHTML = `
        <div class="course-icon">
            <img src=${c["course-icon"]} alt="Logo" />
          </div>
          <div class="course-name">${c["course-name"]}</div>
        `;
        premium.appendChild(pcard);
      });
    });
  fetch("./assests/data/premium-offerings.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((el) => {
        const offCard = document.createElement("div");
        offCard.classList.add("offering-card");
        offCard.innerHTML = `
        <div class="icon">
            <img
              src="${el["icon"]}"
              alt="icon"
            />
          </div>
          <div class="title">${el["title"]}</div>
          <div class="desc">
          ${el["desc"]}
          </div>
          `;
        offerings.appendChild(offCard);
      });
    });
  fetch("./assests/data/features.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((feature) => {
        const ft = document.createElement("div");
        ft.classList.add("feature-card");
        ft.innerHTML = `<div class="icon">
        <img
          src=${feature["icon"]}
          alt="features icons"
        />
      </div>
      <div class="title">${feature["title"]}</div>
      <div class="desc">
       ${feature["desc"]}
      </div>
        `;
        features.appendChild(ft);
      });
    });
};
