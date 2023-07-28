import React, { useState } from 'react';
import './AddProduct.css';
import Nav from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [id, SetId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/product/save", 
      {
        name: name,
        price: price,
        image: img,
        type: type
      });
      alert("Product Added Successfully");
      SetId("");
      setName("");
      setPrice("");
      setImg("");
      setType("");
    } 
    catch (err) {
      alert("Error in Advertising");
    }
  };

  return (
    <>
      <Nav />
      <br />
      <br />
      <div className="box1">
        <img src="https://t4.ftcdn.net/jpg/05/65/75/59/360_F_565755935_GLp4UQXwqgB4wYBGorgOVWm6NqU1taTE.jpg" id="bg-video" loop muted autoplay></img>
        <div className="container">
          <div className='he12'>
            <h4>Sell Your Products</h4>
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" className="input" placeholder="Productname" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <br></br>
            <div className="input-field">
              <input type="text" className="input" placeholder="Price" required value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <br></br>
            <div className="input-field">
              <input type="text" className="input" placeholder="image url" required value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <br></br>
            <div className="input-field">
              <input type="text" className="input" placeholder="type" required value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <br></br>
            <div className="input-field">
              <input type="submit" className="submit" value="Sell" />
            </div>
          </form>
          <div className="two-col">
            <div className="one">
              
            </div>
            <div className="two">
              < Link to="/layout">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
