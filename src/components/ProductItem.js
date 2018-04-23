import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../css/button.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
      <div className="col s12 m7">
    {/* Write a script to remove the horizontal class from the card below for mobiel devices */}
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1wSOuq0rmJtJPA1TRMdfpQh7Je4GDqR51g04T6eCyauOfHyY"
        height={'370px'}
        width={'370px'}
        alt=""
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
      />
    <div>
        <button
      className='buttontest'
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
