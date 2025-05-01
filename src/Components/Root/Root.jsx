import React from 'react';
import Header from '../Header'
import { Outlet } from 'react-router';
import Latest from '../Latest.jsx'
import Navbar from '../Navbar.jsx';
import LeftAside from '../Homelayout/LeftAside.jsx'
import RightAside from '../Homelayout/RightAside.jsx'



const Root = () => {
    return (
        <div className='w-10/12 mx-auto'>
        <Header></Header>
          <section>
            <Latest></Latest>
            <Navbar></Navbar>
          </section>
            <main className='grid grid-cols-12 my-3   font-bold mt-20'>

                <aside className='col-span-3 '>
                  <LeftAside></LeftAside>
                </aside>

                <section className='main col-span-6'>
                   <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                  <RightAside></RightAside>
                </aside>

            </main>
            
        </div>
    );
};

export default Root;