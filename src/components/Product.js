import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, inventory, title }) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
    <div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"
        height={'300px'}
        width={'300px'}
        alt=""
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
        <h2 className="header">{title}</h2>
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div className="card-action">
        {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
        </div>
      </div>
    </div>
  </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
