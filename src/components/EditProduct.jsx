import { useEffect, useState } from 'react'
import { db } from '../utils/firebase.jsx'
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const EditProduct = () => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState()
    const [nombre, setNombre] = useState()
    const [precio, setPrecio] = useState()
    const [categoria, setCategoria] = useState()
    const [descripcion, setDescripcion] = useState()
    const [imagen, setImagen] = useState()

    const collectionRef = collection(db, 'productos')

    useEffect(() => {

        getDocs(collectionRef).then((querySnapshot) => {
            let products = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
            products.sort((a, b) => a.nombre.localeCompare(b.nombre))
            setProducts(products)
        })
    }, [])

    const handleSelect = (e) => {
        const filtered = products.filter(product => product.id === e.target.value)
        setProduct(filtered[0])
    }

    const handlePrecio = (e) => {
        setPrecio(parseInt(e.target.value))
    }

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const handleImagen = (e) => {
        setImagen(e.target.value)
    }

    const handleUpdate = () => {
        const docRef = doc(db, "productos", product.id);
        updateDoc(docRef, {
            nombre: nombre ? nombre : product.nombre,
            precio: precio ? precio : product.precio,
            categoria: categoria ? categoria : product.categoria,
            descripcion: descripcion ? descripcion : product.descripcion,
            imagen: imagen ? imagen : product.imagen
        }).then(() => {
            toast('✔️ Producto actualizado', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                theme: "dark",
            });
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    const handleDelete = () => {

        const docRef = doc(db, "productos", product.id);
        deleteDoc(docRef).then((e) => {
            if (e) {
                toast('✔️ Producto eliminado', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                setProducts(products.filter(product => product.id !== docRef.id))
                setProduct()
            }
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-xl font-medium'>Editar producto</h2>
            <select type="" className='bg-white border border-gray-700 p-1 w-[100%] text-black' onChange={handleSelect}>
                <option value=""></option>
                {products.map(product => (
                    <option value={product.id} key={product.id} className=''>{product.nombre}</option>
                ))}
            </select>

            {product &&
                <>
                    <input type="text" placeholder={product.nombre} className="w-full  h-7 bg-white border-gray-700 p-1 border focus:outline-none" onChange={handleNombre} />
                    <input type="number" placeholder={product.precio} className="w-full  h-7 bg-white border-gray-700 p-1 border focus:outline-none" onChange={handlePrecio} />
                    <select type="" className='bg-white border border-gray-700 p-1 w-[100%]' onChange={handleCategoria}>
                        <option value=""></option>
                        <option value="C.Basicos">C.Basicos</option>
                        <option value="Dr.Enero">Dr.Enero</option>
                        <option value="Delicadas">Delicadas</option>
                        <option value="Antiage">Antiage</option>
                        <option value="H-H-T">H-H-T</option>
                        <option value="Grasas">Grasas</option>
                        <option value="Teens">Teens</option>
                        <option value="Manos-Pies">Manos-Pies</option>
                        <option value="RenovCel">RenovCel</option>
                        <option value="Corporales">Corporales</option>
                        <option value="Masculinos">Masculinos</option>
                        <option value="Capilares">Capilares</option>
                        <option value="LBeauty">LBeauty</option>
                        <option value="Sensorial">Sensorial</option>
                        <option value="PSolar">PSolar</option>
                        <option value="Color">Color</option>
                    </select>
                    <textarea name="" id="" placeholder={product.descripcion} cols="48" rows="4" className='bg-white border p-1 border-gray-700' onChange={handleDescripcion}></textarea>
                    <input type="text" className="w-full  h-7 bg-white border-gray-700 p-1 border focus:outline-none" placeholder={product.imagen} onChange={handleImagen} />
                    <button className='p-1 bg-blue-300 border border-slate-400' onClick={handleUpdate}>Guardar</button>
                    <button className='p-1 bg-red-300 border border-slate-400 mt-8' onClick={handleDelete}>Eliminar</button>
                </>
            }
        </div>
    )
}

export default EditProduct
