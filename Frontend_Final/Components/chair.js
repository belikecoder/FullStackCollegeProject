

import React from 'react';
import Nav from './NavBar';
import './sofa.css';
import { useEffect,useState } from 'react';
import axios from 'axios';




const chairs = [
  {id:1,
    image:"https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?cs=srgb&dl=pexels-mike-bird-116910.jpg&fm=jpg",
    title: 'Three Stick Chair',
    price: '129',
  },
  {id:2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXhHctl3DjoU8WXBfIJGui-LQrpXomhcEPmkf0QEOAU09BR0Uza3Wos5mDuHcIxCSyEs&usqp=CAU",
    title: 'Arm Chair',
    price: '299',
  },
  {id:3,
    image: "https://c0.wallpaperflare.com/preview/807/56/858/chair-furniture-wood-seat.jpg",
    title: 'Office Chair',
    price: '999',
  },
  {id:4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEimjpvYJzD7Z8bbefBqktk_L7BFH7aobeWw&usqp=CAU",
    title: 'Wing Chair',
    price: '4500',
  },
  {id:5,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7P_Fsbu3sTEgmpuhvls_nREOy9J_3uB75Tg&usqp=CAU",
    title: 'Kings Chair',
    price: '5000',
  },
  {id:6,
    image: "https://media.istockphoto.com/id/1497352434/photo/deck-chair-on-grass.webp?b=1&s=170667a&w=0&k=20&c=_1uyA63PKJLVg7vneC0uOfj6CnWbRI7YWAnooZAmt8I=",
    title: 'Folding Chair',
    price: '5500',
  },
  {id:7,
    image:"https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-chair-stools-are-commercially-available-elements-elementmaterial-png-image_608426.jpg",
    title: 'Dinning Chair',
    price: '1700',
  },
  {id:8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZo4PoWEnR0R1GZK4YNkcZB7GeBajJbcvGw&usqp=CAU",
    title: 'Eames Longe Chair',
    price: '1200',
  },
 
];

export default function Chair() {
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
        <h2>Our Chairs</h2>
        <div className="all-products">
          {chairs.map((chair, index) => (
            <div className="product1" key={index}>
              <img src={chair.image} alt={`Chair ${index + 1}`} />
              <div className="product-info">
                <h4 className="product-title">{chair.title}</h4>
                <p className="product-price">{chair.price}</p>
                <button onClick={() => addToCart(chair)}>
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
                <button onClick={() => addToCart(produc.chair)}>
                    Add to cart
                  </button>
              </div>
            </div>
          ))}
        </div>
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
      </section>
    </>
  );
}

