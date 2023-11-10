import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const CryptoNews = () => {
  const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '399217561fmsh01439b55a34d952p1e313ejsn1e0063ae6ed6',
		'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
	}
  };
  const [newsData,setNewsData] = useState([]);

  const fetchNewsData = async() => {
    try{
        const response = await fetch(url, options);
        const data = await response.json();
        setNewsData(data.data);
    }
    catch (error) {
        console.error(error);
    }
  }    

  useEffect(() => {
    fetchNewsData()
  },[]);

  return (
    <div className='bg-slate-600 grid grid-cols-4 gap-10 p-16'>
        {
            newsData.map((news) => {
                return(
                    <div className='bg-slate-700 rounded-lg'>
                        <NavLink>
                            <img src={news.thumbnail} className='rounded-lg'></img>
                            <p className='text-xs px-5 pt-4 text-center text-slate-500 '><span>Posted At : </span>{news.createdAt}</p>
                            <p className='font-bold py-3 px-2 text-center text-white'>{news.title}</p>
                        </NavLink>  
                    </div>
                );
            })
        }
    </div>
  )
}

export default CryptoNews