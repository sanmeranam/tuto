import React, { useState } from 'react'
import Item from './Item'

export default function ItemList() {
    const [name, setName] = useState('Santanu')
    return (
        <div>
            <ul>
                <li><Item name={name} onChange={(v) => {
                    setName(v)
                }} /></li>
            </ul>
        </div>
    )
}
