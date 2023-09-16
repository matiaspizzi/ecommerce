/* eslint-disable react/prop-types */
import { CartContext } from '../context/cartContext'
import { useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';

const CartItem = ({ product }) => {

    const { removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div key={product.id} className="flex flex-col justify-around items-center w-full h-full  bg-white shadow-md">
            <div className="flex flex-col justify-between items-center w-full h-full p-4 gap-2">
                <button onClick={() => removeFromCart(product.id)} className='md:text-3xl text-xl self-end'><CiSquareRemove/></button>
                <Link to={`/item/${product.id}`} className="flex flex-col justify-between items-center w-full h-full p-4 gap-2">
                    <img src={product.image} alt={product.nombre} className="h-[17vh] object-contain" />

                    <div className="flex flex-col justify-center items-center gap-2 text-slate-400 text-center text-sm">
                        <p>{product.nombre}</p>
                        <p>$ {product.precio}</p>
                    </div>
                </Link>

                <div className='flex gap-2 items-center'>
                    <div className="flex justify-center border border-slate-700 px-1 gap-2">
                        <button onClick={() => updateQuantity(product.id, 1)}><AiOutlinePlus /></button>
                        <p>{product.quantity}</p>
                        <button onClick={() => updateQuantity(product.id, -1)}><AiOutlineMinus /></button>
                    </div>
                    <p className='text-md text-black'>$ {(product.precio * product.quantity).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem