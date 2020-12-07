import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout">
           <div className="checkout_left">
               <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_LP_Hero_HolidayDeals_en_US.png" alt="banner"/>
           
           <div>
               <h2 className="checkout_title">
                    Your shopping basket
               </h2>
           </div>
           </div>
           <div className="checkout_right">
              <Subtotal />
           </div>
        </div>
    );
};

export default Checkout;