import React, { Fragment, useContext } from 'react'
import './App.css'
import Header from './components/layout/Header'
import MenuCard from './components/menu/MenuCard'
import CartContext from './store/cart-context'
import Cart from './components/cart/Cart'



function App() {
  const ctx = useContext(CartContext)
  return (
    <Fragment>
      {ctx.cartIsVisible && <Cart/>}
      <Header/>
      <MenuCard/>
    </Fragment>
  )
}

export default App