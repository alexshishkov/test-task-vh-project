import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
}

(burger as HTMLElement).addEventListener('click', openMenu);
(close as HTMLElement).addEventListener('click', closeMenu);

const mySwiper = new Swiper('.swiper-container', {
	modules: [Navigation, Pagination],
	loop: true,
	navigation: {
		nextEl: '.slider__control-left',
		prevEl: '.slider__control-right',
	},
	allowTouchMove: false,
});
