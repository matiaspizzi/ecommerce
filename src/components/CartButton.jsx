/* eslint-disable react/prop-types */

import { CartContext } from '../context/cartContext'
import { useContext } from 'react'

import { BsFillCartPlusFill } from "react-icons/bs";
import { toast } from 'react-toastify';

function CartButton({product}) {

    const { addToCart } = useContext(CartContext);

    const handleClick = () => {
        addToCart(product, 1);
        toast('✔️ Producto agregado al carrito de compra!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "light",
        });
        setTimeout(() => {
            window.location.href = '/cart';
        }, 1000);
    }

    return (
        <>
            <button onClick={handleClick} className='w-full md:w-80 bg-blue-100 text-blue-500 font-bold flex justify-around py-3 rounded-md mt-8'>
                <p>Agregar al carrito</p>
                <BsFillCartPlusFill className='text-xl'/>
            </button>
        </>
    )
}

export default CartButton