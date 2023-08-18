
drawAllItems()

function drawAllItems() {
    const itemsGrid = document.querySelector('.grid-container');
    const allItems = JSON.parse(localStorage.getItem('allItems'));
    console.log(allItems);
    for (const key in allItems) {
        console.log(`${key}: ${allItems[key].name}`);
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

// shop search

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