import { getUser, removeUser, storeUser } from '../utils/user.jsx'
import { CartContext } from '../context/cartContext'
import { useState, useEffect, useContext } from 'react';
const Checkout = () => {

  const { cart, totalCart  } = useContext(CartContext);
  const [user , setUser] = useState(getUser())
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [locality, setLocality] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    setUser(getUser());
  }, [])

  const handleForm = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      lastName,
      email,
      phone,
      locality, 
      address
    }
    storeUser(newUser);
    setUser(newUser);
  }

  return (
    <div className='flex flex-col w-[100%] h-full '>
      <div className='flex flex-col w-[100%] h-full justify-center items-center'>
        <h1 className='text-3xl font-bold'>Checkout</h1>
        {cart.length ? (
          <div className='flex flex-col w-[100%] h-full justify-center items-center'>
            <div className='flex flex-col w-[100%] h-full justify-center items-center'>
              <h2 className='text-2xl font-bold'>Total: {totalCart}</h2>
              <div className='flex flex-col w-[100%] h-full justify-center items-center'>
                {user ? (
                  <div className='flex flex-col w-[100%] h-full justify-center items-center'> 
                    <h2 className='text-2xl font-bold'>Datos del usuario</h2>
                    <div className='flex flex-col w-[100%] h-full justify-center items-center'>
                      <p>Nombre: {user.name}</p>
                      <p>Apellido: {user.lastName}</p>
                      <p>Email: {user.email}</p>
                      <p>Telefono: {user.phone}</p>
                      <p>Localidad: {user.locality}</p>
                      <p>Direccion: {user.address}</p>
                    </div>
                    <button onClick={() => {removeUser(); setUser('')}}>Editar</button>
                  </div>
                ) : (
                  <div className='flex flex-col w-[100%] h-full justify-center items-center'>
                    <h2 className='text-2xl font-bold'>Datos del usuario</h2>
                    <form className='flex flex-col w-[100%] h-full justify-center items-center'>
                      <p>Nombre</p>
                      <input type="text" onChange={(e) => setName(e.target.value)}/>
                      <p>Apellido</p>
                      <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                      <p>Email</p>
                      <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                      <p>Telefono</p>
                      <input type="text" onChange={(e) => setPhone(e.target.value)}/>
                      <p>Localidad</p>
                      <input type="text" onChange={(e) => setLocality(e.target.value)}/>
                      <p>Direccion</p>
                      <input type="text" onChange={(e) => setAddress(e.target.value)}/>
                      <button type="submit" onClick={handleForm}>Enviar</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>) : (
          <div className='flex flex-col w-[100%] h-full justify-center items-center'>
            <h2 className='text-2xl font-bold'>No hay productos en el carrito</h2>
          </div>
          )}
      </div>
    </div>
  )
}

export default Checkout