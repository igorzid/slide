import React from 'react';
import './product.css';
import { useParams } from 'react-router-dom';

const Product = ({name, picture, sortiment}) => {

  const params = useParams()

  const productSortiment = sortiment
  const displaySortiment = params.sortimentName

  if (productSortiment === displaySortiment) {
    return (
      <div className="slide__products-product">
        <div className="slide__products-product_id">
          <img src={ require('../../assets/products/' + picture + '.webp') } alt={name}/>
          <h2>{name}</h2>
        </div>
        <div className="slide__products-product_info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam nesciunt quod delectus totam doloribus libero aliquam molestias, omnis illo labore. Eius, rem perferendis facilis tempore officia iusto totam accusantium.</p>  
        </div>
      </div>
    )
  }
}

export default Product