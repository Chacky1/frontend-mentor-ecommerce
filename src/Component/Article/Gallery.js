import React from 'react';

const images = [
    './images/image-product-1-thumbnail.jpg',
    './images/image-product-2-thumbnail.jpg',
    './images/image-product-3-thumbnail.jpg',
    './images/image-product-4-thumbnail.jpg'
]

const Gallery = ({ imageFocused, onChangeImage, portal }) => {
    const thumbnailClassName = (index) => {
        if (index + 1 === imageFocused) {
            return portal ? 'gallery__image--portal-active' : 'gallery__image--active'
        }
        else {
            return portal ? 'gallery__image--portal' : ''
        }
    }

    return (
        <div className='gallery'>
            {images.map((image, index) => (
                <div
                    className={`gallery__image ${thumbnailClassName(index)}`}
                    key={index}
                    onClick={() => onChangeImage(index + 1)}
                >
                    <img
                        src={image}
                        alt={`thumbnail ${index}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
