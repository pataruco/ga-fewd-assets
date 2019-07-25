const openButton = document.getElementById('js-menu-open');
const closeButton = document.getElementById('js-menu-close');

const toggleMenu = event => {
  event.preventDefault();
  document.body.classList.toggle('menu-open');
};

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
