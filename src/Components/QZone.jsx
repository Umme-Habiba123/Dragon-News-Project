import React from 'react';
import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import playGround from '../assets/playground.png';

const QZone = () => {
    return (
        <div className='mt-10 bg-base-200'>
            <h1 className='text-2xl '>Q-Zone</h1>

            <img className='mt-5' src={swimming} alt="" />

            <img src={classImg} alt="" />

            <img src={playGround} alt="" />
           
            
        </div>
    );
};

export default QZone;