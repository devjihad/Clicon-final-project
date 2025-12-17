import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import TwoCard from './TwoCard';
import FourCard from './FourCard';
import Subcribe from './Subcribe';
import Footer from './Header&Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Landing/>
            <TwoCard/>
            <FourCard/>
            <Subcribe/>
            <Footer/>
        </div>
    );
};

export default Home;