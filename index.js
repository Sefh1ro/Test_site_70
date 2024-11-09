let headerEl = document.getElementById("header"); // Знаходимо елемент з ID "header"

// Додаємо обробник події "scroll" до вікна браузера
window.addEventListener("scroll", function() {
    const scrollPos = window.scrollY; // Отримуємо поточну позицію прокрутки
    if (scrollPos > 1) { // Якщо прокрутка більше 1 пікселя
        headerEl.classList.add("fixed"); // Додаємо клас "fixed" до header
    } else { // Якщо прокрутка менше або дорівнює 1 пікселю
        headerEl.classList.remove("fixed"); // Видаляємо клас "fixed" з header
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Елементи бургер-меню
    let showMenu = document.querySelector("#show-menu");
    let hiddenMenu = document.querySelector("#hidden-menu");
    let closeButton = document.querySelector(".close");

    // Перевірка ширини вікна для відображення/приховування бургер-меню
    function toggleBurgerMenu() {
        if (window.innerWidth <= 992) {
            showMenu.style.display = "block";
        } else {
            showMenu.style.display = "none";
            hiddenMenu.style.right = "-300px"; // Закриваємо меню на десктопі
        }
    }

    // Ініціалізація видимості бургер-меню
    toggleBurgerMenu();

    // Додаємо обробники подій для зміни ширини вікна
    window.addEventListener("resize", toggleBurgerMenu);

    // Обробник для відкриття прихованого меню
    showMenu.addEventListener("click", function() {
        hiddenMenu.style.right = "0";
    });

    // Обробник для закриття прихованого меню
    closeButton.addEventListener("click", function() {
        hiddenMenu.style.right = "-300px";
    });
});
