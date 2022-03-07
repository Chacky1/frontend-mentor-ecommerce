import React from 'react';

const MainImage = ({ mainImage, showImagePortal }) => {
    return (
        <>
            <img
                className='main-product-image'
                src={`./images/image-product-${mainImage}.jpg`}
                alt='product'
                onClick={showImagePortal ? showImagePortal : () => {}}
            />
        </>
    );
};

export default MainImage;