import {AiOutlineShoppingCart, AiFillHome} from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useFindPath } from "../hooks/UseFindPath";

const Header = () => {

    const path = useFindPath();

    const toTopPage = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    return (
      <div className="flex flex-col justify-around items-center w-full sticky top-0 min-h-[50px] gap-3 p-3 bg-white shadow-md z-10">
            <div className="flex justify-around items-center w-full ">
                {path !== '/' ? <Link to="/"><AiFillHome className="text-2xl"/></Link> : <button onClick={toTopPage}><AiFillHome className="text-2xl"/></button>}

                <p>Cosmética</p>
                
                <Link to="/cart">
                  <AiOutlineShoppingCart className="text-2xl"/>
                </Link>
            </div>
      </div>
    )
  }
  
  export default Header