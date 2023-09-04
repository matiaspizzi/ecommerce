import { getUser, removeUser, storeUser } from '../utils/user.jsx'
import { CartContext } from '../context/cartContext.jsx'
import { useState, useEffect, useContext } from 'react';
import GoBackButton from './GoBackButton.jsx';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const ClientData = () => {

  const { cart, totalCart } = useContext(CartContext);
  const [user, setUser] = useState(getUser())
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
    if (!newUser.name || !newUser.lastName || !newUser.email || !newUser.phone || !newUser.locality || !newUser.address) {
      alert('Por favor complete todos los campos');
      return;
    }
    storeUser(newUser);
    setUser(newUser);
  }

  return (
    <div className='flex flex-col w-[100%] min-h-[70vh] bg-slate-100 justify-between items-center'>
      {cart.length ? (<>
        <div className='self-start m-4'>
          <GoBackButton />
        </div>
        <div className='flex flex-col bg-white p-6 rounded-sm shadow-md mb-10'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-medium self-center'>Datos del cliente</h2>
            {user ? (
              <div className='flex flex-col items-center gap-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[1px] w-fit h-full bg-slate-300 shadow-md'>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Nombre</p>
                    <p>{user.name}</p>
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Apellido</p>
                    <p>{user.lastName}</p>
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Email</p>
                    <p>{user.email}</p>
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Teléfono</p>
                    <p>{user.phone}</p>
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Localidad</p>
                    <p>{user.locality}</p>
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Dirección</p>
                    <p>{user.address}</p>
                  </div>
                </div>
                <button onClick={() => { removeUser(); setUser('') }} className='px-4 border-[1px] border-slate-300 shadow-md rounded-sm'>Editar datos</button>
              </div>
            ) : (
              <div>
                <form className='grid grid-cols-1 gap-[1px] bg-slate-300 m-4 shadow-sm'>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Nombre</p>
                    <input required type="name" onChange={(e) => setName(e.target.value)} className='bg-white border-[1px] focus:outline-none' />
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Apellido</p>
                    <input required type="text" onChange={(e) => setLastName(e.target.value)} className='bg-white border-[1px] focus:outline-none' />
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Email</p>
                    <input required type="email" onChange={(e) => setEmail(e.target.value)} className='bg-white border-[1px] focus:outline-none' />
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Teléfono</p>
                    <input required type="phone" onChange={(e) => setPhone(e.target.value)} className='bg-white border-[1px] focus:outline-none' />
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Localidad</p>
                    <input required type="text" onChange={(e) => setLocality(e.target.value)} className='bg-white border-[1px] focus:outline-none' />
                  </div>
                  <div className='bg-white p-2'>
                    <p className='text-xs text-slate-400'>Dirección</p>
                    <input required type="text" onChange={(e) => setAddress(e.target.value)} className='bg-white border-[1px] focus:outline-none' />
                  </div>
                  <button type="submit" onClick={handleForm} className='bg-blue-100 text-blue-500 font-bold flex justify-center py-2 rounded-sm shadow-md'>Guardar</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </>) : (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
          <div className="bg-white p-4 rounded-sm shadow-md">
            <p>Tu carrito está vacío!</p>
          </div>
          <Link to="/"><button className="bg-white rounded-full p-1 text-xl text-blue-500 shadow-md"><BiArrowBack /></button></Link>
        </div>
      )}
      {cart.length > 0 && user &&
        <div className='flex flex-col sm:flex-row p-2 items-center sm:gap-6 bg-white rounded-sm shadow-md my-6'>
          <p className='text-lg font-medium'>Total  $ {totalCart}</p>
          <Link to="/checkout">
            <button className='w-52 bg-blue-100 text-blue-500 font-bold flex justify-around py-2 rounded-sm shadow-md'>Continuar</button>
          </Link>
        </div>}
    </div>
  )
}

export default ClientData