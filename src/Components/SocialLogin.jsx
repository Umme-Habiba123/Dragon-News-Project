import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-2xl'>Login with</h1>
            <div className='grid grid-cols-1 space-y-3 '>
                <button className='btn mt-4 border-blue-1 text-sm hover:bg-red-400 hover:text-white border-blue-800 border-1 hover:border-none text-blue-500 p-6' ><FaGoogle size={23} />Login with Google </button>
                <button className='btn  text-sm hover:bg-gray-300 border-black hover:border-none p-6'><FaGithub size={24} />
                Login with Github </button>
            </div>
        </div>
    );
};

export default SocialLogin;