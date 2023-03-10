import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { width } from '@mui/system';

const Details = () => {
    const [dataDetails, setDataDetails] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setDataDetails(res.data)
        })
    },[])
    const {category, description, image, price} = dataDetails;
  return (
    <div className='container'>
        <h1>{category}</h1>
        <p>{description}</p>
        <img src={image} alt="" width={170} height={250}/>
        <h3>{price}</h3>     
    </div>
  )
}

export default Details;
