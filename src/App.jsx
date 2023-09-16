import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './context/cartContext'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import ClientData from './components/ClientData.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ItemDetail from './components/ItemDetail.jsx'
import Admin from './components/Admin.jsx'

const App = () => {

  return (
      <Router>
        <CartProvider>
          <Header />
          <ToastContainer/>
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/clientdata" element={<ClientData />}/>
            <Route path="/item/:id" element={<ItemDetail/>}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="*" element={<h1>404</h1>}/>
          </Routes >
          <Footer className=" justify-self-end"/>
        </CartProvider> 
      </Router>
  )
}

export default App
