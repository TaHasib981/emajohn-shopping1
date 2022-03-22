import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    const addToCart =(product)=>{
        console.log('product')
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='shop-cart'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product> )
                }
            </div>
            <div className='cart-summary'>
                <h3>Cart Summary</h3>
                <p>Select items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;