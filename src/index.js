import './style.css';
import loadPage from './modules/initial-page-load.js';
import loadAbout from './modules/about.js';

const loadComponent = () => {
  loadPage();
const aboutLink = document.querySelector('#about');
  aboutLink.addEventListener('click', () => {
    loadAbout();
  });
}
document.body.appendChild(loadComponent());


