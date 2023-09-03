/* eslint-disable react/prop-types */

import { CartContext } from '../context/cartContext'
import { useContext } from 'react'

function CartButton({product}) {

    const { addToCart } = useContext(CartContext);

    const handleClick = () => {
        addToCart(product, 1);
    }

    return (
        <button onClick={handleClick}>
            Add to Cart
        </button>
    )
}

export default CartButton