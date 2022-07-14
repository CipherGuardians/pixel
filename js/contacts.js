let contacts = document.querySelector(".contacts--header")
let contactsOpenButton = document.querySelector(".nav__link--contacts")
function openContacts(e) {
    e.preventDefault()
    contacts.classList.toggle("contacts--active")
    contactsOpenButton.classList.toggle("nav__link--active")
}
contactsOpenButton.addEventListener('click', openContacts)
