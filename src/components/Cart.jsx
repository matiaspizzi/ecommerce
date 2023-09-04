import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import CartItem from './CartItem'
import { BiArrowBack } from "react-icons/bi";

const Cart = () => {

	const { cart, clearCart, totalCart } = useContext(CartContext);

	return (
		<div className='flex flex-col bg-slate-100 w-full h-[100%] min-h-[70vh] justify-between lg:px-20'>
			<div>
				{cart.length > 0 && <div className="flex justify-end pt-4"><button className="bg-red-100 text-red-500 p-2 px-3 rounded-sm shadow-md flex text-xl gap-2 items-center" onClick={() => clearCart()}><p className='text-sm'>vaciar carrito</p></button></div>}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] p-[8vw] pt-4">
					{cart.map((product) => (<CartItem key={product.id} product={product} />))}
				</div>
			</div>
			{cart.length ? (
				<div className='flex w-full justify-center'>
					<div className='flex flex-col sm:flex-row p-2 items-center sm:gap-6 bg-white rounded-sm shadow-md mb-6'>
						<p className='text-lg font-medium'>Total  $ {totalCart}</p>
						<Link to="/clientdata">
							<button  className='w-52 bg-blue-100 text-blue-500 font-bold flex justify-around py-2 rounded-sm shadow-md'>Continuar</button>
						</Link>
					</div>
				</div>) :
				(<div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
					<div className="bg-white p-4 rounded-sm shadow-md">
						<p>Tu carrito está vacío!</p>
					</div>
					<Link to="/"><button className="bg-white rounded-full p-1 text-xl text-blue-500 shadow-md"><BiArrowBack /></button></Link>
				</div>)}
		</div>
	)
}

export default Cart