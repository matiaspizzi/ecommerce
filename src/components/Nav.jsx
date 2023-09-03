import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Nav = ({handleCategory, handleSearch}) => {

    const [search, setSearch ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
        handleSearch(search)
    }

    return (
      <div className="flex flex-col w-full align-middle gap-3 p-2 justify-center shadow-md mb-10">
        <form className="w-full flex justify-center border border-gray-700">
            <input id="searchBar" type="text" placeholder="Buscar" className="w-full h-7 bg-white p-1 border focus:outline-none" onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="px-1 border-none" onClick={handleSubmit}> Search </button>
        </form>
        <div className="flex w-full justify-around">
          <button onClick={() => handleCategory('all')}>Todos</button>
          <button onClick={() => handleCategory('women')}>Mujeres</button>
          <button onClick={() => handleCategory('men')}>Hombres</button>
        </div>
      </div>
    )
}
  
export default Nav