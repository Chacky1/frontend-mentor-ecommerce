import React from 'react';

import Price from "./Price";

const ProductDescription = () => {
    return (
        <div className='article-description'>
            <h4 className='article-description__company'>SNEAKER COMPANY</h4>
            <h3 className='article-description__title'>Fall Limited Edition Sneakers</h3>
            <p className='article-description__text'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            <Price />
        </div>
    );
};

export default ProductDescription;
