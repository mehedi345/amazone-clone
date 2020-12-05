import React from 'react';
import './Product.css';

const Product = ({ title, image, price, rating }) => {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <div className="product_price">
                    <p>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) =>
                            (
                                <p>*</p>
                            )

                        )}

                </div>
            </div>
            <img src={image} alt="product-image" />
            <button>Add to basket</button>

        </div>
    );
};

export default Product;