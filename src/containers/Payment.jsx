import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

import AppContext from '../context/AppContext';

import '../styles/components/Payment.css';
import totalSum from '../utils/totalSum';

const Payment = () => {

  const navigate = useNavigate()
  const { state: { cart }, state: { buyer }, addToOrders } = useContext(AppContext)

  const initialOptions = {
    "client-id": 'AU1WMXzXfU7EepXxj0y9F8b5suphj0LkwyFyURqS8_w4fzXpGADhSwR0nBwrtDXB1K7IeBsQCsvcKOrt',
    currency: "USD",
  }

  const paymentHandleSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addToOrders(newOrder)
      navigate('/checkout/success')
    }
  }

  useEffect(() => {
    if(cart.length === 0) {
      navigate('/checkout')
    }
  }, [cart])

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item, index) => (
            <div className="Payment-item" key={index}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }

        <p className='Payment-total'>Total a pagar: ${totalSum(cart)}</p>

        <div className="Payment-button">
          <PayPalScriptProvider options={initialOptions}>

            <PayPalButtons
              style={{ layout: "vertical" }}
              disabled={false}
              createOrder={(data, actions) =>
                actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          value: Number.parseFloat(totalSum(cart)).toFixed(2),
                        },
                      },
                    ],
                  })
                  .then((orderId) => {
                    return orderId;
                  })
              }
              onApprove={(data, actions) => {
                return actions.order
                  .capture()
                  .then((data) => {
                    // Your code here after capture the
                    paymentHandleSuccess(data);
                  })
                  .catch((error) => console.log(error));
              }}
            />
          </PayPalScriptProvider>
        </div>


      </div>
      <div></div>
    </div>
  );
};

export default Payment