import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Nav = ({handleCategory, handleSearch}) => {

    const [search, setSearch ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(search)
    }

    return (
      <div className="flex flex-col w-full items-center gap-3 p-2 justify-center shadow-md mb-4 max-h-[10vh] bg-white">
        <form className="w-full md:max-w-[70vw] flex justify-center border border-gray-700 align-middle">
            <input id="searchBar" type="text" placeholder="Buscar" className="w-full  h-7 bg-white p-1 border focus:outline-none" onChange={(e) => setSearch(e.target.value)} />
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