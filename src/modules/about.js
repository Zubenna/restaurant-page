const createAbout = () => {
const aboutBox = document.createElement('section');
      aboutBox.classList.add('section');
const aboutDiv = document.createElement('div');
      aboutDiv.id = 'aboutPage';
const aboutContent = document.createElement('p');
      aboutContent.innerHTML = `DE'ZYNO RESTAURANT is the first restaurant located in Eliowhani city county.
                               This restaurant was established in 1998. We are specialist in serving delicious, healthy and organic food.
                               We care so much for your health. That is why our dieticians work so hard to ensure that you eat healthy meals in 
                               our restaurant. Our management ensures that quality is maintained always. Our staff are well taken care of to ensure
                               that they serve you well.`
       aboutDiv.appendChild(aboutContent);
       aboutBox.appendChild(aboutDiv);
 return aboutBox;
}

const loadAbout = () => {
const content = document.querySelector('#content');
const $pageTitle = document.querySelector('.page-title');
$pageTitle.innerHTML = '';
content.appendChild(createAbout());
}

export default loadAbout;