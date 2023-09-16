import { useState } from 'react'
import AdminPanel from './AdminPanel.jsx'

const Admin = () => {

    const [auth, setAuth] = useState(false)
    const [password, setPassword] = useState('')

    const handleAuth = (e) => {
        e.preventDefault()
        if (password === import.meta.env.VITE_ADMINPASSWORD) setAuth(true)
    }

    if (auth) return <AdminPanel auth={auth}/>
    else
        return (
            <div className="min-h-[70vh] w-[100%] bg-slate-100 flex justify-center items-center">
                <form action="" className=' justify-center items-center flex flex-col gap-4 h-full w-full'>
                    <h1 className="text-xl font-bold m-0">Admin Panel</h1>
                    <input type="password" placeholder="password" className="border border-gray-300 rounded-sm w-[200px] p-1 bg-white" onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' onClick={handleAuth}><span className="bg-blue-200 p-2 rounded-sm">Ingresar</span></button>
                </form>
            </div>
        )    
}

export default Admin