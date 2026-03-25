import React from 'react';
import backgroundImage from '../../../assets/bg-shadow.png'
import bannerLogo from '../../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className='min-h-[60vh] bg-black container mx-auto mt-2 rounded-2xl flex flex-col items-center justify-center py-10 space-y-4' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img src={bannerLogo} alt="" />
            <h1 className='text-white font-bold text-[40px]'>
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className='text-[#FFFFFF]/70 text-2xl'>
                Beyond Boundaries Beyond Limits
            </p>
            <button className="btn relative bg-[#E7FE29] border-none text-black font-bold">
                Claim Free Credit
                <span className="absolute -inset-1 rounded-lg border-1 border-[#E7FE29]"></span>
            </button>
        </div>
    );
};

export default Banner;