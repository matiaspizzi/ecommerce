/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartButton from './CartButton'
import { Oval } from 'react-loader-spinner'
import GoBackButton from './GoBackButton'
import { db } from '../utils/firebase.jsx'
import { getDoc, doc } from 'firebase/firestore'

function ItemDetail() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});

    const docRef = doc(db, "productos", id);

    useEffect(() => {
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                setItem({ id, ...doc.data() })
                setLoading(false)
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })

    }, [])

    return (
        <div className="flex flex-col w-full  min-h-[70vh] items-center">
            <div className='self-start m-4'>
                <GoBackButton />
            </div>
            {loading ? <Oval color="#999999" secondaryColor="#a6a6a6" /> : (<div className='md:w-[50vw]'>
                <p className="text-left text-lg w-full px-8 pt-2">{item.title}</p>
                <div className="flex flex-col w-full items-center gap-3 p-2 justify-cente">
                    <div className="flex justify-center p-3">
                        <img src={item.imagen} alt={item.nombre} className="h-[35vh] object-contain" />
                    </div>
                </div>
                <div className="flex flex-col text-left w-full px-10">
                    <p className="text-left text-3xl">$ {item.precio}</p>
                </div>
                <div className="flex flex-col text-left w-full px-10">
                    <p className="text-left text-sm text-slate-500">{item.descripcion}</p>
                </div>
                <div className="flex flex-col text-left w-full px-10 items-center mb-10">
                    <CartButton product={item} />
                </div>
            </div>)}
        </div>
    )
}

export default ItemDetail