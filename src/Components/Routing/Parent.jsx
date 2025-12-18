import React from 'react';
import Navbar from '../Home/Navbar' 
import { Outlet } from 'react-router';
import Footer from '../Home/Header&Footer/Footer';
const Parent = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Parent;