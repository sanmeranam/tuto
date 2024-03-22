import React, { useContext } from 'react'
import AppContext from '../AppContext'

export default function HomePage() {
  const { cart, setCart } = useContext(AppContext)
  const onClick = () => {
    const _count = [...cart]
    _count.push({
      name: 'Item ' + Math.round(Math.random() * 100),
      price: Math.round(Math.random() * 100),
      id: Math.round(Math.random() * 10000),
      quantity: 1
    })
    setCart(_count)
  }
  return (
    <div>
      <h1>Home.page</h1>
      <p>Home page content</p>
      <p>Count: {cart.length}</p>
      <button onClick={onClick}>Add Item</button>
    </div>
  )
}
