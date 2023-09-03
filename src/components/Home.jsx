import ItemList from "./ItemList"
import Nav from "./Nav"
import { useState, useEffect } from "react"
import { Oval } from  'react-loader-spinner'

const Home = () => {
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState(products)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [ category, setCategory ] = useState('all')
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    
                }
            }
        )
        .then(res => res.json())
        .then(json => {
            setProducts(json)
            setFilteredProducts(json)
            setLoading(false)
        })
        .catch(() => {
            setError(true)
            setLoading(false)
        })
    }, [])


    const handleSearch = (value) => {
        value ? setFilteredProducts(filteredProducts.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))) : handleCategory(category)
    }

    const handleCategory = (value) => {
        setCategory(value)
        if (value === 'all') {
            setFilteredProducts(products)
            return
        }
        setFilteredProducts(products.filter(product => product.category.toLowerCase().includes(value.toLowerCase())))
    }

    const reestablishProducts = () => {
        setFilteredProducts(products)
    }

    return (
    <div className="min-h-[70vh] w-[100%] bg-slate-300">
        <Nav  handleSearch={handleSearch} handleCategory={handleCategory} />
        {error && <p className="text-center">Error</p>}
        {loading ? <div className="min-h-[75vh] w-full flex justify-center items-center"><Oval color="#999999" secondaryColor="#a6a6a6"/></div> : <ItemList products={filteredProducts} reestablish={reestablishProducts}/>}
    </div>
  )
}

export default Home