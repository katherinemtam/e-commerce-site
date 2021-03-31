import { cart } from './cart-data.js';
import { sanX } from '../products/products-data.js';
import { findById, createTableRow, createTotalRow } from '../utils.js';

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingItem = findById(sanX, cartItem.id);
    const tr = createTableRow(cartItem, matchingItem);

    table.append(tr);
}

const totalRow = createTotalRow(cart, sanX);
table.append(totalRow);
