import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-6 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                        </p>
                    </div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>TEST Hi, nice to meet you. Please take a look around.</p>
                        </div>
                        <div>
                            <p className='text-xl'>
                            I'm a full-stack developer, graduated from an intense full-time web development bootcamp. <br />
                            In addition I contribute my 5+ years expertise as professional digital project manager. <br />
                            Wich makes me an expert in communication & problem solving and a very good team player.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;