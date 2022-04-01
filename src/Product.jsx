import React from 'react'
import { Productdata } from './Productdata';
import Card from "./Card";

export const Product = () => {
  return (
      <div className='container-fluid'>
      <h1 className='text-center mt-5'>Our Product </h1>
    <div class="row">
   
    {
                       Productdata.map((val,ind)  =>
                       {
                           return <Card
                           key = {ind}
                               name={val.name}
                               img ={val.img}
                               price ={val.price}
                           />
                       })
                   }
    </div>
</div>
   
  )
}
export default Product;

