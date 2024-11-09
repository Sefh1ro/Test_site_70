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


const imgURLArr = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.png',
    'img/9.png',
    'img/10.png',
    'img/11.png',
    'img/12.png',
    'img/13.png',
    'img/14.png'
];

// Знаходимо галерею і спінер
const gallery = document.querySelector(".image-gallery");
const spinner = document.getElementById("spinner");

const promiseArr = imgURLArr.map(url => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add("picture", "hidden");

        // Завантаження успішне
        img.addEventListener("load", () => {
            resolve(img);
        });

        // Завантаження не вдалося
        img.addEventListener("error", () => {
            reject(`Помилка завантаження зображення: ${url}`);
        });
    });
});

// Чекаємо на завантаження всіх зображень
Promise.all(promiseArr)
    .then(images => {
        spinner.style.display = "none"; // Приховуємо спінер
        images.forEach(img => {
            img.classList.remove("hidden");
            img.classList.add("show");
            gallery.appendChild(img); // Додаємо зображення в галерею
        });
    })
    .catch(error => {
        spinner.innerHTML = error; // Виводимо повідомлення про помилку
    });
