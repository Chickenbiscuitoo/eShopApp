import React from "react"

import { Context } from '../Context.js'

function Card({img}) {
    const [isHovered, setIsHovered] = React.useState(false)

    const {toggleFavorite, cartItems, addToCart, removeFromCart} = React.useContext(Context)

    function favoriteIcon() {
        if(img.isFavorite) {
            return (
                <i
                    className="ri-heart-fill favorite"
                    onClick={() => toggleFavorite(img.id)}
                ></i>
            )
        } else if(isHovered) {
            return (
                <i
                    className="ri-heart-line favorite"
                    onClick={() => toggleFavorite(img.id)}
                ></i>
            )
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === img.id)

        if(isHovered && isInCart) {
            return (
                <i 
                    className="ri-shopping-cart-fill cart"
                    onClick={() => removeFromCart(img)}
                ></i>
            )
        } else if(isHovered) {
            return (
                <i
                    className="ri-add-circle-line cart"
                    onClick={() => addToCart(img)}
                ></i>
            )
        }
    }

    return (
        <div 
            className="card-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} alt="" />
            {cartIcon()}
            {favoriteIcon()}
            <h6>{img.title} - {Number(img.price).toLocaleString("en-US", {style:"currency", currency:"USD"})}</h6>
        </div>
    )
}

export default Card