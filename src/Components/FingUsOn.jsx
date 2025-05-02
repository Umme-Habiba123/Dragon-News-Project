import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const FingUsOn = () => {
    return (
        <div className='w-full grid grid-cols-1  space-y-5 mt-15  '>
            <h1 className='text-2xl'>Find Us On</h1>
            <button className='btn bg-gray-100 text-sm justify-start  py-6'><FaFacebook  size={23}/>Facebook</button>
            <button className='btn bg-gray-100 text-sm justify-start py-6'><FaTwitter  size={23}/>Twitter</button>
            <button className='btn bg-gray-100 text-sm justify-start py-6'><FaInstagram  size={23}/>Instagram</button>
            
        </div>
    );
};

export default FingUsOn;