import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import SpinnerLoader from '../components/SpinnerLoader';

import AppContext from '../context/AppContext';
import useMapAddress from '../hooks/useMapAddress';
import '../styles/components/Success.css';

const Success = () => {

  const navigate = useNavigate()

  const { state: { buyer },  emptyCart } = useContext(AppContext)
  const [ isLoading, setIsLoading ] = useState(true)

  const address = `${buyer[0]?.apto} ${buyer[0]?.address}, ${buyer[0]?.city}`
  const location = useMapAddress(address, setIsLoading)
  
  useEffect(() => {
    if(buyer.length === 0){
      navigate('/checkout')
    }
    emptyCart()
  }, [buyer])
  
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer[0]?.name.split(' ')[0] || 'Hey'}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección:</span>
        <div className="Success-map">
          { 
            isLoading
              ? <SpinnerLoader />
              : <Map location={location} />
          }
        </div>
      </div>
    </div>
  );
};

export default Success