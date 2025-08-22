document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById('typed-text');
    const text = "GBlake";
    let index = 0;
    let pause = 100;

    function typeWriter() {
        if (index <= text.length) {
            if (index === text.length) {
                // Полностью набран текст, делаем паузу перед очисткой
                setTimeout(() => {
                    eraseText();
                }, Math.floor(Math.random() * 3000 + 2000)); // Пауза случайная от 2 до 5 секунд
            } else {
                typedText.textContent += text.charAt(index++);
                setTimeout(typeWriter, pause);
                
                // Обновление задержки в зависимости от индекса
                switch (index) {
                    case 1:
                        pause = 100;
                        break;
                    case 2:
                        pause = 150;
                        break;
                    case 3:
                        pause = 300;
                        break;
                    case 4:
                        pause = 1000;
                        break;
                    case 5:
                        pause = 50;
                }
            }
        }
    }

    function eraseText() {
        if (index > 0) { // Проверяем, остались ли символы для стирания
            typedText.textContent = text.substring(0, index--); // Удаляем последний символ
            setTimeout(eraseText, 50); // Задержка удаления каждого символа
        } else {
            typedText.textContent = ""; // Очищаем текст, если он полностью удален
            // Все символы стерты, начинаем новый цикл
            index = 0; // Важно сбросить индекс на начало!
            setTimeout(() => {
                typeWriter(); // Начинаем набор текста заново
            }, 1000); // Дополнительная пауза перед новым циклом (можно удалить)
        }
    }

    typeWriter(); // Запускаем процесс впервые
});