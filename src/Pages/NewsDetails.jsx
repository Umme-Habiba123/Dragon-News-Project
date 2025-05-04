import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Homelayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState([])

    console.log(data,id)

    useEffect(()=>{

        const newsDetails=data.find((singleNews)=>singleNews.id==id)
         setNews(newsDetails)  
    },[data,id])

    return (
        <div className=''>
            <header>
                <Header></Header>
            </header>
            <h1 className='font-bold text-lg pb-5 w-10/12 mx-auto'>Dragon News</h1>

            <main className='grid grid-cols-12 w-10/12 mx-auto gap-10 '>
            
                <section className='col-span-9 border-1 border-gray-200 p-10'>
                    
                    <NewsDetailsCard news={news}></NewsDetailsCard>

                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>

        </div>
    );
};

export default NewsDetails;