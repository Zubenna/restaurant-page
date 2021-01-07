const createHomePage = () => {
  const homeSection = document.createElement('section');
  const titleBox = document.createElement('div');
  titleBox.className = 'page-title';
  const title = document.createElement('h1');
  title.innerHTML = "DE'ZYNO RESTAURANT";
  titleBox.appendChild(title);
  const subTitle = document.createElement('h2');
  subTitle.innerHTML = 'Home of delicious and healthy meals';
  titleBox.appendChild(subTitle);
  homeSection.appendChild(titleBox);
  return homeSection;
};

const loadHome = () => createHomePage();

export default loadHome;