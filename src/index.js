import './style.css';
import loadPage from './modules/initial-page-load.js';
import loadAbout from './modules/about.js';
import loadHome from './modules/home.js';


loadPage();

const aboutLink = document.querySelector('#about');
  aboutLink.addEventListener('click', () => {
     loadAbout();
   });

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', () => {
    loadHome();
   });
