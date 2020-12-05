import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="img" />
                <div className="home_row">
                    <Product title="Amazon Basics" price="29.99" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" rating={5}/>
                    <Product title="Holiday Deals" price="19.99" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_Dash_HolidayDeals_1x._SY304_CB414581989_.jpg" rating={5}/>
                </div>
                <div className="home_row">
                    <Product title="Start your holiday list early" price="34.99" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg" rating={5}/>
                    <Product title="Electronics" price="245.88" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" rating={5}/>
                    <Product title="Computer Accesories" price="567.99" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" rating={5}/>
                </div>
                <div className="home_row">
                    <Product title="Explore home bedding" price="129.99" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg" rating={5}/>
                </div>
            </div>
        </div>
    );
};

export default Home;