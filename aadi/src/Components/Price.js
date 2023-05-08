import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./PriceStyles.css";

function Price() {
  const Navigate = useNavigate();

  const handleBuy = (packagePrice) => {
    console.log(`Selected package price: ${packagePrice}`);
    Navigate('/price1');
  }

  const handleBuy2 = (packagePrice) => {
    console.log(`Selected package price: ${packagePrice}`);
    Navigate('/price2');
  }

  const handleBuy3 = (packagePrice) => {
    console.log(`Selected package price: ${packagePrice}`);
    Navigate('/price3');
  }

  const handleBuy4 = (packagePrice) => {
    console.log(`Selected package price: ${packagePrice}`);
    Navigate('/price4');
  }


  return (
    <div>
      <h2 style={{ fontSize: "36px" }}>Popular place</h2>
      <div className="package">
        <img src="https://tse2.mm.bing.net/th?id=OIP.VPajMSGE6gfQY0fqQcV12AHaHa&pid=Api&P=0" alt="Destination Image 1" />
        <p className="price">$1000</p>
        <button className="buyButton" onClick={() => handleBuy(1000)}>Book Now</button>
      </div>
      <div className="package">
        <img src="https://tse3.mm.bing.net/th?id=OIP.93v0YEC9A7Q8-8PxPwrstAHaEK&pid=Api&P=0" alt="Destination Image 2" />
        <p className="price">$1500</p>
        <button className="buyButton" onClick={() => handleBuy2(1500)}>Book Now</button>
      </div>
      <div className="package">
        <img src="https://tse4.mm.bing.net/th?id=OIP.EybiWqiOiFo0-ElRBOIcZwHaE6&pid=Api&P=0" alt="Destination Image 2" />
        <p className="price">$1800</p>
        <button className="buyButton" onClick={() => handleBuy3(1800)}>Book Now</button>
      </div>
      <div className="package">
        <img src="https://tse1.mm.bing.net/th?id=OIP.Vo4JR9_mFarDoQGVjEiVZwHaEK&pid=Api&P=0" alt="Destination Image 2" />
        <p className="price">$2000</p>
        <button className="buyButton" onClick={() => handleBuy4(2000)}>Book Now</button>
      </div>
    </div>
  )
}

export default Price;
