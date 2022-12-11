import React from 'react'
import img from '../assets/im.jpg';
import { NavLink } from 'react-router-dom';


function Home() {
    return (
        <>

            <div className='h-[100%] w-[100%] flex justify-center items-center'>
                <div className='relative bg-black'>
                    <img src={img} className='h-screen w-screen' />
                </div>
                <div className='absolute top-0 bg-black/50 w-[100%] h-[100%] flex justify-center items-center'>
                    <div className='flex flex-col '>
                        <h1 className='text-white text-center text-5xl mb-1'>Publish Your Documents online & Review Them Online.</h1>
                        <p className='text-center text-white mt-2 mb-5'>We help scholars publish their documents online to deliver beutiful reading experiences.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-3 mt-5'>
                            <NavLink to='/documents'><h1 className='text-center text-white p-5 bg-transparent border-white border-2 hover:bg-cyan-500 hover:border-cyan-500 hover:border-2'>View All Documents</h1></NavLink>
                            <NavLink to='/editdocument'><h1 className='text-center text-white p-5 bg-transparent border-white border-2 hover:bg-cyan-500 hover:border-cyan-500 hover:border-2'>Publish Your Documents</h1></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home