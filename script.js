document.addEventListener('DOMContentLoaded', function () {
	const burger = document.getElementById('burger')
	const menu = document.querySelector('.head-buttons')

	burger.addEventListener('click', function () {
		this.classList.toggle('active')
		menu.classList.toggle('active')

		// Блокировка прокрутки при открытом меню
		if (menu.classList.contains('active')) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	})

	// Закрытие меню при клике на ссылку
	const menuLinks = document.querySelectorAll('.head-button')
	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			burger.classList.remove('active')
			menu.classList.remove('active')
			document.body.style.overflow = ''
		})
	})
})

const body = document.body

document.addEventListener('DOMContentLoaded', function () {
	body.classList.add('noscroll')
})

let modal = document.getElementById('Modal')

function acceptAction() {
	const modal = document.getElementById('Modal')
	modal.style.display = 'none' // Скрываем модальное окно
	body.classList.remove('noscroll') // Возвращаем возможность прокручивания страницы
}
