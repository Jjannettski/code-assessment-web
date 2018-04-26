import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../css/button.css'
import '../css/cartcontainer.css'
import '../css/product.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div style={{ marginBottom: 20 }}>
      <div className="col s12 m7">
    <div id="shown-crd" className="card horizontal small">
      <div className="card-image">
        <img className="responsive-img" src={product.source}
        alt=""
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
      key={product.id}
      />
        </div>
      </div>
    </div>
    <div className="card hidden-crd">
      <div className="card-image">
        <img className="responsive-img" src={product.source}
        alt=""
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
      key={product.id}
      />
        </div>
      </div>
    </div>
  </div>
  </div>
    )
  ) : (
    <div>
        <div className="col s12 m7">
            <div>
            <div>
    <i className="large material-icons">add_shopping_cart</i>
    <h6>Please add some products to cart.</h6>
    </div>
    </div>
      </div>
      </div>
  )

  return (
    <div className="cartcontainer" id="emptycart">
    <div className="col s12 m7">
    <div className="card">
      <div className="card-stacked">
        <div className="card-content">
      <h3>Your Cart</h3>
      <div className="card-action"></div>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button 
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}
        className="checkout-btn buttontest">
        Checkout
      </button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
