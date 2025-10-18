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
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=''
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=''
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=''
            />
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
