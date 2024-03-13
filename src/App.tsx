
import { useEffect, useState } from 'react';
import './App.css'
import Product from './component/Product'
const Products=[
  { name: "Product A", price: 20 }, // item
  { name: "Product B", price: 30 }, // item
  { name: "Product C", price: 50 }, // item
]


function App() {
  return(
  <>
           {Products.map((item, index) => {
                return <Product item={item} key={index} />;
            })}
  </>
  )
 

}

export default App
