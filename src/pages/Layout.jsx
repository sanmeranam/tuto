import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <header style={{
                padding: '10px',
                backgroundColor: 'black',
                color: 'white'

            }}>Layout Header
                <div style={{ display: 'flex' }}>
                    <Link to="/">Home</Link>
                    <Link to="about/234234">About</Link>
                </div>
            </header>
            <Outlet />
            <footer style={{
                padding: '10px',
                backgroundColor: 'black',
                color: 'white'

            }}>Layout Footer</footer>
        </div>
    )
}
