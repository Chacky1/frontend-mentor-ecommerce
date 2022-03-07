import React, {useState, useContext} from 'react';
import {CartContext} from "../CartContext";
import {showPrice} from "../Utils";

const Price = () => {
    const { onAddProduct } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const handleMinusClick = () => {
        if (quantity !== 0) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const showTotalPrice = (price) => {
        if (quantity === 0) {
            return showPrice(price)
        }
        else {
            return showPrice(price * quantity)
        }
    }

    return (
        <div className='price'>
            <div className='price-print'>
                <p className='price-print__reduced'>{showTotalPrice(125)} <span>50%</span></p>
                <p className='price-print__standard'>{showTotalPrice(250)}</p>
            </div>

            <div className='add-cart'>
                <div className='add-cart__quantity'>
                    <div
                        className='add-cart__quantity-minus'
                        onClick={handleMinusClick}
                    >
                        <img src="./images/icon-minus.svg" alt="minus"/>
                    </div>
                    <p className='add-cart__quantity-print'>{quantity}</p>
                    <div
                        className='add-cart__quantity-plus'
                        onClick={handlePlusClick}
                    >
                        <img src="./images/icon-plus.svg" alt="plus"/>
                    </div>
                </div>

                <button
                    type='button'
                    className='button'
                    onClick={() => onAddProduct('0', 'Fall Limited Edition Sneakers', 125, quantity)}
                >
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="white" fillRule="nonzero"/>
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Price;
