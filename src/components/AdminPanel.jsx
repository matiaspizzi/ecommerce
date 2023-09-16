import SaveProduct from './SaveProduct.jsx'
import EditProduct from './EditProduct.jsx'

const AdminPanel = () => {



    return (
        <div className="min-h-[70vh] w-[100%] bg-slate-100 flex justify-around">
            <SaveProduct />
            <EditProduct />
        </div>
    )
}

export default AdminPanel