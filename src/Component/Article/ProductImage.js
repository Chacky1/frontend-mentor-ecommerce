import React, {useState} from 'react';

import Gallery from './Gallery'
import PortalImage from "./PortalImage";
import ReactDOM from "react-dom";

import MainImage from "./MainImage";

const ProductImage = (props) => {
    const [mainImage, setMainImage] = useState(1)
    const [isPortalShown, setIsPortalShown] = useState(false)

    const changeMainImage = (imageNumber) => {
        setMainImage(imageNumber)
    }

    const showImagePortal = () => {
        setIsPortalShown(true)
    }

    return (
        <div className='article-image'>
            <div className='article-image__next'>
                <img src="./images/icon-previous.svg" alt="previous"/>
            </div>
            <MainImage showImagePortal={showImagePortal} mainImage={mainImage}/>
            <Gallery imageFocused={mainImage} onChangeImage={changeMainImage}/>
            <div className='article-image__previous'>
                <img src="./images/icon-next.svg" alt="next"/>
            </div>
            {isPortalShown && ReactDOM.createPortal(<PortalImage mainImage={mainImage}
                                                                 onChangeImage={changeMainImage} onClosePortal={setIsPortalShown}/>, document.getElementById('image-portal'))}
        </div>
    );
};

export default ProductImage;
