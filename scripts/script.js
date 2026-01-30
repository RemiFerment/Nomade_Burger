const burgerButton = document.querySelector('#nav-burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-close');



burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('active-burger');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active-burger');
});

