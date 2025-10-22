import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'

const FoodItem = ({ id, name, price, description, image }) => {
  // Defensive check: if any required prop is missing, do not render
  if (!id || !name || !price || !description || !image) {
    return null;
  }
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)
  // Defensive check for cartItems[id]
  const itemCount = cartItems && cartItems[id] ? cartItems[id] : 0;
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <Link to={`/product/${id}`}>
          <img
            src={url + '/images/' + image}
            alt={name}
            className='food-item-image'
          />
        </Link>
        {itemCount === 0 ? (
          <button
            className='add-to-cart-btn'
            onClick={() => addToCart(id)}
          >
            <span>Add to Cart</span>
            {/* <img src={assets.add_icon_white} alt='' /> */}
          </button>
        ) : (
          <div className='food-item-counter'>
            <button
              className='counter-btn'
              onClick={() => removeFromCart(id)}
            >
              <img src={assets.remove_icon_red} alt='' />
            </button>
            <p>{itemCount}</p>
            <button
              className='counter-btn'
              onClick={() => addToCart(id)}
            >
              <img src={assets.add_icon_green} alt='' />
            </button>
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt='' /> */}
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>৳{price.toLocaleString('bn-BD')}</p>
      </div>
    </div>
  )
}

export default FoodItem
