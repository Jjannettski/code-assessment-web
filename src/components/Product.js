import React from 'react'
import PropTypes from 'prop-types'
import '../css/button.css'

const Product = ({ price, inventory, title }) => (
  <div>
        <div>
        <h2 className="header">{title}</h2>
        <span className="price-text">&#36;{price}</span>
        <span>&#36;{price}</span>
        <p>{inventory} remaining</p>
        </div>
        {/* <div className="card-action">
        &#36;{price}{inventory ? ` x ${inventory}` : null}
        </div> */}
        </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
