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




    const heroSection = document.querySelector('.hero');
    const backgroundImages = [
        'hero/hero-image-1.jpg',
        'hero/hero-image-2.jpg',
        'hero/hero-image-3.jpg',
        'hero/hero-image-4.jpg',
    ];
    
    let currentSlide = 0;
    
    // Функція для зміни фону
    function changeBackground() {
        heroSection.style.backgroundImage = `url(${backgroundImages[currentSlide]})`;
    }
    
    // Ініціалізація першого фону
    changeBackground();
    
    // Автоматична зміна фону кожні 5 секунд
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Показуємо наступний слайд
    function nextSlide() {
        currentSlide = (currentSlide + 1) % backgroundImages.length;
        changeBackground();
        resetAutoSlide();
    }
    
    // Показуємо попередній слайд
    function previousSlide() {
        currentSlide = (currentSlide - 1 + backgroundImages.length) % backgroundImages.length;
        changeBackground();
        resetAutoSlide();
    }
    
    // Оновлюємо автоматичне прокручування
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }

//Anime:
// Anime: Анімація для всіх кнопок
document.querySelectorAll('button').forEach(button => {
    // Анімація при наведенні миші
    button.addEventListener('mouseenter', () => {
        anime.remove(button); // Скидаємо попередню анімацію
        anime({
            targets: button,
            scale: 1.2,
            backgroundColor: '#2980b9',
            boxShadow: '0px 10px 20px rgba(41, 128, 185, 0.5)',
            duration: 500,
            easing: 'easeInOutQuad',
        });
    });

    // Анімація при відведенні миші
    button.addEventListener('mouseleave', () => {
        anime.remove(button); // Скидаємо попередню анімацію
        anime({
            targets: button,
            scale: 1,
            backgroundColor: '#3498db',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 500,
            easing: 'easeInOutQuad',
        });
    });

    // Анімація при кліку
    button.addEventListener('click', () => {
        // Скидаємо трансформації перед новою анімацією
        anime.set(button, { scale: 1, rotate: 0 });
        anime.timeline()
            .add({
                targets: button,
                scale: 1.5,
                duration: 300,
                easing: 'easeOutQuad',
            })
            .add({
                targets: button,
                rotate: '1turn',
                duration: 600,
                easing: 'easeInOutSine',
            })
            .add({
                targets: button,
                scale: 1,
                duration: 300,
                easing: 'easeInOutQuad',
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".image-gallery");
    let largeImageContainer = null;

    gallery.addEventListener("click", function (event) {
        const clickedImage = event.target.closest("img"); // Перевіряємо клік по зображенню
        if (!clickedImage) return;

        // Якщо контейнер ще не створено — створюємо його
        if (!largeImageContainer) {
            largeImageContainer = document.createElement("div");
            const largeImage = document.createElement("img");

            // Стилі для контейнера
            largeImageContainer.id = "largeImageContainer";
            largeImageContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            `;
            largeImage.style.maxWidth = "90vw";
            largeImage.style.maxHeight = "90vh";

            largeImageContainer.appendChild(largeImage);
            document.body.appendChild(largeImageContainer);

            // Закриття великого зображення при кліку на контейнер
            largeImageContainer.addEventListener("click", function (event) {
                if (event.target === largeImageContainer) {
                    largeImageContainer.style.display = "none";
                }
            });
        }

        // Відображаємо велике зображення
        const largeImage = largeImageContainer.querySelector("img");
        largeImage.src = clickedImage.src; 
        largeImageContainer.style.display = "flex";
    });
});


//КАЛЬКУЛЯТОР
document.addEventListener("DOMContentLoaded", function () {
    const movieSelect = document.getElementById("movie-select");
    const addTicketBtn = document.getElementById("add-ticket-btn");
    const ticketCountDisplay = document.getElementById("ticket-count");
    const totalPriceDisplay = document.getElementById("total-price-value");

    let ticketCount = 0;
    let ticketPrice = 0;

    // Звук для кнопки
    const clickSound = new Audio("Jet Set Radio.mp3");

    // Оновлення ціни квитка при виборі фільму
    movieSelect.addEventListener("change", function () {
        ticketPrice = parseFloat(movieSelect.value) || 0;
    });

    // Додавання квитка
    addTicketBtn.addEventListener("click", function () {
        if (ticketPrice === 0) {
            alert("Оберіть фільм перед додаванням квитків!");
            return;
        }

        clickSound.play(); // Відтворення звуку

        ticketCount += 1; // Збільшення кількості квитків
        const totalPrice = ticketCount * ticketPrice;

        // Оновлення відображення
        ticketCountDisplay.textContent = ticketCount;
        totalPriceDisplay.textContent = `${totalPrice} грн`;

        // Показуємо спливаюче повідомлення
        showPopupMessage("+100xp за божевільний трюк!");
    });

    // Функція для створення спливаючого повідомлення
    function showPopupMessage(text) {
        const popup = document.createElement("div");
        popup.classList.add("popup-message");
        popup.textContent = text;
        document.body.appendChild(popup);

        // Додаємо клас для анімації появи
        setTimeout(() => popup.classList.add("show"), 100);

        // Прибираємо надпис через 3 секунди
        setTimeout(() => {
            popup.classList.remove("show");
            setTimeout(() => popup.remove(), 500); // Видаляємо елемент з DOM
        }, 3000);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const errorsContainer = document.getElementById("form-errors");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        errorsContainer.innerHTML = ""; // Очищаємо попередні помилки

        // Отримуємо значення полів
        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        let errors = [];

        // Валідація Ім'я та Прізвище
        const nameRegex = /^[a-zA-Zа-яА-Я'-]{3,}$/;
        if (!name) errors.push("Поле 'Ім'я' обов'язкове.");
        else if (!nameRegex.test(name)) errors.push("Ім'я може містити тільки літери, дефіси та апострофи (мінімум 3 символи).");

        if (!surname) errors.push("Поле 'Прізвище' обов'язкове.");
        else if (!nameRegex.test(surname)) errors.push("Прізвище може містити тільки літери, дефіси та апострофи (мінімум 3 символи).");

        // Валідація Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) errors.push("Поле 'Email' обов'язкове.");
        else if (!emailRegex.test(email)) errors.push("Некоректний формат Email.");

        // Валідація Телефону
        const phoneRegex = /^(\+38)?0\d{9}$/;
        if (!phone) errors.push("Поле 'Телефон' обов'язкове.");
        else if (!phoneRegex.test(phone)) errors.push("Телефон має бути у форматі: +380XXXXXXXXX або 0XXXXXXXXX.");

        // Валідація Коментаря
        if (!message) errors.push("Поле 'Коментар' обов'язкове.");

        // Вивід помилок
        if (errors.length > 0) {
            errors.forEach(error => {
                const errorItem = document.createElement("div");
                errorItem.textContent = error;
                errorsContainer.appendChild(errorItem);
            });
        } else {
            errorsContainer.innerHTML = "<div style='color: green;'>Форму успішно надіслано!</div>";
            form.reset();
        }
    });
});
