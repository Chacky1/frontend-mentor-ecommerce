import React, {useState} from 'react'

import Product from "./Pages/Product";
import Navigation from "./Component/Navigation/Navigation";
import {CartContext} from "./Component/CartContext";

const App = () => {
    const [cart, setCart] = useState([])

    const addProductToCart = (id, name, price, quantity) => {
        if (quantity !== 0) {
            setCart(prevCart => [...prevCart, { id, name, price, quantity }])
        }
    }

    const deleteProductFromCart = (id) => {
        const filteredCart = cart.filter(product => {
            return product.id !== id
        })
        setCart(filteredCart)
    }

    return (
        <CartContext.Provider value={{ 
            cart: cart, 
            onAddProduct: addProductToCart, 
            onDeleteProduct: deleteProductFromCart 
        }}>
            <Navigation/>
            <Product/>
        </CartContext.Provider>
    )
}

export default App
