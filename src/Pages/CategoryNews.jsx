import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    // console.log(id, data)

    const [categoryNews, setCategoryNews]=useState([])

    useEffect(() => {
        if(id=='0'){
            setCategoryNews(data)
            return
        }
        else if(id=='1'){
            const filterNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filterNews)
        }else{
            
      const filterNews = data.filter(news => news.category_id == id)
      setCategoryNews(filterNews)


        }
     
 
    }, [data, id]);
    
    return (
        <div>
            <h1 className='font-bold text-2xl mb-5'> Dragon News Home </h1>

            <div className='grid grid-cols-1 space-y-5 text-lg'>
                {
                 categoryNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;