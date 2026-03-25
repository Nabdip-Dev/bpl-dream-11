import React from 'react';
import navlogo from '../../assets/logo.png'
import dollarImg from '../../assets/dollar_1.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="flex-1">
                <img src={navlogo} alt="" />
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <ul className='flex gap-4'>
                        <li className='text-[#131313]'>Home</li>
                        <li className='text-[#131313]'>Fixture</li>
                        <li className='text-[#131313]'>Teams</li>
                        <li className='text-[#131313]'>Schedules</li>
                    </ul>
                </div>
                <button className='btn font-bold'>
                    0 Coin
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;