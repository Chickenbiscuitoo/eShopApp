import React from "react"
import images from './media/images.js'

const Context = React.createContext()

function ContextProvider({children}) {
    const [imagesArr, setImagesArr] = React.useState(images)
    const [cartItems, setCartItems] = React.useState([])

    function toggleFavorite(id) {
        const updatedArray = imagesArr.map(img => {
            if(img.id === id) {
                return {...img, isFavorite: !img.isFavorite}
            }
            return img
        })

        setImagesArr(updatedArray)
    }

    function addToCart(img) {
        setCartItems(prevCart => [...prevCart, img])
    }

    function removeFromCart(img) {
        const filteredArr = cartItems.filter(item => item.id !== img.id)
        setCartItems(filteredArr)
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{
            imagesArr,
            toggleFavorite,
            cartItems,
            addToCart,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}