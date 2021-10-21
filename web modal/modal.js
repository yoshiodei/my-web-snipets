let modalBg = document.querySelector(".modal-bg");
let closeButton = modalBg.querySelector(".modal-card__btn");
let openButton = document.querySelector(".activate");

closeButton.addEventListener('click', e => {
    modalBg.classList.remove("show");
});

openButton.addEventListener('click', e => {
    modalBg.classList.add("show");
});

modalBg.addEventListener('click', e => {
    (modalBg === e.target) ?  modalBg.classList.remove("show") : null;
});