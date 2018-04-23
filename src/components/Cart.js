import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import '../css/button.css'
import '../css/cartcontainer.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
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
            {/* <h2 className="header">Your Cart</h2> */}
            <div id="emptycart" className="cartcontainer">
            <div>
    <i className="large material-icons">add_shopping_cart</i>
    <h6>Please add some products to cart.</h6>
    </div>
    </div>
      </div>
      </div>
  )

  return (
    <div className="cartcontainer">
    <div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
      <h3>Your Cart</h3>
      <div className="card-action"></div>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button 
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
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
