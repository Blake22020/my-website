document.addEventListener('DOMContentLoaded', () => {

    // Текст во 2 секции
    let text1 = "I’m actively learning this skill";
    let text2 = "I know the basics of this skill";

    let text = document.getElementById('aboutSkill');
    let cards = document.getElementsByClassName('card');
    let space = document.getElementById('space')

    Array.from(cards).forEach(card => {
        let mode;
        if (card.classList.contains('main')) {
            mode = "main";
        } else {
            mode = "prim";
        }

        card.addEventListener('mouseenter', () => {
            space.style.display = "none";
            if (mode === "main") {
                text.innerHTML = text1;
                text.classList.add('mainText');
            } else {
                text.innerHTML = text2;
                text.classList.add('primText')
            }
        })

        card.addEventListener('mouseout', () => {
            if (space.style.display === "none") {
                space.style.display = "block";
            }
            if (mode === "main") {
                text.classList.remove('mainText');
            } else {
                text.classList.remove('primText')
            }

            text.innerHTML = "";
        })
    })

    // Анимация бургера
    let burger = document.getElementById('burger');
    let menu = document.getElementById('menu');
    let menuButtons = document.querySelectorAll('header .menu a');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menu.classList.remove('active');
            burger.classList.remove('active');
        })
    })
})