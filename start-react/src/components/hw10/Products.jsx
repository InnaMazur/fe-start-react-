import React,  { useContext } from 'react';

import { CartContext } from "./Mainhw.jsx";

function Products() {
    const { addToCart } = useContext(CartContext);

    const products = [
      { id: 1, name: "Телефон", price: 500 },
      { id: 2, name: "Ноутбук", price: 1200 },
      { id: 3, name: "Наушники", price: 150 },
    ];
    return (
        <div>
              <h2>Товары</h2>

{products.map((product) => (
  <div key={product.id}>
    <p>{product.name} — {product.price} €</p>
    <button onClick={() => addToCart(product)}>
      Добавить
    </button>
  </div>
))}
        </div>
    );
}

export default Products;




