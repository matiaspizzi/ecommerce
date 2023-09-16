/* eslint-disable react/prop-types */
// Cart context for ecommerce project

import { useState, useEffect, createContext } from 'react';
import { getCart, storeCart } from '../utils/cart';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(getCart());

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

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const foundIndex = newCart.findIndex(item => item.id === id);
        if (foundIndex !== -1) {
            newCart.splice(foundIndex, 1);
        }
        setCart(newCart);
    };

    const updateQuantity = (id, quantity) => {
        const newCart = [...cart];
        const foundIndex = newCart.findIndex(item => item.id === id);
        if (foundIndex !== -1) {
            if (newCart[foundIndex].quantity === 1 && quantity === -1) {
                return;
            }
            newCart[foundIndex].quantity += quantity;
        }
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalCart = cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;