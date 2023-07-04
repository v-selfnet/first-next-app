import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LayoutGroup = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-10'>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayoutGroup;