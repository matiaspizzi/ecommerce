import { useEffect, useState } from 'react'
import { db } from '../utils/firebase.jsx'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const SaveProduct = () => {

    const [product, setProduct] = useState({})
    const [imagen, setImagen] = useState(null)
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const collectionRef = collection(db, 'productos')

    

    const saveProduct = async () => {
        if(!nombre || !precio || !categoria || !descripcion || !imagen) {
            console.log('faltan datos')
            return
        }
        addDoc(collectionRef, product ).then(() => {
            toast('✔️ Producto guardado', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                theme: "dark",

            });
        }).catch((error) => {
            console.log(error)
        })  
    }

    const handleSetPrecio = (e) => {
        setPrecio(parseInt(e.target.value))
    }

    const handleSetNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleSetCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleSetDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const handleSetImg = (e) => {
        setImagen(e.target.value)
    }

    useEffect(() => {
        setProduct({
            nombre,
            descripcion,
            precio,
            categoria,
            imagen
        })
    }, [nombre, precio, categoria, descripcion, imagen])


    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-xl font-medium'>Agregar producto</h2>
            <input type="text" className="w-full  h-7 bg-white border-gray-700 p-1 border focus:outline-none" placeholder="Nombre" onChange={handleSetNombre} />
            <input type="number" className="w-full  h-7 bg-white border-gray-700 p-1 border focus:outline-none" placeholder="Precio" onChange={handleSetPrecio} />
            <select type="" className='bg-white border border-gray-700 p-1 w-[100%]' placeholder='Categoria' onChange={handleSetCategoria}>
                <option value=""></option>
                <option value="cbasicos">C.Basicos</option>
                <option value="drenero">Dr.Enero</option>
                <option value="delicadas">Delicadas</option>
                <option value="antiage">Antiage</option>
                <option value="hht">H-H-T</option>
                <option value="grasas">Grasas</option>
                <option value="teens">Teens</option>
                <option value="manospies">Manos-Pies</option>
                <option value="renovcel">RenovCel</option>
                <option value="corporales">Corporales</option>
                <option value="masculinos">Masculinos</option>
                <option value="capilares">Capilares</option>
                <option value="lbeauty">LBeauty</option>
                <option value="sensorial">Sensorial</option>
                <option value="psolar">PSolar</option>
                <option value="color">Color</option>
            </select>
            <textarea name="" id="" cols="24" rows="4" className='bg-white border p-1 border-gray-700' placeholder='Descripcion' onChange={handleSetDescripcion}></textarea>
            <input type="text" className="w-full  h-7 bg-white border-gray-700 p-1 border focus:outline-none" placeholder="Imagen url" onChange={handleSetImg} />
            <button className='p-1 border border-slate-400 bg-blue-300 hover:bg-blue-200' onClick={saveProduct}>Guardar</button>
        </div>
    )
}

export default SaveProduct