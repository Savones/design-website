// localStorage.clear()

const items = {
  sage: {
    name: 'Sage-chair',
    price: 130,
    type: 'Chairs',
    image: 'images/green-chair.jpg',
    amount: 0
  },
  darkmist: {
    name: 'Darkmist-sofa',
    price: 670,
    type: 'Sofas',
    image: 'images/blue-sofa.jpg',
    amount: 0
  },
  shiny: {
      name: 'Shiny-lamps',
      price: 110,
      type: 'Lamps',
      image: 'images/lamps.jpg',
      amount: 0
  },
  snowfall: {
      name: 'Snowfall-chair',
      price: 120,
      type: 'Chairs',
      image: 'images/beige-chair.jpg',
      amount: 0
  },
  blush: {
      name: 'Blush-sofa',
      price: 230,
      type: 'Sofas',
      image: 'images/pink-chair.jpg',
      amount: 0
  },
  fair: {
      name: 'Fair-table',
      price: 135,
      type: 'Tables',
      image: 'images/white-table.jpg',
      amount: 0
  },
  sunshine: {
      name: 'Sunshine-sofa',
      price: 720,
      type: 'Sofas',
      image: 'images/yellow-sofa.jpg',
      amount: 0
  },
  light: {
      name: 'Light-shelf',
      price: 215,
      type: 'Tables',
      image: 'images/tv-table.jpg',
      amount: 0
  },
  marshmallow: {
      name: 'Marshmallow-lamp',
      price: 90,
      type: 'Lamps',
      image: 'images/hat-lamp.jpg',
      amount: 0
  },
  pedal: {
      name: 'Pedal-sofa',
      price: 680,
      type: 'Sofas',
      image: 'images/white-sofa.jpg',
      amount: 0
  },
  honey: {
      name: 'Honey-shelf',
      price: 240,
      type: 'Tables',
      image: 'images/wooden-shelf.jpg',
      amount: 0
  },
  windy: {
      name: 'Windy-chair',
      price: 110,
      type: 'Chairs',
      image: 'images/rocking-chair.jpg',
      amount: 0
  }
};

if (!localStorage.getItem('types')) {
  const types = ['Chairs', 'Tables', 'Lamps', 'Sofas'];
  localStorage.setItem('types', JSON.stringify(types));
}

if (!localStorage.getItem('allItems')) {
  localStorage.setItem('allItems', JSON.stringify(items));
}

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

// new in shop slider

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slider = document.querySelector('.new-items');
const sliderWidth = slider.offsetWidth;
const sliderItemWidth = 300 + 20; // Image width + margin
const numOriginalItems = slider.children.length / 2; // Number of original items
const initialPosition = Math.floor(numOriginalItems / 2); // Initial position for center alignment
let currentPosition = initialPosition;

// Initialize slider position
updateSliderPosition();

nextButton.addEventListener('click', () => {
    currentPosition = (currentPosition + 1) % numOriginalItems;
    updateSliderPosition();
});

prevButton.addEventListener('click', () => {
    currentPosition = (currentPosition - 1 + numOriginalItems) % numOriginalItems;
    updateSliderPosition();
});

function updateSliderPosition() {
    const offset = -currentPosition * sliderItemWidth + sliderWidth / 2 - sliderItemWidth / 2;
    slider.style.transform = `translateX(${offset}px)`;
}