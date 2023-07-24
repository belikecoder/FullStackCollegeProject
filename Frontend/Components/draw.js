import React from 'react';
import Nav from './NavBar';
import './sofa.css';


import axios from 'axios';
import { useEffect,useState } from 'react';

const chestOfDrawers = [
  {id:1,
    image:"https://s3.amazonaws.com/media.woodsmithplans.com/images/WB28150_six-drawer-dresser/photo-large-hd.jpg",
    title: 'Shop Chest Drawer',
    price: '129',
  },
  {id:2,
    image: "https://images.thdstatic.com/productImages/9e321133-3ffb-46f3-8f96-3e7ec27b0603/svn/english-oak-welwick-designs-dressers-hd8903-64_1000.jpg",
    title: 'Lowboy Chest of Drawer',
    price: '17500',
  },
  {id:3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MKH1aDlYiOV72_czJYZcHi_T7EfNl3BlBw&usqp=CAU",
    title: 'Dresser Chest of Drawer',
    price: '15000',
  },
  {id:4,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpqP9-BYNB-LpZYrf99cQws4r64nr_8z2Pg&usqp=CAU",
    title: 'Lowboy Chest of Drawer',
    price: '45000',
  },
  {id:5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUHf40Lo2qD_7oUR0bqeTH4QiX6BRn-OQYg&usqp=CAU",
    title: 'Media Chest Drawer',
    price: '19500',
  },
  {id:6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QpHvKxM0GYnQQpkNDvl0ypoMp-xLs7qVzA&usqp=CAU",
    title: 'Cypress Chest of Drawer',
    price: '19000',
  },
  {id:7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRlrAiTR7E0xFHMT7-FdPr-W3rbWsJdr6Cg&usqp=CAU",
    title: 'Kingsu Chest of Drawer',
    price: '21000',
  },
  {id:8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Acwqs5tfaFdBRZKOTQYAMgndGIjwzEQJHQ&usqp=CAU",
    title: 'IKEA TRYSIL Chest of Drawer',
    price: '35000',
  },
];

export default function Draw() {
  const [produc, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProductsByType("drawer");
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
        <h2>Our Chest Of Drawers</h2>
        <div className="all-products">
          {chestOfDrawers.map((drawer, index) => (
            <div className="product1" key={index}>
              <img src={drawer.image} alt={`Chest of Drawer ${index + 1}`} />
              <div className="product-info">
                <h4 className="product-title">{drawer.name}</h4>
                <p className="product-price">Rs.{drawer.price}</p>
                <button onClick={() => addToCart(drawer)}>
                    Add to cart
                  </button>
              </div>
            </div>
          ))}
        </div>
        <section className="products"></section>
        <h2>Customer Products</h2>
        <div className="all-products">
          {produc.map((produc, index) => (
            <div className="product1" key={index}>
              <img src={produc.image} alt={`Sofa ${index + 1}`} />
              <div className="product-info">
                <h4 className="product-title">{produc.title}</h4>
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

