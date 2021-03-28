import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    // useParams pass kora parameter ke receive korar jonno use kora hoy

    const product = fakeData.find(pd => pd.key === productKey)

    return (
        <div>
            {/* <h1 >{productKey} Details Comming Soon....</h1> */}
            <h1 >Your Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;