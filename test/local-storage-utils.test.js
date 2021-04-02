import { getCart, setCart, addItemToCart } from '../local-storage.utils.js';
import { cart } from '../cart/cart-data.js';

const test = QUnit.test;
const CART = 'CART';

test('setCart should put our cart into local storage', (expect) => {

    setCart(cart);

    const expected = JSON.parse(localStorage.getItem(CART));

    expect.deepEqual(cart, expected);
});

test('getCart should get our cart from local storage', (expect) => {

    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);

    const expected = getCart();

    expect.deepEqual(cart, expected);
});

test('addItemToCart adds an item to the cart', (expect) => {

    const stringyCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringyCart);

    addItemToCart('two');

    const actual = getCart();

    const expected = [
        {
            id: 'one',
            quantity: 2
        },
        {
            id: 'three',
            quantity: 1
        },
        {
            id: 'five',
            quantity: 4
        },
        {
            id: 'two',
            quantity: 1
        }
    ];

    expect.deepEqual(actual, expected);
});