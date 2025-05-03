
const burger = document.querySelector('.header__burger');
const sideMenu = document.querySelector('.side-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sideMenu.classList.toggle('active');
});
