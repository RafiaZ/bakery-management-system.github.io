import React from "react";
import BakeryList from "../components/BakeryList";

const Item = () => {
  const ITEM = [
    {
      id: "i1",
      name: "Doughnuts",
      price: "170",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      total: "3",
    },
    {
      id: "i2",
      name: "Muffins",
      price: "170",
      image: "https://www.olgainthekitchen.com/wp-content/uploads/2020/03/Sour-Cream-Blueberry-Muffins-Recipe-4.jpg",
      total: "3",
    },
    {
      id: "i3",
      name: "Chicken bread",
      price: "170",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntPrj94_txVPQwmbDJ8_H2mHOpqnJzspbVxWc4Gh_XnyxB28l-ICe2YMuE8mL2PUNdRM&usqp=CAU",
      total: "3",
    }
  ];
  return <BakeryList items={ITEM} />;
};

export default Item;
