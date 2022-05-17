import React, { useRef, useContext }from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => { 

  const navigate = useNavigate()

  const { state: {cart}, addToBuyer } = useContext(AppContext)
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }
  
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <label htmlFor="name">
              Nombre Completo:
              <input type="text" placeholder="Nombre completo" name="name" id="name" />
            </label>
            <label htmlFor="email">
              Correo electrónico:
              <input type="text" placeholder="Correo electrónico" name="email" id="email" />
            </label>
            <label htmlFor="address">
              Dirección:
              <input
                type="text"
                placeholder="Dirección"
                name="address"
                id="address"
              />
            </label>
            <label htmlFor="apto">
              Número del domicilio:
              <input type="text" placeholder="Número del domicilio" name="apto" id="apto" />
            </label>
            <label htmlFor="country">
              País:
              <input
                type="text"
                placeholder="País"
                name="country"
                id="country"
              />
            </label>
            <label htmlFor="state">
              Estado:
              <input type="text" placeholder="Estado" name="state" id="state" />
            </label>
            <label htmlFor="city">
              Ciudad:
              <input type="text" placeholder="Ciudad" name="city" id="city" />
            </label>
            <label htmlFor="cp">
              Código Postal:
              <input type="text" placeholder="C.P." name="cp" id="cp" />
            </label>
            <label htmlFor="phone">
              Teléfono:
              <input type="text" placeholder="Teléfono" name="phone" id="phone" />
            </label>
          </form>
        </div>
        <div className="Information-buttons">
          <Link to='/checkout'>
            <div className="Information-back">Regresar</div>
          </Link>
          <div className="Information-next">
            <button onClick={ handleSubmit }> Pagar</button>
          </div>


        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item, index) => (
              <div className="Information-item" key={index}>
                <div className="Information-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default Information