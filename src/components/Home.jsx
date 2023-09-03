import ItemList from "./ItemList"
import Nav from "./Nav"
import { useState, useEffect } from "react"

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
        .catch((e) => {
            console.log(e)
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

    return (
    <div className="min-h-[50vh] w-full">
        <Nav  handleSearch={handleSearch} handleCategory={handleCategory}/>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center">Error</p>}
        <ItemList products={filteredProducts}/>
    </div>
  )
}

export default Home