const officeLocation = {
  location: `222 Bony Road, opposite Equity bank,
             Port Harcourt city county, Rivers State Nigeria.`,
  email: 'restaurant@dezyno.org',
  phone: '+234 9086 656 844',
};

const createContact = () => {
  const locationAdd = document.createElement('h2');
  locationAdd.id = 'contact-h2';
  locationAdd.innerHTML = 'Contact Detail';
  const contactDiv = document.createElement('div');
  contactDiv.id = 'contactPage';
  const addressText = document.createElement('p');
  addressText.innerHTML = `<span>Address</span>: ${officeLocation.location}`;
  const contactEmail = document.createElement('p');
  contactEmail.innerHTML = `<span>Email</span>:  ${officeLocation.email}`;
  const contactPhone = document.createElement('p');
  contactPhone.innerHTML = `<span>Phone</span>:  ${officeLocation.phone}`;
  locationAdd.appendChild(contactDiv);
  contactDiv.appendChild(addressText);
  addressText.appendChild(contactEmail);
  contactEmail.appendChild(contactPhone);
  return locationAdd;
};

const loadContact = () => {
  const contactBox = document.createElement('section');
  contactBox.classList.add('section');
  contactBox.appendChild(createContact());
  return contactBox;
};

export default loadContact;