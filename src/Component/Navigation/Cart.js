import React, {useContext} from 'react';
import {CartContext} from "../CartContext";
import {showPrice} from "../Utils";

const Cart = () => {
    const { cart, onDeleteProduct } = useContext(CartContext)

    const showProducts = () => {
        return cart.map(product => {
            return (
                <div
                    key={product.id}
                    className='cart-product'>
                    <img
                        className='cart-product__thumbnail'
                        src='./images/image-product-1-thumbnail.jpg'
                        alt='product thumbnail'
                    />
                    <div className='cart-product__description'>
                        <p>{product.name}</p>
                        <p>{showPrice(product.price)} x {product.quantity} <span>{showPrice(product.price * product.quantity)}</span></p>
                    </div>
                    <img
                        className='cart-product__delete'
                        onClick={() => onDeleteProduct(product.id)}
                        src="./images/icon-delete.svg"
                        alt="delete"
                    />
                </div>
            )
        })
    }

    return (
        <div className='cart'>
            <h4 className='cart__title'>Cart</h4>
            <div className='cart__content'>
                {cart.length === 0 && <p>Your cart is empty</p>}
                {cart.length > 0 && showProducts()}
                {cart.length > 0 && <button className='button'>Checkout</button>}
            </div>
        </div>
    );
};

export default Cart;
