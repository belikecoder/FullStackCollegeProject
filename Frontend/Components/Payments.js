import React from 'react';
import './Payments.css';

const Payment = () => {

  const paymentIcons = [
    'https://www.nicepng.com/png/detail/769-7692873_download-google-pay-logo-png.png',
    'https://cdn.icon-icons.com/icons2/790/PNG/512/paytm_icon-icons.com_65483.png',
    'https://i.pinimg.com/originals/ae/5f/e3/ae5fe3dc423e44c0ddbef5dc64fa356b.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWrd7Uzr38TR9o7UGUq9_bud9k2kBEh4Klw&usqp=CAU',
 'https://www.shutterstock.com/shutterstock/photos/467847284/display_1500/stock-vector-pay-cash-icon-vector-style-is-flat-iconic-symbol-with-rounded-angles-red-color-white-background-467847284.jpg'
  ];

  return (
    <div className="payment-icons-container">
      <h1>Accepted Payment Methods</h1>
      <div className="payment-icons">
        {paymentIcons.map((icon, index) => (
          <img key={index} src={icon} alt={`Payment Icon ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Payment;
