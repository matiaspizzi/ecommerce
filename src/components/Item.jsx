/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (

        <Link to={`/item/${product.id}`} className="bg-white shadow-md flex flex-col min-h-[42vh] align-middle justify-around">
            <div className="flex justify-center p-3">
                <img src={product.imagen} alt={product.nombre} className="h-[25vh] object-contain" />
            </div>

            <div className="w-[100%] flex px-3 gap-10 ">
                <div className="flex flex-col text-left">
                    <p className="text-left text-lg">$ {product.precio}</p>
                    <p className="text-left text-sm text-gray-500">{product.nombre}</p>
                </div>
            </div>
        </Link>
    )
  }
  
  export default Item