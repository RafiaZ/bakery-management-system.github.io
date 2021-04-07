import React from "react";
import BakeryItems from "./BakeryItems";

import './BakeryList.css';

const BakeryList = (props) => {
  if (props.items.length === 0) {
    return <div>
      <h1>No items found!</h1></div>;
  }

  return (
    <div>
       {/* <h1 className="header">Bakery Items</h1> */}
    <ul className="list">
      
      {props.items.map((item) => (
        <BakeryItems
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          itemCount={item.total}
        />
      ))}
    </ul>
    </div>
  )
};

export default BakeryList;
