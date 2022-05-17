import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaRegSadTear } from "react-icons/fa";
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {

  const { state: { cart }, removeFromCart, emptyCart} = useContext(AppContext)

  const handleRemoveFromCart = (product, index) => {
    removeFromCart(product, index)
  }

  const handleTotalSum = () => {
    const reducer = (acc, curr) => acc + curr.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const handleEmptyCart = () => {
    emptyCart()
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3 className='Checkout-content--title'>{cart.length > 0 ? 'Orders list' : 'No hay productos en el carrito'}</h3>
        { cart.length > 0 
            ? cart.map((item, i) => (
              <div className="Checkout-item" key={i}>
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
                <button type="button" onClick={() => handleRemoveFromCart(item, i) }>
                  <FaTrashAlt title='Eliminar artículo del carrito' />
                </button>
              </div>
            ))
            
          : <FaRegSadTear size='50px' />
        }

        { cart.length > 0 && <button onClick={ handleEmptyCart } className='Checkout-button__empty-car'>Vaciar Carrito</button>}
        
      </div>

      { cart.length > 0 && (
      <div className="Checkout-sidebar">
        <h3>{`Precio Total: $ ${handleTotalSum()}`}</h3>
        <Link to='/checkout/information'>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
      )}
    </div>
  );
};

export default Checkout;
