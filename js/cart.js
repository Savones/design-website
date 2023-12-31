const cartItems = JSON.parse(localStorage.getItem('cartItems'));

console.log(cartItems)

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
cartTotalContainer.innerHTML += `<div class="cart-total-container"></div>`;
makeTotal();

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

function addOne(itemName) {
    const item = JSON.parse(localStorage.getItem(itemName));
    item.amount += 1;
    localStorage.setItem(`${itemName}`, JSON.stringify(item));
    updateItemInfo(itemName)
    total += Number(item.price);
    makeTotal()
}

function MinusOne(itemName) {
    const item = JSON.parse(localStorage.getItem(itemName));
    item.amount -= 1;
    localStorage.setItem(`${itemName}`, JSON.stringify(item));
    updateItemInfo(itemName)
    total -= Number(item.price);
    makeTotal()
}

function emptyCart() {
    console.log(cartItems)
    for (const itemName in cartItems) {
        const item = JSON.parse(localStorage.getItem(cartItems[itemName]));
        item.amount = 0;
        localStorage.setItem(`${cartItems[itemName]}`, JSON.stringify(item));
    }
    total = 0;
    makeTotal();
}

function makeTotal() {
    if (total > 0) {
        document.querySelector('.cart-total-container').innerHTML = `
        <div class="cart-total-box">
            <p>Price: ${total} €</p>
            <p>Shipping: 15 €</p>
            <p>Total: ${total + 15} €</p>
            <div class="cart-total-buttons">
                <button>Checkout</button>
                <button onclick="openShop()">Back to Shop</button>
                <button onclick="emptyCart()">Empty Cart</button>
            </div>
        </div>`;
    } else {
        cartTotalContainer.innerHTML = `
            <div class="empty-container">
            <p>Your cart is currently empty.</p>
            <p>You can visit shop to add items to your cart.</p>
            <button onclick="openShop()" class="back-button">Visit Shop</button>
            </div>
            `;
    }
}
