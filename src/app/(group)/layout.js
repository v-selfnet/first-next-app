import React from 'react';
import Navbar from '../components/Navbar';

const LayoutGroup = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default LayoutGroup;