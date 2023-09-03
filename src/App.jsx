import './App.css'
import CartProvider from './context/cartContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Header from './components/Header'

const App = () => {

  return (
    <Router>
      <CartProvider>
        <Header />
        <Switch>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Switch>
      </CartProvider> 
    </Router>
  )
}

export default App
