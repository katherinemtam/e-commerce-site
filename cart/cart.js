import { getCart } from '../local-storage.utils.js';
import { sanX } from '../products/products-data.js';
import { findById, createTableRow, createTotalRow } from '../utils.js';

const table = document.querySelector('table');
const cart = getCart();
const orderButton = document.querySelector('.order-button');

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
    alert(JSON.stringify(cart));
    localStorage.clear();
    window.location = '../index.html';
});