import React from 'react';
import SideBar from './SideBar';

export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Next Hero Comming Soon',
}

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex items-center'>
           <SideBar></SideBar>
            {children}
        </div>
    );
};

export default DashboardLayout;