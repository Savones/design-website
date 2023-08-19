// Draws all the items and cards
// Makes changes to drawn items and card when searched

const drawnItems = new Set(); // Tracks which items have been drawn

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

// Draw all cards

function drawCards() {
    const names = JSON.parse(localStorage.getItem('names'));
    const searchOptions = document.querySelector('.search-options');
    const types = JSON.parse(localStorage.getItem('types'));
    for (const type in types) {
        searchOptions.innerHTML += `
        <div onclick="searchCard('${types[type]}')" class="card">
          <h3>${types[type]}</h3>
        </div>
        `
    }
    for (const name in names) {
        searchOptions.innerHTML += `
        <div onclick="searchCard('${names[name]}')" class="card names-card">
          <h3>${names[name]}</h3>
        </div>
        `
    }
}

// Finds searched items and draws them

function searchType(searchType, method) {
    const itemsGrid = document.querySelector('.grid-container');
    const allItems = JSON.parse(localStorage.getItem('allItems'));
    
    if (method === '2') {
        itemsGrid.innerHTML = '';
    }

    for (const key in allItems) {
        if ((String(allItems[key].type) === String(searchType) || String(allItems[key].name) === String(searchType)) && !drawnItems.has(key)) {
            itemsGrid.innerHTML += `
            <div class="grid-item" onclick="openItem('${key}')">
            <img src="${allItems[key].image}" alt="flowers">
            <div class="item-container">
            <p>${allItems[key].name}</p>
            <p>${allItems[key].price} €</p>
            </div>
            </div>`;
            drawnItems.add(key);
        }
    }

    cards.forEach(card => {
        card.classList.remove('show-card');
    });

    if (method === '2') {
        handleSearchBar(searchType);
    }
}


// Searchbar input becomes searched card name

function handleSearchBar(searchType) {
    searchInput.value = `${searchType}`;
}

// Card Pressed

function searchCard(searchInput) {
    drawnItems.clear();
    searchType(searchInput, '2')
    drawnItems.clear();
}

// Searchbutton Pressed

function searchPress() {
    drawnItems.clear();
    const searchText = searchInput.value.toLowerCase();
    const types = JSON.parse(localStorage.getItem('types'));
    const names = JSON.parse(localStorage.getItem('names'));
    const itemsGrid = document.querySelector('.grid-container');
    itemsGrid.innerHTML = '';
    
    names.forEach(name => {
        if (name.toLowerCase().includes(searchText)) {
            searchType(name, '1');
        }
    });
    types.forEach(type => {
        if (type.toLowerCase().includes(searchText)) {
            searchType(type, '1');
        }
    });
    drawnItems.clear();
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
