import { AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
    return (
      <div className="relative bottom-0 w-[100%] p-6 pb-0 text-slate-400 text-xs border-t border-zinc-500">
        <div className="min-h-[15vh] w-[100%] flex flex-col justify-around text-center">
          <div className="w-[100%] flex justify-around items-center gap-1">
            <p>
              <a href="https://www.instagram.com/marianapizzicosmetica/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-500">
                <AiOutlineInstagram className="text-2xl"/> marianapizzicosmetica
              </a>
            </p>
            <div className="text-left">
              <p className="text-sm">Contacto</p>
              <p>Teléfono: +54 9 11 0000 0000</p>
              <p>e-mail: mariana@pizzi.com.ar</p>
            </div>
          </div>
        <p>Este sitio web no tiene relación con Laboratorio De Cosmética Avanzada S.R.L. (LACA), solo se dedica a la venta de sus productos.</p>
        <p className="text-slate-400">Desarrollado por Matias Pizzi, matias@pizzi.com.ar</p>
        </div>
      </div>
    )
  }
  
  export default Footer