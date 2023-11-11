import React, { useEffect, useState } from 'react';
import { TrendingCoins } from '../config/api';
import {NavLink} from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
const TrendingCoinSlider = () => {
  const { currency } = CryptoState(); 
  const { symbol } = CryptoState(); 
  const [trending,setTrending] = useState([]);  
  const [loading,setLoading] = useState(false);  

  const fetchTrendingCoins = async () => {
    setLoading(true);
    const response  = await fetch(TrendingCoins(currency));
    const data = await response.json();
    setTrending(data);
    setLoading(false);
  }  

  useEffect(() => {
    fetchTrendingCoins()
  },[currency]);

  return (
    <div className='flex justify-around pt-10 w-[100%]'>
        {
            trending.map((coin) => {
              const coinPrice = coin.market_cap_change_percentage_24h;
               return (
                <NavLink to={`coins/${coin.id}`}>
                  <img src={coin.image} className='w-20'></img>
                  <div className='flex justify-between items-center'>
                    <p className='text-white'>{coin.symbol.toUpperCase()}</p>
                    <p style={{color : coinPrice > 0 ? "rgb(14,203,129)" : "red", }} className='text-red-500'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                  </div>
                  <div className='flex justify-around items-center'>
                    <p className='text-white'>{symbol}</p>  
                    <p className='text-white'>{coin.current_price}</p>
                  </div>  
                </NavLink>
               )
            }) 
        }
    </div>
  )
}

export default TrendingCoinSlider