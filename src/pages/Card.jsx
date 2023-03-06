import React from 'react'

const Card = ({img, title, description, price}) => {
  return (
   
        <div className="card">
          <img src={img} alt="" />
          <p className='title'><span>Title: </span>{title.slice(0,18)}</p>
          <p className='description'> <span>Description:</span> {description.slice(0,30)}</p>
          <span className='price'>{price} <span>$</span> </span>
        </div>
   
  )
}

export default Card;
