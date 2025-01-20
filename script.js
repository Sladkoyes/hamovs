// Инициализация анимаций с помощью библиотеки AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Длительность анимации
        once: true, // Анимации показываются только один раз при прокрутке
        easing: 'ease-in-out', // Тип easing для анимаций
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    const modal = document.getElementById('orderModal');
    const closeModal = document.getElementById('closeModal');

    // Открытие модального окна при нажатии на кнопку "Պատվիրել"
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block'; // Показываем модальное окно
        });
    });

    // Закрытие модального окна при нажатии на крестик
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Скрываем модальное окно
    });

    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Скрываем модальное окно
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openEventButton = document.querySelector('.open-event-btn');
    const eventPopup = document.getElementById('eventPopup');
    const closeEventPopupButton = document.getElementById('closeEventPopup');

    // Открытие модального окна при нажатии на кнопку
    openEventButton.addEventListener('click', function() {
        eventPopup.style.display = 'block'; // Показываем окно
    });

    // Закрытие модального окна при нажатии на крестик
    closeEventPopupButton.addEventListener('click', function() {
        eventPopup.style.display = 'none'; // Скрываем окно
    });

    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === eventPopup) {
            eventPopup.style.display = 'none'; // Скрываем окно
        }
    });
});


// Скрипт для анимации кнопки и изображения
document.getElementById('menuButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Анимация кнопки (спускаем ее вниз)
    this.classList.add('moving');
    setTimeout(() => {
        // Прячем кнопку, когда она достигнет конца
        this.style.display = 'none';
    }, 600);  // Параметры таймаута соответствуют длительности анимации
    
    // Заменяем изображение
    const imageContainer = document.querySelector('.image-container');
    const image = document.querySelector('.hero-image');
    image.classList.add('image-animate');
});

