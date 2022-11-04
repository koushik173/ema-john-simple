import React, { useEffect,useState } from 'react';
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
            const first10 = data.slice(0,10);
            setProducts(first10)

        })
    },[])
    // console.log(products);

    const handleAddProduct = (product) =>{
        console.log("Product Added", product);
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
                <h3>This is card</h3>
                <h5>Order Summery: {cart.length}</h5>
            </div>
            
        </div>
    );
};

export default Shop;