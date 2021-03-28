import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = ({ product,showAddToCart, handleAddProduct }) => {
    // console.log(props);
    // const { product,showAddToCart, handleAddProduct } = props

    const { img, name, seller, price, stock, key } = product;
    return (
        <div className="product">
            <div>
                {/* <img src={props.product.img} alt=""/> */}
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name"><Link to={'/product/' + key}>{name}</Link></h3>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>only {stock} left in stock - order soon</small></p>
                {showAddToCart === true && <button className='main-button' onClick={() => handleAddProduct(product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>}
            </div>
        </div>
    );
};

export default Product;