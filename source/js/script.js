var menu = document.querySelector('.main-menu');
var burger = document.querySelector('.burger');

menu.classList.remove('menu-list--nojs');

burger.addEventListener('click', function () {
  if (menu.classList.contains('menu-list--closed')) {
    menu.classList.remove('menu-list--closed');
    menu.classList.add('menu-list--opened');
  } else {
    menu.classList.remove('menu-list--opened');
    menu.classList.add('menu-list--closed');
  }
})

burger.addEventListener('click', function () {
  if (burger.classList.contains('burger--close')) {
    burger.classList.remove('burger--close');
    burger.classList.add('burger--open');
  } else {
    burger.classList.remove('burger--open');
    burger.classList.add('burger--close');
  }
})
