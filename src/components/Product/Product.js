import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const addingOnCart = props.addToCart
    
   const {name, id, img, price} = props.product
    return (
        <div className='product-container'>
            <img  src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Id: {id}</p>
            </div>
            <button onClick={addingOnCart} className='add-btn'> <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;