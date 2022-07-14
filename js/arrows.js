let arrowUp = document.querySelector(".up")

function scrollPage1() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
arrowUp.addEventListener("click", scrollPage1)