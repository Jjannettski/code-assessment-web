import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../css/button.css'
import '../css/product.css'


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
      <div className="col s12 m7">
    <div id="shown-crd" className="card horizontal small">
      <div className="card-image">
        <img className="responsive-img" src={product.source} alt=""/>
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
    <div className="card hidden-crd">
      <div className="card-image">
        <img className="responsive-img" src={product.source} alt=""/>
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
