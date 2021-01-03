
const createContact = () => {
const contactBox = document.createElement('section');
  contactBox.classList.add('section');
const contactDiv = document.createElement('div');
  contactDiv.id = 'contactPage';
const contactContent = document.createElement('p');
  contactContent.innerHTML = `Office Address: 222 Bony Road, opposite Equity bank,
                              Port Harcourt city county, Rivers State
                              Nigeria.`
  contactDiv.appendChild(contactContent);
  contactBox.appendChild(contactDiv);
  return contactBox;
}
    
const loadContact = () => {
  return createContact();
}
    
export default loadContact;