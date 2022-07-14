let notification = document.querySelector(".notification")
let closeNotificationButton = document.querySelector(".notification__button")
let indicator = document.querySelector(".notification__indicator")
window.setTimeout(openNotification, 15000)
function openNotification() {
    notification.classList.add("notification--active")
    window.setTimeout(closeNotification, 15000)
    indicator.classList.add("notification__indicator--active")
}
function closeNotification() {
    notification.classList.remove("notification--active")
}
closeNotificationButton.addEventListener('click', closeNotification)