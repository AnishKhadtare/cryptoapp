import React from 'react'
import TrendingCoinSlider from '../components/TrendingCoinSlider';
import CryptoTable from '../components/CryptoTable';

const Homepage = () => {
  return (
    <div>
        <div className='bg-[url("https://media.istockphoto.com/id/1390304698/photo/network-connection-structure-big-data-visualization-digital-background-3d-rendering.jpg?s=170667a&w=0&k=20&c=qONVM9F3MTr2v_GmHIGm7gRtPordCZb9uQ8Wxt3pSQM=")] h-96  bg-cover p-2 bg-no-repeat flex flex-col'>
            <p className='text-center pt-14 text-4xl tracking-wider text-white font-extrabold'>Crypto Miner</p>
            <p className='text-center pt-5 text-xs  tracking-widest text-slate-400  font-lightbold'>Get All Info Regarding Your Favorite Crypto Currency</p>
            <TrendingCoinSlider></TrendingCoinSlider>
        </div>
        <CryptoTable></CryptoTable>
    </div>
  )
}

export default Homepage;