import React, { useContext }  from 'react';
import { CartContext } from "./Mainhw.jsx";

function Cart() {
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);
    return (
        <div style={{width:'300px', border:'2px solid black', padding:'20px', backgroundColor:'lightblue'}}>
        <h2>Корзина</h2>
  
        {cart.length === 0 ? (
          <p>Корзина пустая</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.name} — {item.price} €</p>
                <button onClick={() => removeFromCart(index)}>
                  Удалить
                </button>
              </div>
            ))}
  
            <h3>Total Price: {totalPrice} €</h3>
          </div>
        )}
      </div>
    );
}

export default Cart;





