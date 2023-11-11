import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from '../config/api';
import CoinChart from '../components/CoinChart' 

const Coinpage = () => {

  const { id } = useParams();
  const { currency, symbol } = CryptoState();
  const [ singleCoin,setSingleCoin ] = useState([]);
  const fetchSingleCoinData = async () => {
    const response = await fetch(SingleCoin(id));
    const data = await response.json();
    setSingleCoin(data);  
  };

  useEffect(() => {
    fetchSingleCoinData()
  },[currency]);

  return (
    <div className='bg-slate-900 flex flex-row'>
      <div className='w-[27%] p-6 flex flex-col justify-center'>
          <img className='w-36 h-36 mx-24' src={singleCoin?.image?.large}></img>
          <p className='font-extrabold text-3xl tracking-wider p-4 text-white text-center  '>{singleCoin?.name}</p>
          <p className='text-slate-400 p-4'>{singleCoin?.description?.en.split(". ")[0]}.</p>
          <p className='p-4'> <span className='text-white font-extrabold'>Rank : </span> <span className='text-white'> {singleCoin.coingecko_rank}</span></p>
          {
            currency === "INR" && <p className='p-4'><span className='text-white font-extrabold' >Current Price: </span><span className='text-white'>{symbol} </span> <span className='text-white'>{singleCoin?.market_data?.current_price?.inr}</span></p>
          }
          {
            currency === "USD" && <p className='p-4'><span className='text-white font-extrabold'>Current Price:  </span><span className='text-white'>{symbol} </span> <span className='text-white'>{singleCoin?.market_data?.current_price?.usd}</span></p>
          } 
          {
            currency === "INR" && <p className='p-4'><span className='text-white font-extrabold' >Market Cap : </span><span className='text-white'>{symbol} </span> <span className='text-white'>{singleCoin?.market_data?.market_cap?.inr}</span></p>
          }
          {
            currency === "USD" && <p className='p-4'><span className='text-white font-extrabold'>Market Cap :  </span><span className='text-white'>{symbol} </span> <span className='text-white'>{singleCoin?.market_data?.market_cap?.usd}</span></p>
          }        
      </div>
      <div className='w-1 bg-slate-500 my-5 rounded-md'></div>
      <div>
        <CoinChart singleCoin={singleCoin}></CoinChart>
      </div>
    </div>
  )
}

export default Coinpage;