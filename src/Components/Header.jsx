import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 '>
            <img className='w-[450px]' src={logo} alt="Dragon news logo" />
          <p className='text-accent mt-4 text-lg'>Journalism Without Fear or Favour</p>
          <p className='text-accent mt-1 text-sm font-bold'>{format (new Date(), 'EEEE, MMMM d, yyyy')}</p>
          
        </div>

    );
};

export default Header;