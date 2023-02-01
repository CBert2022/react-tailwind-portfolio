import React from 'react';
import { data } from "../data/data";

const Work = ({language}) => {

    // projects file
    const project = data;
    //setProject(data);

    return (


        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        {language ? "Referenzen" : "Work"}
                    </p>
                    <p className='py-6 text-xl'>{language ? "Schau Dir einige meiner letzten Projekte an:" : "Check out some of my recent projects:"}</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container
              flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank">
                                        <button className='text-white group border-2 px-6 py-3 my-2 mx-2 hover:bg-pink-600 hover:border-pink-600'>
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank">
                                        <button className='text-white group border-2 px-6 py-3 my-2 mx-2 hover:bg-pink-600 hover:border-pink-600' >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Work