import React, {useState, useEffect} from 'react';
import Card from './Card';
import { data } from '../mockdata';


const Home = ()=>{

  return(
  <div className="container">
<div className="product-section">
      {
        data.map((item)=>(
          <Card 
          img={item.image} 
          title={item.title} 
          description={item.description} 
          price={item.price}  
          key = {item.id}         
          />
        ))
      }  
        </div> 

      
  </div>
  )
}
export default Home;
