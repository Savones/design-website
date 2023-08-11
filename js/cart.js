function openShop() {
    window.location.href = 'shop.html';
  }

function openHome() {
    window.location.href = 'index.html';
}

const cartItems = JSON.parse(localStorage.getItem('cartItems'));

let cLen = cartItems.length;
let total = 0;

for (let i = 0; i < cLen; i++) {
    let item = JSON.parse(localStorage.getItem(`${cartItems[i]}`));
    if (item.amount !== 0) {
        total += item.price * item.amount;
        document.querySelector('.cart-items-container')
            .innerHTML += `<div class="${item.name} cart-item-box"></div>`;
        document.querySelector(`.cart-container .${item.name}`)
            .innerHTML += `<img class="cart-item-image" src=${item.image}>`;
        document.querySelector(`.cart-container .${item.name}`)
            .innerHTML += `<p class="cart-item-name">${item.name}</p>`;
        document.querySelector(`.cart-container .${item.name}`)
            .innerHTML += `<p>Price: ${item.price} €</p>`;
        document.querySelector(`.cart-container .${item.name}`)
            .innerHTML += `<p>Quantity: ${item.amount}</p>`;
        document.querySelector(`.cart-container .${item.name}`)
            .innerHTML += `<p class="cart-item-total">Total: ${item.price * item.amount} €</p>`;
    }
}

document.querySelector(`.cart-container`)
    .innerHTML += `<div class="cart-total-container"><div class="cart-total-box">
        <p>Price: ${total} €</p>
        <p>Shipping: 15 €</p>
        <p>Total: ${total + 15} €</p>
        <button>Proceed to Checkout</button>
        </div></div>`;