let sections = document.querySelectorAll(".menu__section");
let icons = document.querySelectorAll(".menu__icon");
let buttons = document.querySelectorAll(".menu__button");
sections.forEach((element, index) => {
    buttons[index].addEventListener("click", () => {
        element.classList.toggle("menu__section--active");
        icons[index].classList.toggle("menu__icon--active");
    });
});