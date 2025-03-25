// Получаем элементы
const progressBar = document.getElementById('progressBar');

// Функция для обновления прогресс-бара
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Текущая прокрутка
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Общая высота прокрутки
    const scrolled = (scrollTop / scrollHeight) * 100; // Процент прокрутки

    // Обновляем ширину прогресс-бара
    progressBar.style.width = scrolled + '%';
}

// Слушаем событие прокрутки
window.addEventListener('scroll', updateProgressBar);
// Функция для плавного скролла
function smoothScroll(target) {
    const element = document.querySelector(target); // Находим элемент, к которому нужно прокрутить
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Плавное пролистывание
            block: 'start'      // Выравнивание элемента по верху окна
        });
    }
}

// Добавляем обработчики событий для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const target = this.getAttribute('href'); // Получаем значение атрибута href
        smoothScroll(target); // Прокручиваем к элементу
    });
});
