/* eslint-disable react/prop-types */
import Item from "./Item"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai"
import { useEffect, useState } from "react"

const ItemList = ({ products, reestablish }) => {

  const [page, setPage] = useState(1)
  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    setProductsToShow(products.slice(0, page * 12))
  }, [page, products])

  return (
    productsToShow.length &&
    (
      <>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1px]">
          {productsToShow.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 my-4">
          {page !== 1 &&
            <button onClick={() => setPage(page - 1)} className="bg-white rounded-full p-1 text-xl text-blue-500 shadow-md">
              <AiOutlineArrowLeft />
            </button>}
          <p className="font-medium">{page}</p>
          {products.length > page * 12 &&
            <button onClick={() => setPage(page + 1)} className="bg-white rounded-full p-1 text-xl text-blue-500 shadow-md">
              <AiOutlineArrowRight />
            </button>}
        </div>
      </>
    )
    ||
    <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
      <div className="bg-white p-4 rounded-sm shadow-md">
        <p>No se encontraron productos</p>
      </div>
      <button onClick={reestablish} className="bg-white rounded-full p-1 text-xl text-blue-500 shadow-md">
        <AiOutlineCloseCircle />
      </button>
    </div>
  )
}

export default ItemList