import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    const {img, name,seller,price,stock} = props.product; 
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='productName'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p> 
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='addButton' 
                onClick={()=>props.handleAddProduct(props.product)} 
                ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>

            </div>
        </div>
    );
};

export default Products;
