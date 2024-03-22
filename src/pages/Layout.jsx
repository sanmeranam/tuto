import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppContext from '../AppContext'

export default function Layout() {
    const { cart } = useContext(AppContext)

    return (
        <div>
            <header style={{
                padding: '10px',
                backgroundColor: 'black',
                color: 'white'

            }}>Layout Header
                <div style={{ display: 'flex' }}>
                    <Link to="/" style={{ padding: '0px 10px' }}>Home</Link>
                    <Link to="cart" style={{ padding: '0px 10px' }}>Cart ({cart.length})</Link>
                    <Link to="about/234234" style={{ padding: '0px 10px' }}>About</Link>
                </div>
            </header>
            <div style={{ padding: '10px' }}>
                <Outlet />
            </div>
        </div>
    )
}
