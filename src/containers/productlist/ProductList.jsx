import React from 'react';
import { Product } from '../../components';
import './productlist.css';
import productData  from './productData';


const ProductList = () => {


  const displayProduct = productData.map(products =><Product key={products.id} name={products.name} picture={products.picture} sortiment={products.sortiment} />)

  return (
    <div className="slide__products">
      <div className="slide__products-bar" />
      <div className="slide__products-container">
        {displayProduct}
      </div>
    </div>
  )
}

export default ProductList