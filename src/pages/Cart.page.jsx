import React, { useContext } from 'react'
import AppContext from '../AppContext'

export default function CartPage() {
  const { cart, setCart } = useContext(AppContext)

  const onClickAdd = (index) => {
    const _count = [...cart]
    _count[index].quantity++
    setCart(_count)
  }

  const onClickSubtract = (index) => {
    const _count = [...cart]
    if (_count[index].quantity > 1) {
      _count[index].quantity--
    } else {
      _count.splice(index, 1)
    }
    setCart(_count)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td style={{ textAlign: 'center' }}>{item.name}</td>
                <td style={{ textAlign: 'center' }}>{item.price}</td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => onClickSubtract(index)}>-</button>
                  {item.quantity}
                  <button onClick={() => onClickAdd(index)}>+</button>
                </td>
                <td style={{ textAlign: 'center' }}>{item.quantity * item.price}</td>
              </tr>
            )
          })}
          {cart.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>Cart is empty</td>
            </tr>
          )}
          <tr>
            <td colSpan="3" style={{ textAlign: 'right' }}><strong>Total:</strong></td>
            <td style={{ textAlign: 'center' }}>
              <strong>
                {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
