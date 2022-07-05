import React from "react"
import { Context } from '../Context.js'

function CartItem({item}) {
    const [hovered, setHovered] = React.useState(false)
    const {removeFromCart} = React.useContext(Context)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    const itemPrice = Number(item.price).toLocaleString("en-US", {style:"currency", currency:"USD"})

    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            
            <img src={item.url} alt='' width="130px" />
            <p>{itemPrice}</p>
        </div>
    )
}

export default CartItem