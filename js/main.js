const items = {
  sage: {
    name: 'Sage-chair',
    price: 130,
    type: 'chair',
    image: 'images/green-chair.jpg',
    amount: 0
  },
  darkmist: {
    name: 'Darkmist-sofa',
    price: 670,
    type: 'sofa',
    image: 'images/blue-sofa.jpg',
    amount: 0
  },
  shiny: {
      name: 'Shiny-lamps',
      price: 110,
      type: 'lamp',
      image: 'images/lamps.jpg',
      amount: 0
  },
  snowfall: {
      name: 'Snowfall-chair',
      price: 120,
      type: 'chair',
      image: 'images/beige-chair.jpg',
      amount: 0
  },
  blush: {
      name: 'Blush-sofa',
      price: 230,
      type: 'chair',
      image: 'images/pink-chair.jpg',
      amount: 0
  },
  fair: {
      name: 'Fair-table',
      price: 135,
      type: 'table',
      image: 'images/white-table.jpg',
      amount: 0
  }
};

if (!localStorage.getItem('cartItems')) {
  const cartItems = [];
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function openShop() {
  window.location.href = 'shop.html';
}

function openCart() {
  window.location.href = 'cart.html';
}

function openHome() {
  window.location.href = 'index.html';
}

function openItem(item) {
  if (!localStorage.getItem(`${item}`)) {
    localStorage.setItem(`${item}`, JSON.stringify(items[item]));
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems.push(`${item}`);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  localStorage.setItem(`itemName`, JSON.stringify(item));
  window.location.href = 'item.html';
}

document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");
});
