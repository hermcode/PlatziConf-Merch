import { useState } from 'react'
import InitialState from '../data'

/**
 * It takes the initial state and returns the state, addToCart and removeToCart functions.
 * @returns An object with the state, addToCart and removeToCart functions.
 */
const useInitialState = () => {

  const [state, setState] = useState(InitialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }
  
  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove)
    })
  }

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const emptyCart = () => {
    setState({
      ...state,
      cart: []
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer,
    emptyCart
  }

}

export default useInitialState