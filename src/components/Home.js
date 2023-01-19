import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-1xl sm:text-4xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Caro Rieche.</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] pb-6'>I'm a junior web developer from Berlin.</h2>
                {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>In addition I contribute my expertise as professional project manager.
                    Wich makes me an expert in problem solving and a very good team player.
                    I'm building exceptional full-stack web applications. </p> */}
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Home