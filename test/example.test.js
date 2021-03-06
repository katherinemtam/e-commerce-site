// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { sanXProfileLi, findById, calcItemTotal, createTableRow, calcOrderTotal } from '../utils.js';
import { cart } from '../cart/cart-data.js';
import { sanX } from '../products/products-data.js';

const test = QUnit.test;

test('should take in a character object, return li element', (expect) => {
    const expected = '<li class="char" style="background: rgb(255, 255, 255);"><h3 class="name">Shirokuma</h3><p class="type">polar bear</p><img src="http://www.san-x.jp/img/characters/sumikko/shirokuma.png"><p class="description">Shirokuma is a shy bear who migrated south to avoid the cold. Shirokuma feels most calm while drinking hot tea in a corner.</p><p class="category">Animal</p><p class="price">$2</p><p class="fact">Close friends with Furoshiki.</p><select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select><button class="button">Add to Cart</button></li>';

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

test('should take in a quantity and a price, return total price of an item', (expect) => {
    const expected = '$44';

    const quantity = 2;
    const price = 22;
    const actual = `$${calcItemTotal(quantity, price)}`;

    expect.deepEqual(actual, expected);
});

test('should take in a cart item and the product object, return new row with name, quantity, and price', (expect) => {

    const expected = '<tr><td>Shirokuma</td><td>2</td><td>$44</td></tr>';

    const cartItem = cart[0];
    const product = sanX[0];
    const actual = createTableRow(cartItem, product);

    expect.equal(actual.outerHTML, expected);
});

test('should take in cart array and product array, return total price of all items in cart', (expect) => {
    const expected = '$173';

    const actual = calcOrderTotal(cart, sanX);

    expect.deepEqual(actual, expected);
});