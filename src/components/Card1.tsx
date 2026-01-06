import React from 'react'

interface CardProps {
    name: String;
    price: number;
    isSpecial?: Boolean; // ? optional or if it comes this will be Boolean
}

const Card1 = ({ name, price, isSpecial = false }: CardProps) => {
    return (
        <div>
            <h2>
                {name} {price} {isSpecial && <span>Star</span>}
            </h2>
        </div>
    )
}

export default Card1