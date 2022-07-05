import React from "react"
import CartItem from '../components/CartItem.jsx'
import { Context } from '../Context.js'

function Cart() {
    const [buttonText, setButtonText] = React.useState("Place Order")
    const {cartItems, emptyCart} = React.useContext(Context)
    const cartItemElements = cartItems.map(item => <CartItem key={item.id} item={item}/>)
    
    function calculateTotalCost() {
        let price = 0
        cartItems.map(item => price += Number(item.price))

        return price.toLocaleString("en-US", {style:"currency", currency:"USD"})
    }

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    // const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {calculateTotalCost()}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart