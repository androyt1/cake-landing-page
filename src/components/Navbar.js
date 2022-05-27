import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav className='w-full h-[50px] lg:h-[70px] flex justify-between items-center px-3 lg:px-20 md:max-w-[1500px] mx-auto bg-[#4B3143]'>
        <div className="logo">
            <span className='text-xl font-semibold text-slate-200'>Logo</span>
        </div>
        <ul className='hidden lg:block'>
            <li className='inline-block px-5'><NavLink to='/' className={({isActive})=>(isActive ? 'text-white':'text-slate-400')}>Home</NavLink></li>
            <li className='inline-block px-5'><NavLink to='/about' className={({isActive})=>(isActive ? 'text-white':'text-slate-400')}>ABOUT</NavLink></li>
            <li className='inline-block px-5'><NavLink to='/menu' className={({isActive})=>(isActive ? 'text-white':'text-slate-400')}>MENU</NavLink></li>
            <li className='inline-block px-5'><NavLink to='/offers' className={({isActive})=>(isActive ? 'text-white':'text-slate-400')}>OFFERS</NavLink></li>
            <li className='inline-block px-5'><NavLink to='/contact' className={({isActive})=>(isActive ? 'text-white':'text-slate-400')}>CONTACT US</NavLink></li>
            <AiOutlineSearch className='text-4xl inline-block ml-7 text-slate-300'/>
            <AiOutlineShoppingCart className='text-4xl inline-block ml-7 text-slate-300 '/>
        </ul>      
    </nav>
  )
}

export default Navbar