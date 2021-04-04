import React from "react";
import "./BakeryItems.css";

const BakeryItems = (props) => {
  return (

  
    <li className="listItems">
     
           <img src={props.image} alt={props.name}/>
 
        <div className='product-name'>
        <h1>{props.name}</h1>
        </div>
        
        <h3 className="price">Price {props.price} PKR</h3>
      
        
        <div className="count">
          {props.itemCount} {props.itemCount === 1 ? "total" : "total items"}
        </div>

    </li>

  );
};

export default BakeryItems;
