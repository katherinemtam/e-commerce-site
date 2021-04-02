import { getCart, clearCart } from '../local-storage.utils.js';
import { sanX } from '../products/products-data.js';
import { findById, createTableRow, createTotalRow } from '../utils.js';

const table = document.querySelector('table');
const cart = getCart();
const orderButton = document.querySelector('.order-button');
const clearButton = document.querySelector('.clear-button');

if (cart.length > 0) {
    orderButton.classList.remove('hidden');
}

for (let cartItem of cart) {
    const matchingItem = findById(sanX, cartItem.id);
    const tr = createTableRow(cartItem, matchingItem);

    table.append(tr);
}

const totalRow = createTotalRow(cart, sanX);
table.append(totalRow);

orderButton.addEventListener('click', () => {
    alert(JSON.stringify(cart, true, 2));
    window.location = '../index.html';
});

clearButton.addEventListener('click', () => {
    clearCart();
});
