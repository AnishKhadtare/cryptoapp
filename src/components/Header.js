import React from 'react'
import {NavLink} from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const Header = () => {
  const {currency,setCurrency} = CryptoState(); 
  console.log(currency);
  return (
    <div className='bg-slate-900 flex justify-between items-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)]'>
        <div>
            <NavLink to={"/"} className='text-yellow-500 text-xl font-bold p-4 mx-16'>Crypto Tracker</NavLink>
        </div> 
        <div>
          <NavLink to={"/trendingNews"} className="text-white">News</NavLink>
        </div>
        <div>
            <select onChange={(e) => setCurrency(e.target.value)} className='mx-16 my-4 bg-transparent text-white  rounded-lg '>
                <option value="INR" className='text-black'>INR</option>
                <option value="USD" className='text-black'>USD</option>
            </select>
        </div>
        
    </div>
  )
}
export default Header