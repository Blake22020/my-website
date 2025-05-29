// Функция для изменения текста и картинки при наведении
function cardbuttons(el, cardId, imageId, newImageSrc) {
    // Меняем текст заголовка
    let cardTitle = document.getElementById(cardId);
    cardTitle.textContent = cardTitle.textContent + " " + el.innerHTML;

    // Меняем картинку
    let cardImage = document.getElementById(imageId);
    cardImage.src = newImageSrc;
}

// Функция для сброса текста и картинки при уходе курсора
function resetText(cardId, defaultText, imageId, defaultImageSrc) {
    // Возвращаем исходный текст заголовка
    let cardTitle = document.getElementById(cardId);
    cardTitle.textContent = defaultText;

}
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.head-buttons').classList.toggle('active');
});