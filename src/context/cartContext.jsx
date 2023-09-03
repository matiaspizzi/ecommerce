// Cart context for ecommerce project

import { useState, useEffect, createContext } from 'react';
import { getCart, storeCart } from '../utils/cart';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    useEffect(() => {
        storeCart(cart);
    }, [cart]);

    const addToCart = (product, quantity) => {
        const newCart = [...cart];
        const foundIndex = newCart.findIndex(item => item.id === product.id);
        if (foundIndex !== -1) {
            newCart[foundIndex].quantity += quantity;
        } else {
            newCart.push({ ...product, quantity });
        }
        setCart(newCart);
    };

    const removeFromCart = (product) => {
        const newCart = [...cart];
        const foundIndex = newCart.findIndex(item => item.id === product.id);
        if (foundIndex !== -1) {
            newCart.splice(foundIndex, 1);
        }
        setCart(newCart);
    };

    const updateQuantity = (product, quantity) => {
        const newCart = [...cart];
        const foundIndex = newCart.findIndex(item => item.id === product.id);
        if (foundIndex !== -1) {
            newCart[foundIndex].quantity = quantity;
        }
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
}