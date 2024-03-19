import React from 'react'
import './Panel.css'

export default function Panel({ title, children }) {
    return (
        <div className='panel'>
            <div className="panel-header">
                <h3>{title}</h3>
            </div>
            <div className="panel-body">
                {children}
            </div>
        </div>
    )
}
