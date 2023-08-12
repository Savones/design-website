const itemName = JSON.parse(localStorage.getItem('itemName'));
const item = JSON.parse(localStorage.getItem(`${itemName}`));

document.querySelector('.js-item-name')
    .innerHTML = `${item.name}`
document.querySelector('.js-item-price')
    .innerHTML = `${item.price},00 €`
document.querySelector('.js-item-image')
    .src = `${item.image}`


function increment() {
    const input = document.querySelector(".input");
    input.value = parseInt(input.value) + 1;
}

function decrement() {
    const input = document.querySelector(".input");
    input.value = parseInt(input.value) - 1;
    if (input.value < 1) {
        input.value = 1;
    }
}

function addCart() {
    const itemQuantity = document.querySelector('.input').value;
    item.amount += Number(itemQuantity);
    localStorage.setItem(`${itemName}`, JSON.stringify(item));
    console.log(item.amount)
}
