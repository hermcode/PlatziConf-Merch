import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

import AppContext from '../context/AppContext';

import '../styles/components/Header.css'

const Header = () => {

  const { state: { cart }} = useContext(AppContext)

  return (
    <header className='Header'>

        <h1 className='Header-title'>
          <Link to='/' title='Ir a la página principal'>
          PlatziConf Merch
          </Link>
        </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <FaShoppingCart title="Ir al carrito de compras" size='25px'/>
        </Link>
        { cart.length > 0 && <div className='Header-alert'>{cart.length > 9 ? '+9' : cart.length}</div>}
      </div>
    </header>
  )
}

export default Header