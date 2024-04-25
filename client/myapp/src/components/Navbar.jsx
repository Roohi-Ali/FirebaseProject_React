import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link className = 'navlink' to='/'>Home</Link></li>
                <li><Link className = 'navlink' to='/login'>Login</Link></li>
                <li><Link className = 'navlink' to='/register'>Register</Link></li>
                <li><Link className = 'navlink' to='/firebaseAdd'>Firebase Add</Link></li>
                <li><Link className = 'navlink' to='/firebaseRead'>Firebase Read</Link></li>
                <li><Link className = 'navlink' to='/firebaseDelete'>Firebase Delete</Link></li>
                <li><Link className = 'navlink' to='/fileUpload'>File Upload</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
