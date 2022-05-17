import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>{product.title} <span>${product.price}</span></h2>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={handleAddToCart(product)}>Agregar al carrito</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product