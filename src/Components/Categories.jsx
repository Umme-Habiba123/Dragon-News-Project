import React, { use } from 'react';
import { NavLink } from 'react-router';

const categiryPromise = fetch('categories.json')
    .then(res => res.json())
console.log(categiryPromise)

const Categories = () => {

    const categories = use(categiryPromise)


    return (
        <div>
            <h2>All Caterories {categories.length}</h2>

            <div className='grid grid-cols-1 mt-5 space-y-5 text-accent'>
                {
                    categories.map((category)=><NavLink className='btn bg-base-100 border-none hover:bg-base-200 shadow-none' key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;