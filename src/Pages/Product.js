import React from 'react';

import ProductImage from "../Component/Article/ProductImage";
import ProductDescription from "../Component/Article/ProductDescription";

const Product = () => {
    return (
        <div className='product'>
            <div className='image-wrapper'>
                <div>
                    <ProductImage />
                </div>
            </div>
            <div className='description-wrapper'>
                <ProductDescription />
            </div>
        </div>
    );
};

export default Product;
