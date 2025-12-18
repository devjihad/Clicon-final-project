import React from 'react';

import Landing from './Landing';
import TwoCard from './TwoCard';
import FourCard from './FourCard';
import Subcribe from './Subcribe';
// import Footer from './Header&Footer/Footer';
import ShopCategory from './Category/ShopCategory';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>
            
            <Landing/>
            <ShopCategory/>
            <Product/>
            <TwoCard/>
            <FourCard/>
            <Subcribe/>
            
        </div>
    );
};

export default Home;