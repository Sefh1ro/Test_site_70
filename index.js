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
