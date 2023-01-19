import React from 'react';
import TaskmanagerImg from '../assets/projects/taskmanager.png';
import PenguinImg from '../assets/projects/penguin_game.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6 text-xl'>Check out some of my recent projects:</p>
                </div>

                {/* container */}
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4'>

                    {/* grit item 1 */}

                    <div style={{ backgroundImage: `url(${TaskmanagerImg})` }}
                        className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div '>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN Stack Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://projektmanager.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="http://hub.com/CBert2022/FE_TaskProject_Client">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grit item 2 */}

                    <div style={{ backgroundImage: `url(${PenguinImg})` }}
                        className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div '>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript Jump'n'Run Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://cbert2022.github.io/Penguin-Game/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/CBert2022/Penguin-Game">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work