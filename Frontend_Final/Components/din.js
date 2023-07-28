import React, { useEffect, useState } from 'react';
import Nav from './NavBar';
import './sofa.css';
import axios from 'axios';

  
  const diningTables = [
    { id:1,
      image: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: 'Console',
      price: '32000',
    },
    {
      id:2,
      image: "https://images.unsplash.com/photo-1633505412556-82c0921e8f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpbmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: 'Rectangle',
      price: '41000',
    },
    {id:3,
      image: "https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?cs=srgb&dl=pexels-pixabay-271696.jpg&fm=jpg",
      title: 'Square',
      price: '90000',
    },
    {id:4,
      image: "https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpbmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: 'Industrial',
      price: '25100',
    },
    {id:5,
      image: "https://images.wallpaperscraft.com/image/single/living_room_dining_room_chairs_7335_1920x1080.jpg",
      title: 'Marbel',
      price: '23000',
    },
    {id:6,
      image: "https://www.pngmart.com/files/7/Dining-Table-PNG-Pic.png",
      title: 'Convivio',
      price: '24000',
    },
    {id:7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjRU7qncUDJtoZT4r3QB3iZbPQXkCbnqREg&usqp=CAU",
      title: 'Contemorphy',
      price: '20000',
    },
    {id:8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB57WtkUFhtAhJF-xWR46RVRT0K7KH-MI2MA&usqp=CAU",
      title: 'Farm House',
      price: '24500',
    },
  ];
  
  const Din = () => {
    const [produc, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      fetchProductsByType("dinning");
    }, []);
  
    const fetchProductsByType = async (type) => {
      try {
        const response = await axios.get(`http://localhost:8080/product/get/${type}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const addToCart = (product) => {
      const itemInCart = cart.find((item) => item.id === product.id);
  
      if (itemInCart) {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
  
    const removeFromCart = (product) => {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0);
  
      setCart(updatedCart);
    };
  
    const calculateTotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return total.toFixed(2); // To display total with 2 decimal places
    };
  
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />
        <section className="products">
          <h2>Our Dining Tables</h2>
          <div className="all-products">
            {diningTables.map((table, index) => (
              <div className="product1" key={index}>
                <img src={table.image} alt={`Dining Table ${index + 1}`} />
                <div className="product-info">
                  <h4 className="product-title">{table.title}</h4>
                  <p className="product-price">Rs.{table.price}</p>
                  <button onClick={() => addToCart(table)}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          </section>
          <section className="products">
          <h2>Customer Products</h2>
          <div className="all-products">
            {produc.map((produc, index) => (
              <div className="product1" key={index}>
                <img src={produc.image} alt={`Sofa ${index + 1}`} />
                <div className="product-info">
                  <h4 className="product-title">{produc.name}</h4>
                  <p className="product-price">Rs.{produc.price}</p>
                  <button onClick={() => addToCart(produc.table)}>
                    Add to cart
                  </button>
                 
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="cart-page">
        <center>  <h4>Your Cart Items</h4></center>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>Price: Rs.{item.price}</p>
                  <div className="quantity">
                    <button onClick={() => removeFromCart(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            Total: Rs.{calculateTotal()}
          </div>
          <a className="checkout-btn" href="/checkout">
            Proceed to Checkout
          </a>
        </div>
      </>
    );
  };
  
  export default Din;
  