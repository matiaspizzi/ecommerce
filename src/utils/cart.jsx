// Utils file of cart to store and retrieve cart from local storage

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

export const storeCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
