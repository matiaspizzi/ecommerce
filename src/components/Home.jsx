import ItemList from "./ItemList"
import Nav from "./Nav"
import { useState, useEffect } from "react"
import { Oval } from  'react-loader-spinner'
import { db } from '../utils/firebase.jsx'
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState(products)
    const [ loading, setLoading ] = useState(true)
    const [ category, setCategory ] = useState('all')

    const collectionRef = collection(db, 'productos')

    useEffect(() => {
        
        getDocs(collectionRef).then((querySnapshot) => {
            let products = querySnapshot.docs.map(doc => { return {id: doc.id, ...doc.data()}})
            products.sort((a, b) => a.nombre.localeCompare(b.nombre))
            setProducts(products)
            setFilteredProducts(products)
            setLoading(false)
            console.log(products)
        })


    }, [])
    

    const handleSearch = (value) => {
        value ? setFilteredProducts(filteredProducts.filter(product => product.nombre.toLowerCase().includes(value.toLowerCase()))) : handleCategory(category)
    }

    const handleCategory = (value) => {
        setCategory(value)
        if (value === 'all') {
            setFilteredProducts(products)
            return
        }
        setFilteredProducts(products.filter(product => product.categoria.toLowerCase().includes(value.toLowerCase())))
    }

    const reestablishProducts = () => {
        setFilteredProducts(products)
    }

    return (
    <div className="min-h-[70vh] w-[100%] bg-slate-100">
        <Nav  handleSearch={handleSearch} handleCategory={handleCategory} />
        {loading ? <div className="min-h-[75vh] w-full flex justify-center items-center"><Oval color="#999999" secondaryColor="#a6a6a6"/></div> : <ItemList products={filteredProducts} reestablish={reestablishProducts}/>}
    </div>
  )
}

export default Home