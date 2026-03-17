import React,{ useEffect, useState } from 'react';



function Clothes() {
      const [products, setProducts] = useState([]);
    
      // 🔹 6 мужских статических товаров с рабочими изображениями
      const staticMen = [
        {
          id: 101,
          title: "Black T-Shirt",
          price: 29,
          description: "A comfortable black t-shirt made from 100% cotton.",
          image: "https://th.bing.com/th/id/OIP.YpiwJqZc-AvPnc4GHpt5yQHaHR?w=200&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          category: "men's clothing",
        },
        {
          id: 102,
          title: "Grey Hoodie",
          price: 49,
          description: "A cozy grey hoodie perfect for casual wear and cooler weather.",
          image: "https://tse4.mm.bing.net/th/id/OIP.tEjpPMFv13d8RTJ74X5z8gAAAA?pid=ImgDet&w=187&h=187&c=7&dpr=1,3&o=7&rm=3",
          category: "men's clothing",
        },
        {
          id: 103,
          title: "Classic Jeans",
          price: 59,
          description: "Timeless blue jeans with a straight fit, made from durable denim fabric.",
          image: "https://tse1.mm.bing.net/th/id/OIP.EvYd-w9oXC4ZR8p-fhIXXQHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1,3&o=7&rm=33",
          category: "men's clothing",
        },
        {
          id: 104,
          title: "Sport Jacket",
          price: 89,
          description: "A lightweight sport jacket designed for active lifestyles, featuring breathable fabric and a modern fit.",
          image: "https://th.bing.com/th/id/OIP.UIKDA9rnpV48gcaKqc67TwHaHa?w=193&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          category: "men's clothing",
        },
        {
          id: 105,
          title: "Blue Shirt",
          price: 39,
          description: "A stylish blue shirt made from soft cotton, perfect for both casual and formal occasions.",
          image: "https://tse4.mm.bing.net/th/id/OIP.AtoUVhkut2N43P6PG1n2ZAHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1,3&o=7&rm=3",
          category: "men's clothing",
        },
        {
          id: 106,
          title: "Winter Coat",
          price: 120,
          description: "A warm winter coat with a stylish design, featuring insulation to keep you cozy during cold weather.",
          image: "https://tse4.mm.bing.net/th/id/OIP.Jlkg3KIiNADWzYbNgW7w9wHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1,3&o=7&rm=3",
          category: "men's clothing",
        },
      ];
    
      // 🔹 4 женских статических товара с рабочими изображениями
      const staticWomen = [
        {
          id: 107,
          title: "Red Dress",
          price: 65,
          description: "A stunning red dress made from high-quality fabric, perfect for special occasions and evening events.",
          image: "https://tse1.explicit.bing.net/th/id/OIP.d_h7rPOzDfKOOnW3cWKkEgHaLH?pid=ImgDet&w=187&h=280&c=7&dpr=1,3&o=7&rm=3",
          category: "women's clothing",
        },
        {
          id: 108,
          title: "Summer Skirt",
          price: 35,
          description: "A light and breezy summer skirt with a floral pattern, perfect for warm weather and casual outings.",
          image: "https://tse3.mm.bing.net/th/id/OIP.HUmvoWkQIo_PKuc2pRie-gHaEp?pid=ImgDet&w=187&h=117&c=7&dpr=1,3&o=7&rm=3",
          category: "women's clothing",
        },
        {
          id: 109, 
          title: "Pink Blouse",
          price: 42,
          description: "A chic pink blouse made from soft fabric, ideal for both office wear and casual occasions.",
          image: "https://tse1.mm.bing.net/th/id/OIP.AIWRWlNfeRuaWsMwiD2yxgHaE8?pid=ImgDet&w=187&h=124&c=7&dpr=1,3&o=7&rm=3",
          category: "women's clothing",
        },
        {
          id: 110,
          title: "Red skirt",
          price: 95,
          description: "A fashionable red skirt with a flattering fit, perfect for making a statement at any event.",
          image:"https://tse1.mm.bing.net/th/id/OIP.DluconkJfMjInJ1_D2ocMgHaEJ?pid=ImgDet&w=187&h=104&c=7&dpr=1,3&o=7&rm=3",
          category: "women's clothing",
        },
      ];
    
      useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
          
            const clothingFromAPI = data.filter(
              (item) =>
                item.category === "men's clothing" ||
                item.category === "women's clothing"
            );
    
            const allProducts = [...clothingFromAPI, ...staticMen, ...staticWomen];
    
            setProducts(allProducts);
          })
          .catch((error) => console.log(error));
      }, []);
    
      return (
        <div className="products-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} width="150" />
              <p><strong>{product.price} €</strong></p>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      );
    }
   
    export default Clothes;