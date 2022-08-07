const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menus');
const social = document.querySelector('.socials');

const classes = menu.classList;

const clickHandler = () => {
  menu.classList.toggle('unshow');
  social.classList.toggle('unshow');
};

hamburger.addEventListener('click', clickHandler);
