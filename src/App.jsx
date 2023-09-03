import CartProvider from './context/cartContext'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  return (
      <Router>
        <CartProvider>
          <Header />
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes >
          <Footer className=" justify-self-end"/>
        </CartProvider> 
      </Router>
  )
}

export default App
