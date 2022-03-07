import React, {useState} from 'react';

import MainImage from "./MainImage";
import Gallery from "./Gallery";

const PortalImage = ({ mainImage, onChangeImage, onClosePortal }) => {
    const [mouseOverCloseButton, setMouseOverCloseButton] = useState(false)
    const [mouseOverPreviousButton, setMouseOverPreviousButton] = useState(false)
    const [mouseOverNextButton, setMouseOverNextButton] = useState(false)

    const handlePreviousImageClick = () => {
        if (mainImage === 1) {
            onChangeImage(4)
        }
        else {
            onChangeImage(mainImage - 1)
        }
    }

    const handleNextImageClick = () => {
        if (mainImage === 4) {
            onChangeImage(1)
        }
        else {
            onChangeImage(mainImage + 1)
        }
    }
    return (
        <div className='portal'>
            <svg
                className='portal__close'
                onClick={() => onClosePortal(false)}
                onMouseEnter={() => setMouseOverCloseButton(true)}
                onMouseLeave={() => setMouseOverCloseButton(false)}
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill={mouseOverCloseButton ? 'hsl(26, 100%, 55%)' : 'white'}
                    fillRule="evenodd"/>
            </svg>

            <div className='portal-image'>
                <div className='portal-image__product-image'>
                    <div
                        className='portal-image__previous'
                        onClick={handlePreviousImageClick}
                        onMouseEnter={() => setMouseOverPreviousButton(true)}
                        onMouseLeave={() => setMouseOverPreviousButton(false)}
                    >
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 1 3 9l8 8"
                                stroke={mouseOverPreviousButton ? 'hsl(26, 100%, 55%)' : 'hsl(220, 13%, 13%)'}
                                stroke-width="3"
                                fill='none'
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className='portal-image__image-wrapper'>
                        <MainImage mainImage={mainImage}/>
                    </div>
                    <div
                        className='portal-image__next'
                        onClick={handleNextImageClick}
                        onMouseEnter={() => setMouseOverNextButton(true)}
                        onMouseLeave={() => setMouseOverNextButton(false)}
                    >
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m2 1 8 8-8 8"
                                stroke={mouseOverNextButton ? 'hsl(26, 100%, 55%)' : 'hsl(220, 13%, 13%)'}
                                stroke-width="3"
                                fill="none"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                <div className='portal-image__product-gallery'>
                    <Gallery imageFocused={mainImage} onChangeImage={onChangeImage} portal/>
                </div>
            </div>
        </div>
    );
};

export default PortalImage;
