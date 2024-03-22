import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/Home.page'
import AbputPage from './pages/Abput.page'
import Page404 from './pages/NoPage'
import CartPage from './pages/Cart.page'
import AppContext from './AppContext'

export default function App() {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const _cart = localStorage.getItem('cart')
    if (_cart) {
      setCart(JSON.parse(_cart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <AppContext.Provider value={{ cart, setCart, count, setCount }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about/:id" element={<AbputPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
