import React from 'react';
import navlogo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <img src={navlogo} alt="" />
            </div>
            <div className="flex gap-2">
               
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        
                    </div>
                    <ul tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;