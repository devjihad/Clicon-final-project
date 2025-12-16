import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import TwoCard from './TwoCard';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Landing/>
            <TwoCard/>
        </div>
    );
};

export default Home;