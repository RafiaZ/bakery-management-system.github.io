import React from "react";
import BakeryList from "../components/BakeryList";

const Item = () => {
  const ITEM = [
    {
      id: "i1",
      name: "Doughnut",
      price: "170",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      total: "3",
    },
    {
      id: "i1",
      name: "Doughnut",
      price: "170",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      total: "3",
    },
    {
      id: "i1",
      name: "Doughnut",
      price: "170",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      total: "3",
    },
  ];
  return <BakeryList items={ITEM} />;
};

export default Item;
