import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext'
import { assets } from '../../assets/assets'
import './Product.css'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { food_list, addToCart, cartItems, url } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(1)
  const product = food_list.find((item) => item._id === id)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!product)
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button 
          className="back-to-shop-btn"
          onClick={() => {
            navigate('/shop')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to Shop
        </button>
      </div>
    )

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-section">
          <img
            src={url + '/images/' + product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            <img src={assets.rating_starts} alt="Rating" />
            <span>4.8 (120 reviews)</span>
          </div>
          <p className="product-price">৳{product.price.toLocaleString('bn-BD')}</p>
          <p className="product-description">{product.description}</p>
          <ul className="product-highlights">
            <li>✅🚚 Fast delivery available</li>
            <li>🔒 Secure payment</li>
            <li>💯 Quality guaranteed</li>
            <li>🔄 Easy returns</li>
          </ul>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button
              className="product-add-to-cart"
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product._id)
                }
                setQuantity(1)
              }}
            >
              {cartItems[product._id] > 0
                ? `Added (${cartItems[product._id]}) - Add ${quantity} More`
                : `Add ${quantity} to Cart`}
            </button>
            
            <button
              className="product-buy-now"
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product._id)
                }
                navigate('/cart')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="product-reviews-section">
        <h2>Customer Reviews</h2>
        <p className="product-reviews-placeholder">(Reviews coming soon!)</p>
      </div>
    </div>
  )
}

export default Product
