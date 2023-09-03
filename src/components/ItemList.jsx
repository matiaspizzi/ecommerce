/* eslint-disable react/prop-types */
import Item from "./Item"

const ItemList = ({products}) => {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1px]">
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ItemList