
drawAllItems()
drawCards()

// Draw all items

function drawAllItems() {
    const itemsGrid = document.querySelector('.grid-container');
    const allItems = JSON.parse(localStorage.getItem('allItems'));
    for (const key in allItems) {
        itemsGrid.innerHTML += `
        <div class="grid-item" onclick="openItem('${key}')">
        <img src="${allItems[key].image}" alt="flowers">
        <div class="item-container">
          <p>${allItems[key].name}</p>
          <p>${allItems[key].price} €</p>
        </div>
      </div>`

    }
}

// Finds search items and draws them

function searchType(searchType, method) {
    const itemsGrid = document.querySelector('.grid-container');
    const allItems = JSON.parse(localStorage.getItem('allItems'));
    
    if (method === '2') {
        itemsGrid.innerHTML = '';
    }
    for (const key in allItems) {
        if (String(allItems[key].type) === String(searchType)) {
            console.log(allItems[key].name);
            itemsGrid.innerHTML += `
            <div class="grid-item" onclick="openItem('${key}')">
            <img src="${allItems[key].image}" alt="flowers">
            <div class="item-container">
            <p>${allItems[key].name}</p>
            <p>${allItems[key].price} €</p>
            </div>
            </div>`
        }
    }
    cards.forEach(card => {
        card.classList.remove('show-card');
    });
    if (method === '2') {
        handleSearchBar(searchType);
    }
}

// Handle changes to searchbar

function handleSearchBar(searchType) {
    searchInput.value = `${searchType}`;
}

// Makes the cards

function drawCards() {
    const searchOptions = document.querySelector('.search-options');
    const types = JSON.parse(localStorage.getItem('types'));
    for (const type in types) {
        searchOptions.innerHTML += `
        <div onclick="searchType('${types[type]}', '2')" class="card">
          <h3>${types[type]}</h3>
        </div>
        `
    }
}

// Search Press

function searchPress() {
    const searchText = searchInput.value.toLowerCase();
    const types = JSON.parse(localStorage.getItem('types'));
    const itemsGrid = document.querySelector('.grid-container');
    itemsGrid.innerHTML = '';
    
    types.forEach(type => {
        if (type.toLowerCase().includes(searchText)) {
            searchType(type, '1');
        }
    });
}

// Searching hiding and showing cards

const searchInput = document.querySelector('.shop-search');
const categories = document.querySelectorAll('h3');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', e => {
  const searchText = e.target.value.toLowerCase();
  
  cards.forEach(card => {
    const category = card.querySelector('h3');
    if (searchText === '') {
      card.classList.remove('show-card');
    } else if (category.textContent.toLowerCase().includes(searchText)) {
      card.classList.add('show-card');
    } else {
      card.classList.remove('show-card');
    }
  });
});
