function updateItemInfo(itemName) {
    const item = JSON.parse(localStorage.getItem(itemName));

    if (item.amount > 0) {
        const cartItemContainer = document.querySelector(`.cart-container .${item.name}`);
        
        cartItemContainer.innerHTML = `
            <img class="cart-item-image" src="${item.image}">
            <p class="cart-item-name">${item.name}</p>
            <p>Price: ${item.price} €</p>
            <p>Quantity: ${item.amount}</p>
            <button onclick="addOne('${itemName}')" class="cart-plus-button">+</button>
            <button onclick="MinusOne('${itemName}')" class="cart-plus-button">-</button>
            <p class="cart-item-total">Total: ${item.price * item.amount} €</p>
        `;
    } else {
        document.querySelector(`.cart-container .${item.name}`).remove();
    }
}

function updateTotal(amount) {
    total += Number(amount);
    document.querySelector('.cart-total-container').innerHTML = `
        <div class="cart-total-box">
            <p>Price: ${total} €</p>
            <p>Shipping: 15 €</p>
            <p>Total: ${total + 15} €</p>
            <button>Proceed to Checkout</button>
        </div>`;
}

function addOne(itemName) {
    const item = JSON.parse(localStorage.getItem(itemName));
    item.amount += 1;
    localStorage.setItem(`${itemName}`, JSON.stringify(item));
    updateItemInfo(itemName)
    updateTotal(`${item.price}`)
}

function MinusOne(itemName) {
    const item = JSON.parse(localStorage.getItem(itemName));
    item.amount -= 1;
    localStorage.setItem(`${itemName}`, JSON.stringify(item));
    updateItemInfo(itemName)
    updateTotal(`${Number(item.price)*-1}`)
}

const cartItems = JSON.parse(localStorage.getItem('cartItems'));

let total = 0;

for (const itemName of cartItems) {
    const item = JSON.parse(localStorage.getItem(itemName));
    if (item.amount > 0) {
        const cartItemsContainer = document.querySelector('.cart-items-container');
        cartItemsContainer.innerHTML += `<div class="${item.name} cart-item-box"></div>`;
        
        updateItemInfo(itemName);

        total += item.price * item.amount;
    }
}

const cartTotalContainer = document.querySelector('.cart-container');
cartTotalContainer.innerHTML += `
    <div class="cart-total-container">
        <div class="cart-total-box">
            <p>Price: ${total} €</p>
            <p>Shipping: 15 €</p>
            <p>Total: ${total + 15} €</p>
            <button>Proceed to Checkout</button>
        </div>
    </div>`;
