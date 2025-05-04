import React from 'react';
import Navbar from '../Navbar';
import Login from '../../Pages/Login';
import { Outlet } from "react-router";


const AuthLayout = () => {
    return (
        <div className='w-10/11 bg-gray-300 mx-auto'>
            <header className='bg-gray-300'>
             <Navbar ></Navbar>
            </header>
            <Outlet></Outlet>
        
        </div>
    );
};

export default AuthLayout;