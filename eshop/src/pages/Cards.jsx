import React from "react"

import Card from "../components/Card.jsx"
import { Context } from '../Context.js'

function Cards() {
    const {imagesArr} = React.useContext(Context)
    
    const cards = imagesArr.map(
        img => <Card 
                img={img}
                key={img.id}
            />
        )

    return (
        <div className="cards-page">
            {cards}
        </div>
    )
}

export default Cards