import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext';
import { CoinList } from '../config/api';
import { hover } from '@testing-library/user-event/dist/hover';
import { NavLink } from 'react-router-dom';

const CryptoTable = () => {
  const tableHead = ['Coins', 'Price', '24h Change', 'Market Cap'];
  const [coinTableData,setCoinTableData] = useState([]);
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const {currency} = CryptoState();
  const {symbol} = CryptoState();

  const fetchCoinData = async () => {
    const response = await fetch(CoinList(currency));
    const data = await response.json();
    setCoinTableData(data);
  }

  useEffect(() => {
    fetchCoinData();
  },[currency]);

  const handleSearch = () => {
    return coinTableData.filter((coin) => {
        coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search);
    })
  }

  useEffect(() => {
    handleSearch();
  },[search]);

  return (
    <div className='bg-slate-800 p-10'>
        <p className='text-white text-center font-semibold text-xl  tracking-wider'>Cryptocurrency Prices by Market Cap</p>
        <input type = "search" placeholder = "Search For a Crypto Currency.." className = "p-3 my-10 w-[75%] mr-[12%] ml-[13%] rounded-lg" onChange = {(e) => setSearch(e.target.value)}/>
        <table className='p-3 w-[75%] mr-[12%] ml-[13%] '>
            <tr className='bg-yellow-400 rounded-lg flex justify-around'>
                <th className='p-3 text-left'>{tableHead[0]}</th>
                <th className='p-3' >{tableHead[1]}</th>
                <th className='p-3'>{tableHead[2]}</th>
                <th className='p-3'>{tableHead[3]}</th>
            </tr>
            <tr>
            {
                coinTableData.slice( (page - 1) * 10, (page - 1) * 10 + 10).filter((coin) => {
                    return coin.name.toLowerCase().includes(search);
                }).map((row) => {
                    const profit = row.market_cap_change_percentage_24h;
                    return(
                        <tr>
                            <td>
                                <NavLink to={`/coins/${row.name.toLowerCase()}`}>
                                    <div className='flex items-center '>
                                        <img src={row.image} alt={row.name} className='w-[15%] m-5'></img>
                                        <div className='flex flex-col'>
                                            <p className='text-white text-lg'>{row.symbol.toUpperCase()}</p>
                                            <p className='text-slate-500 text-sm'>{row.name}</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <div className='bg-slate-500 h-1 w-[430%]'></div>

                            </td>

                            <td>
                                <div className='flex justify-start px-5'>
                                    <p className='px-3'>{symbol}</p>
                                    <p>{row.current_price}</p>
                                </div>
                            </td>

                            <td>
                                <div className='flex justify-start px-12'>
                                    <p style={{color : profit > 0 ? "rgb(14,203,129)" : "red" }}>{row.market_cap_change_percentage_24h.toFixed(2)}%   </p>

                                </div>
                            </td>

                            <td>
                                <div className='flex justify-start pl-6'>
                                    <p className='px-3'>{symbol}</p>
                                    <p>{row.market_cap}</p>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
            </tr>
        </table>
        <div className='flex justify-between font-semibold text-md w-[40%] py-5  mx-96 my-5 text-slate-500 '>
            <div class="pageAnimation" onClick={() => setPage(1)}>1</div>
            <div class="pageAnimation" onClick={() => setPage(2)}>2</div>
            <div class="pageAnimation" onClick={() => setPage(3)}>3</div>
            <div class="pageAnimation" onClick={() => setPage(4)}>4</div>  
            <div class="pageAnimation" onClick={() => setPage(5)}>5</div>
            <div class="pageAnimation" onClick={() => setPage(6)}>6</div>
            <div class="pageAnimation" onClick={() => setPage(7)}>7</div>
            <div class="pageAnimation" onClick={() => setPage(8)}>8</div>
            <div class="pageAnimation" onClick={() => setPage(9)}>9</div>
            <div class="pageAnimation" onClick={() => setPage(10)}>10</div>
        </div>
    </div>
  )
}

export default CryptoTable;