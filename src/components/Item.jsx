/* eslint-disable react/prop-types */
import CartButton from "./CartButton"

const Item = ({product}) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-center">
                <img src={product.image} alt={product.title} className="w-1/2" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-center">{product.title}</p>
                <p className="text-center">{product.price}</p>
            </div>
            <div className="flex justify-center">
                <CartButton product={product} />
            </div>
        </div>

    )
  }
  
  export default Item