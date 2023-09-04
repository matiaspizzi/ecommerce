import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

const GoBackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

  return (
    <button onClick={goBack} className='w-fit px-4 text-xl flex items-center gap-1 border-[1px] border-slate-300 shadow-md rounded-sm bg-white'><BiArrowBack /><p className='text-xs text-slate-500'>Atrás</p></button>
  )
}

export default GoBackButton