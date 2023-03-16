import React from 'react'

const Card = ({ img, name, bg }) => {
    return (
        <div className={bg===name ? 'card card-active' : 'card'} >
            <img src={img} alt={name} />
            <p className={name==='X'? 'user-X' : 'user-O'}>{name}</p>
        </div>
    )
}

export default Card
