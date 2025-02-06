import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuOpenBtn = document.querySelector('.burger-menu');
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const orderWindow = document.querySelector('.backdrop');
const orderOpenBtns = document.querySelectorAll('.order-open-btn');
const orderCloseBtn = document.querySelector('.order-modal-close-btn');

const onToggleMenuHandler = () => mobileMenu.classList.toggle('is-open');

menuOpenBtn.addEventListener('click', onToggleMenuHandler);
menuCloseBtn.addEventListener('click', onToggleMenuHandler);

const onToggleOrderHandler = () => orderWindow.classList.toggle('is-open');

orderOpenBtns.forEach(btn =>
  btn.addEventListener('click', onToggleOrderHandler)
);
orderCloseBtn.addEventListener('click', onToggleOrderHandler);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
