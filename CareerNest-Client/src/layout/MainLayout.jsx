import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '@/components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;