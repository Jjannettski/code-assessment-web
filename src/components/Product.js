import React from 'react'
import PropTypes from 'prop-types'
import '../css/button.css'
import '../css/product.css'

const Product = ({ price, inventory, title, source }) => (
  <div>
    <div>
      <div>
        <h2 className="hidden-title">{title}</h2>
        <span className="price-text">&#36;{price}</span>
      </div>
      <h2 className="shown-title">{title}</h2>
      <p>{inventory} Remaining</p>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  source: PropTypes.string
}

export default Product
