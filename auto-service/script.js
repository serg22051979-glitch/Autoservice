const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});


// Закрываем мобильное меню после выбора пункта

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });

});


// Быстрая форма

const quickForm = document.getElementById("quickForm");
const formMessage = document.getElementById("formMessage");

quickForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Спасибо! Заявка отправлена.";

    quickForm.reset();

});


// Основная форма записи

const bookingForm = document.getElementById("bookingForm");
const bookingMessage =
    document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    bookingMessage.textContent =
        "Спасибо! Мы свяжемся с вами для подтверждения записи.";

    bookingForm.reset();

});
