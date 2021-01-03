import './style.css';
import loadPage from './modules/initial-page-load.js';
import loadAbout from './modules/about.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';

loadPage();
const menuIds = ['home', 'about', 'menu', 'contact'];

const switchTab = (module, inputId) => {
const $content = document.querySelector('#content');
const $section = document.querySelector('section');
$content.replaceChild(module, $section);
  menuIds.forEach((id) => {
  if (id === inputId) {
    let currentTab = document.getElementById(id);
    currentTab.classList.add('active');
  } else {
    let otherTab = document.getElementById(id);
    otherTab.classList.remove('active');
  }
  });
}

const aboutLink = document.getElementById('about');
aboutLink.addEventListener('click', () => {
  const about = loadAbout();
  switchTab(about, 'about');
});

const homeLink = document.getElementById('home');
homeLink.addEventListener('click', () => {
  const home = loadHome();
  switchTab(home, 'home');
});

const menuLink = document.getElementById('menu');  
menuLink.addEventListener('click', () => {
  const menu = loadMenu();
  switchTab(menu, 'menu');
});

const contactLink = document.getElementById('contact');
contactLink.addEventListener('click', () => {
  const contact = loadContact();
  switchTab(contact, 'contact');
});  
