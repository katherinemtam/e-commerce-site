import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringyCart);
    if (parsedCart) {
        return parsedCart;
    } return [];
}

export function setCart(parsedCart) {
    const stringyCart = JSON.stringify(parsedCart);
    localStorage.setItem(CART, stringyCart);
}

export function addItemToCart(productId, quantity) {
    const cartArray = getCart();
    const matchingItem = findById(cartArray, productId);
    if (matchingItem) {
        matchingItem.quantity += Number(quantity);
    } else {
        const item = {
            id: productId,
            quantity: Number(quantity)
        };
        cartArray.push(item);
    }
    setCart(cartArray);
}

export function clearCart() {
    const emptyCart = localStorage.removeItem(CART) || [];
    return emptyCart;
}
