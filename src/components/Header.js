import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import '../components/Header.css'
// import '../styles.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='header-design'>
            {/* {logo} */}
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
            <div className='header-logo'>
                <Link className='header-link' to='/login'>Log in</Link>
                <Link className='header-link-2' to='/sign'>Sign up</Link>
            </div>
       </div>
    </header>
  )
}

export default Header