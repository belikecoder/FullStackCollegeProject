import React from 'react';

const SofaItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p><span>&#8377;</span>{product.price}</p>
     <div className="star">
      <h3><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></h3></div>
      {/* <Rating rating={product.rating} /> */}
      <button>Add to Cart</button>
    </div>
  );
};

export default SofaItem;
