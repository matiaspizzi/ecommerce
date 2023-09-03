/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CartButton from './CartButton'
import { Oval } from  'react-loader-spinner'
import { BiArrowBack } from "react-icons/bi";

function ItemDetail() {

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => {
            setItem(json)
            setLoading(false)
        })
    }, [id])

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="flex flex-col w-full md:w-[50vw] min-h-[85vh] items-center justify-center mb-8">
            {loading ? <Oval color="#999999" secondaryColor="#a6a6a6"/> : (<>
                <div className='flex justify-self-start w-full pt-4 pl-4 text-xl'>
                    <button onClick={goBack}><BiArrowBack /></button>
                </div>
                <p className="text-left text-lg w-full px-8 pt-2">{item.title}</p>
                <div className="flex flex-col w-full items-center gap-3 p-2 justify-cente mb-10">
                    <div className="flex justify-center p-3">
                        <img src={item.image} alt={item.title} className="h-[35vh] object-contain" />
                    </div>
                </div>
                <div className="flex flex-col text-left w-full px-10">
                    <p className="text-left text-3xl">$ {item.price}</p>
                </div>
                <div className="flex flex-col text-left w-full px-10">
                    <p className="text-left text-sm text-slate-500">{item.description}</p>
                </div>
                <div className="flex flex-col text-left w-full px-10 items-center">
                    <CartButton product={item} />
                </div>
            </>)}
        </div>
    )
}

export default ItemDetail