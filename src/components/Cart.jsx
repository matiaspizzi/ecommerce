//import all the functionalities from the cart context
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'


const Cart = () => {

  const { cart, removeFromCart, updateQuantity, clearCart, totalCart  } = useContext(CartContext);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col justify-around items-center w-full h-96 bg-white shadow-md">
            <div className="flex flex-col justify-around items-center w-full ">
              <button onClick={() => removeFromCart(product.id)}>X</button>

              <img src={product.image} alt={product.title} className="w-[30%]" />

              <div className="flex flex-col justify-center items-center">
                <p className="text-center">{product.title}</p>
                <p className="text-center">{product.price}</p>
              </div>

              <div className="flex justify-center">
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                <p>{product.quantity}</p>
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              </div>
            </div>
          </div>
          ))}

          <div className="flex justify-center">
            <button onClick={() => clearCart()}>Clear Cart</button>

          </div>        

          <div className="flex justify-center">
            <p>Total: {totalCart}</p>
          </div>

          <div className="flex justify-center">
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Cart