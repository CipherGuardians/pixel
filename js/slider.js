const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__button--left");
const btnRight = document.querySelector(".slider__button--right");
const sliderDots = document.querySelector(".slider__dots");
let sliderTitle = document.querySelector(".slider__title");
let sliderText = document.querySelector(".slider__text");

let imgLinks = ["url(/img/p4.png)", "url(/img/pixela.jpg)"];

let titles = ["All smartphone come from America", "The phones are all new "];

let texts = [
    "Shipping in Ukraine within 3-5 days",
    "The smartphone must be returned within 14 days of receipt ",
];

let current = 0;
for (let i = 0; i < imgLinks.length; i++) {
    let el = document.createElement("li");
    sliderDots.appendChild(el);
}

function render() {
    slider.style.backgroundImage = imgLinks[current];
    sliderTitle.innerHTML = titles[current];
    sliderText.innerHTML = texts[current];
    sliderDots.children[current].classList.add("selected");
}
render();

function turnLeft() {
    sliderDots.children[current].classList.remove("selected");
    current--;
    if (current < 0) {
        current = imgLinks.length - 1;
    }
    render();
}

function turnRight() {
    sliderDots.children[current].classList.remove("selected");
    current++;
    if (current > imgLinks.length - 1) {
        current = 0;
    }
    render();
}
btnRight.addEventListener("click", turnRight);
btnLeft.addEventListener("click", turnLeft);