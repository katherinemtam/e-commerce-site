// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { sanXProfileLi, findById, calcItemTotal, createTableRow } from '../utils.js';
import { cart } from '../cart/cart-data.js';
import { sanX } from '../products/products-data.js';

const test = QUnit.test;

test('should take in a character object, return li element', (expect) => {
    const expected = '<li class="char" style="background: rgb(255, 255, 255);"><h3 class="name">Shirokuma</h3><p class="type">polar bear</p><img src="http://www.san-x.jp/img/characters/sumikko/shirokuma.png"><p class="description">Shirokuma is a shy bear who migrated south to avoid the cold. Shirokuma feels most calm while drinking hot tea in a corner.</p><p class="category">Animal</p><p class="price">$2</p><p class="fact">Close friends with Furoshiki.</p><button class="button">Add to Cart</button></li>';

    const actual = sanXProfileLi({
        name: 'Shirokuma',
        type: 'polar bear',
        color: 'rgb(255, 255, 255)',
        img: 'http://www.san-x.jp/img/characters/sumikko/shirokuma.png',
        description: 'Shirokuma is a shy bear who migrated south to avoid the cold. Shirokuma feels most calm while drinking hot tea in a corner.',
        isAnimal: true,
        price: 2,
        fact: 'Close friends with Furoshiki.'
    });

    expect.equal(actual.outerHTML, expected);
});

test('should take in an array and an id, return item of matched id', (expect) => {
    const expected =
    {
        'id': 'one',
        'quantity': 2
    };

    const actual = findById(cart, 'one');

    expect.deepEqual(actual, expected);
});

test('should take in an array and an id, return total price of all items in cart', (expect) => {
    const expected = '$44';

    const actual = calcItemTotal(cart, sanX);

    expect.deepEqual(actual, expected);
});

test('should take in a cart item and the product object, return new row with name, quantity, and price', (expect) => {

    const expected = '<tr><td>Shirokuma</td><td></td><td>$44</td></tr>';

    const cartItem = cart[0];
    const product = sanX[0];
    const actual = createTableRow(cartItem, product);

    expect.equal(actual.outerHTML, expected);
});