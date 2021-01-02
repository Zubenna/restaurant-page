const loadHome = () => {
const $content = document.querySelector('#content');
const pageSection = document.querySelector('section');

const $titleBox = document.createElement('div');
  $titleBox.className = 'page-title';
const $title = document.createElement('h1');
  $title.innerHTML = "DE'ZYNO RESTAURANT";
  $titleBox.appendChild($title);
const $subTitle = document.createElement('h2');
  $subTitle.innerHTML = "Home of delicious and healthy meals";
  $titleBox.appendChild($subTitle);
  $content.replaceChild($titleBox, pageSection);
  return $content;
}
export default loadHome;