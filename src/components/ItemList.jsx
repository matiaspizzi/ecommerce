/* eslint-disable react/prop-types */
import Item from "./Item"
import { AiOutlineCloseCircle } from "react-icons/ai"

const ItemList = ({products, reestablish}) => {

  return (
    products.length ? 
      (<div className="grid grid-cols-2 lg:grid-cols-3 gap-[1px]">
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}
      </div>) :
      <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
        <div className="bg-white p-4 rounded-sm shadow-md">
          <p>No se encontraron productos</p>
        </div>
        <button onClick={reestablish} className="bg-white rounded-full p-1 text-xl text-blue-500 shadow-md">
          <AiOutlineCloseCircle/>
        </button>
      </div>
  )
}

export default ItemList