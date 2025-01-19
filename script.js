// Инициализация анимаций с помощью библиотеки AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Длительность анимации
        once: true, // Анимации показываются только один раз при прокрутке
        easing: 'ease-in-out', // Тип easing для анимаций
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
