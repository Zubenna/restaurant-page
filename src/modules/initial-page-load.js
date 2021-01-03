const createNav = () => {
const menus = ['HOME', 'ABOUT', 'MENU', 'CONTACT']
const navItem = document.createElement('nav');
const listBox = document.createElement('ul');
  menus.forEach((item) => {
    listBox.innerHTML += ` <li><a href="#" id='${item.toLowerCase()}'>${item}</a></li>`;
  });
    navItem.appendChild(listBox);  
  return navItem;
}

const createPageTitle = () => {
const homeSection = document.createElement('section');
const titleBox = document.createElement('div');
  titleBox.className = 'page-title';
const title = document.createElement('h1');
  title.innerHTML = "DE'ZYNO RESTAURANT";
  titleBox.appendChild(title);
const subTitle = document.createElement('h2');
  subTitle.innerHTML = "Home of delicious and healthy meals";
  titleBox.appendChild(subTitle);
  homeSection.appendChild(titleBox);
  return homeSection;
}

const createFooter = () => {
const pageFooter = document.createElement('footer');
const footerText = document.createElement('p');
  footerText.innerHTML = '&copy 2020 Developed by zubenna';
  pageFooter.appendChild(footerText);
  return pageFooter;
}

const loadPage = () => {
const body = document.querySelector('body');
const content = document.querySelector('#content');
  content.appendChild(createNav());
  body.classList.add('bg_style');
  content.appendChild(createPageTitle());
  content.appendChild(createFooter());
}

export default loadPage;