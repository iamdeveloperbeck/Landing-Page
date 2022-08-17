import './css/style.css';
import './css/globals.css';


const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-mobile');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('show');
});