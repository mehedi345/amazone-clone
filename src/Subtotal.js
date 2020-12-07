import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText={(value) => (
                  <>
                  <p>
                      Subtotal (o items): <strong>0</strong>
                  </p>
                  <small className="subtotal_gift">
                    <input type="checkbox" /> the order contains a gift
                  </small>
                  </>)}
                  decimalScale = {2}
                  value={0}
                  displayType={"text"}
                  thousandsSeparator={true}
                  prefix={"$"}
                  />
                  <button>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;