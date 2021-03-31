import React from "react";
import "./BakeryItems.css";

const BakeryItems = (props) => {
  return (
    
    <li className="listItems">
      
     
        <div className="images">
           <img src={props.image} alt={props.name}/>
        </div>
        <div className='product-name'>
        <h1>{props.name}</h1>
        </div>
        <div className="price">
        <h3>Rupees {props.price}</h3>
        </div>
        
        <div className="count">
          {props.itemCount} {props.itemCount === 1 ? "total" : "total items"}
        </div>

    </li>
  );
};

export default BakeryItems;
