import React from "react"

import { Context } from '../Context.js'

function Card({img}) {
    const [isHovered, setIsHovered] = React.useState(false)

    const {toggleFavorite} = React.useContext(Context)

    function favoriteIcon() {
        if(img.isFavorite) {
            return <i
                    className="ri-heart-fill favorite"
                    onClick={() => toggleFavorite(img.id)}
                ></i>
        } else if(isHovered) {
            return <i
                    className="ri-heart-line favorite"
                    onClick={() => toggleFavorite(img.id)}
                ></i>
        }
    }

    return (
        <div 
            className="card-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} alt="" />
            {
                isHovered && <i className="ri-add-circle-fill cart"></i>
            }
            {favoriteIcon()}
            <h6>{img.title} - {img.price}</h6>
        </div>
    )
}

export default Card