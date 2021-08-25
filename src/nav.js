import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const nav = () => {

    const Style={
        color:'white'
    }
    return (
        <div>
            <nav>
                <ul className="List">
                    <Link to="/About" style={Style}><li>About</li></Link>
                    <Link to="/Shop" style={Style}><li>Shop</li></Link>
                    
                </ul>
            </nav>
        </div>
    )
}

export default nav
