import React from "react"
import images from './media/images.js'

const Context = React.createContext()

function ContextProvider({children}) {
    const [imagesArr, setImagesArr] = React.useState(images)

    function toggleFavorite(id) {
        const updatedArray = imagesArr.map(img => {
            if(img.id === id) {
                return {...img, isFavorite: !img.isFavorite}
            }
            return img
        })

        setImagesArr(updatedArray)
    }

    return (
        <Context.Provider value={{
            imagesArr,
            toggleFavorite
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}