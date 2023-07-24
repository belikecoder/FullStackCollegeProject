
import React from 'react';
import Nav from './NavBar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './sofa.css';





const sofaData = [
  { id:1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFOeRuLpRa5D6x2hnxY2II_HtuvJ-r9U4nA&usqp=CAU",
    title: 'ChesterField Sofa',
    price: '23000',
  },
  {id:2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrcFrmRn8VEsG7rOk6xdmMHqsqP5vjhRoYg&usqp=CAU",
    title: 'Daybed sofa',
    price: '27000',
  },
  {id:3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkCstFiOj7B7P-TrHkq5dpkby06Vv7Mrhsw&usqp=CAU",
    title: 'Arm Sofa',
    price: '35000',
  },
  {id:4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1c0H2lPnwOKJMNSpgYlbONA-r01-3--HAw&usqp=CAU",
    title: 'Knole sofa',
    price: '42000',
  },
  {id:5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEBuJ696S8mUzmj6m-hUZyEXyo2Aug9SnGw&usqp=CAU",
    title: 'Lawson sofa',
    price: '38547',
  },
  {id:6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYWyMzLnadh01GCXwHdhNrOYPvFUCrpGHXA&usqp=CAU",
    title: 'Chaise Longue',
    price: '40000',
  },
  {id:7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77tKQaPN7Di0yDqm6sVhrCywLMYU9kjfZcQ&usqp=CAU",
    title: 'Love seat',
    price: '22000',
  },
  {id:8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEckgs0eejtnkUn_yUHZRm7_QRWliqyJTQg&usqp=CAU",
    title: 'CamelBack sofa',
    price: '28000',
  },

];

export default function Sofa() {
  const [produc, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProductsByType("sofa");
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
    return total.toFixed(2); 
  };
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <section className="products">
        <h2>Our sofas</h2>
        <div className="all-products">
          {sofaData.map((drawer, index) => (
            <div className="product1" key={index}>
              <img src={drawer.image} alt={`Chest of Drawer ${index + 1}`} />
              <div className="product-info">
                <h4 className="product-title">{drawer.title}</h4>
                <p className="product-price">Rs.{drawer.price}</p>
                <button onClick={() => addToCart(drawer)}>
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
                <button onClick={() => addToCart(produc.drawer)}>
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
}


