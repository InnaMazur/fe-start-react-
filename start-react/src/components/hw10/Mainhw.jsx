import React, { createContext, useState }  from 'react';
import Products from "./Products.jsx";
import Cart from './Cart.jsx';

export const CartContext = createContext();

function Mainhw() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (index) => {
      const newCart = cart.filter((item, i) => i !== index);
      setCart(newCart);
    };
  
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price;
    }
  
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
        <div  style={{maxWidth:'1000px', margin:'40px auto'}}>
          <h1 style={{textAlign:'center'}}>
            Магазин
            </h1>
            <div style ={{display:'flex',justifyContent:'center', alignItems:'flex-start', gap:'40px'}}>
            <Products />
            <Cart />
            </div>
      
        </div>
      </CartContext.Provider>
    );
}

export default Mainhw;

 
 


