document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.head-buttons');
    const modal = document.getElementById('Modal');
    const body = document.body;

    // Проверяем, был ли пользователь уже на сайте и согласие получено
    const isModalAccepted = localStorage.getItem('modalAccepted');

    // Если согласия нет - показываем модалку и блокируем скролл
    if (!isModalAccepted) {
        modal.style.display = 'flex'; // Используем flex, чтобы модалка была видна
        body.classList.add('noscroll');
    } else {
        modal.style.display = 'none'; // Скрываем, если уже согласен
        body.classList.remove('noscroll');
    }

    // Обработчик для бургер-меню
    if (burger && menu) {
        burger.addEventListener('click', function () {
            this.classList.toggle('active');
            menu.classList.toggle('active');

            // Блокировка прокрутки при открытом меню
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Закрытие меню при клике на ссылку
        const menuLinks = document.querySelectorAll('.head-button');
        menuLinks.forEach(link => {
            link.addEventListener('click', function () {
                burger.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    } else {
        console.error('Бургер или меню не найдены, ты совсем идиот?');
    }

    // Функция принятия соглашения
    window.acceptAction = function () {
        localStorage.setItem('modalAccepted', 'true'); // Сохраняем в localStorage
        modal.style.display = 'none';
        body.classList.remove('noscroll');
    };
});