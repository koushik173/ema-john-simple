import React, { useEffect,useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
// import fakeData from '../../fakeData';

const Shop = () => {
    // console.log(fakeData);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>{
            const first10 = data.slice(22,35);
            setProducts(first10)

        })
    },[])
    // console.log(products);

    const handleAddProduct = (product) =>{
        // console.log("Product Added", product);
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">   
                {
                    products.map(pd=> <Products
                        handleAddProduct = {handleAddProduct}
                         product={pd} ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;