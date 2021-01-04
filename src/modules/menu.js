const foodList = [
  {
    name: 'Fried Rice',
    detail: 'Rice with Chicken',
    price: 200,
  },

  {
    name: 'Jaloof Rice',
    detail: 'Rice with Beef',
    price: 150,
  },

  {
    name: 'White Rice',
    detail: 'Rice with stew, Fish',
    price: 300,
  },

  {
    name: 'Native Soup',
    detail: 'Soup with Fufu, and Fish',
    price: 500,
  },

  {
    name: 'Egusi Soup',
    detail: 'Soup with Pounded Yam and Beef',
    price: 350,
  },

  {
    name: 'Ogbono Soup',
    detail: 'Soup with Semovita and Goat Meat',
    price: 400,
  },

  {
    name: 'Beans',
    detail: 'Beans with Fried Plantain and Fish',
    price: 300,
  },

  {
    name: 'Yam',
    detail: 'Yam with Chicken pepper soup',
    price: 300,
  },
];

const dessert = [
  {
    name: 'Abacha',
    detail: 'Ganished with Ugba',
    price: 500,
  },

  {
    name: 'Isi Ewu',
    detail: 'Ganished with Nkwobi',
    price: 550,
  },
  
  {
    name: 'Fruit Salad',
    detail: 'Carrot, Cabbage, Apple, Cucumber',
    price: 650,
  },

  {
    name: 'Fruit Juice',
    detail: 'Assorted',
    price: 600,
  },
];

const createMenu = (foodList, foodGroup) => {
  const menuType = document.createElement('h1');
    menuType.innerHTML = foodGroup;
  const menuDiv = document.createElement('div');
    menuDiv.className = 'row';
  foodList.forEach((food) => {
    const menuItem = document.createElement('div');
      menuItem.className = 'col-sm-12 col-md-6';
    const menuName = document.createElement('h4');
      menuName.innerHTML = food.name;
      menuItem.appendChild(menuName);
    const menuDetail = document.createElement('h5');
      menuDetail.innerHTML = food.detail;
      menuItem.appendChild(menuDetail);
    const menuPrice = document.createElement('h6');
      menuPrice.innerHTML = `N${food.price}`;
      menuItem.appendChild(menuPrice);
      menuDiv.appendChild(menuItem);
  });
  menuType.appendChild(menuDiv);
  return menuType;
};

const loadMenu = () => {
  const menuBox = document.createElement('section');
    menuBox.id = 'menuSection';
    menuBox.classList.add('section');
  const fGroup = createMenu(foodList, 'Main Food');
    menuBox.appendChild(fGroup);
  const fGroup2 = createMenu(dessert, 'Dessert');
    menuBox.appendChild(fGroup2);
  return menuBox;
};

export default loadMenu;