// Navigation toggle
const navigation = document.querySelector("#navigation");
const menuToggle = document.querySelector(".toggle");
const ul = document.querySelector(".nav-ul-wrapper");

// add aria expanded properties*

// remove active class when clicking on a mobile link
window.addEventListener("click", (e) => {
     if (e.target.matches("a")) {
          menuToggle.classList.remove("active");
          navigation.classList.remove("active");
     }
});

menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("active");
     navigation.classList.toggle("active");
});

// function to set aria
function setAria() {
     const isExpanded = ul.getAttribute("aria-expanded")

     if (isExpanded) {
          ul.setAttribute("aria-expanded", "false");
     } else {
          ul.setAttribute("aria-expanded", "true");
     }
};