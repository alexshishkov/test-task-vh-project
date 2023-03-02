import './style.sass';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');

function openMenu() {
	(menu as HTMLElement).classList.remove('menu__close');
	(menu as HTMLElement).classList.add('menu__open');
}

function closeMenu() {
	(menu as HTMLElement).classList.remove('menu__open');
	(menu as HTMLElement).classList.add('menu__close');
	console.log(menu?.classList.value)
}

(burger as HTMLElement).addEventListener('click', openMenu);
(close as HTMLElement).addEventListener('click', closeMenu);
