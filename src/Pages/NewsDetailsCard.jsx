import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  
    const { title,image_url,details,category_id } = news;

    return (

        <div className=''>
            <img className='w-full rounded-xl' src={image_url} alt="" />

            <p className='text-2xl font-bold mt-3'>{title}</p>

            <p className='pt-5 text-lg text-gray-400'>{details}</p>

            <Link to={`/CategoryNews/${category_id}`}>
            <button className='btn btn-secondary mt-10 '> <FaArrowLeft size={18} />All news in this category </button></Link>
        </div>
    );
};

export default NewsDetailsCard;
