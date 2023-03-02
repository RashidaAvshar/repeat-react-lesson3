import React from 'react'

const Card = ({img, title, description, price}) => {
  return (
   
        <div className="card">
          <img src={img} alt="" />
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
          <span className='price'>{price} <span>$</span> </span>
        </div>
   
  )
}

export default Card;
