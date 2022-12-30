import React from 'react'
import Editlist from '../components/editlist'
import { Outlet } from 'react-router-dom'


const Uploaddoc = () => {
    


    return (
        <>
            <div className='h-screen w-screen'>
                <div className="bg-black w-screen h-12"></div>
                <div className="p-4 h-[90%]">
                    <div className='grid overflow-hidden grid-cols-5 grid-rows-4 gap-3 h-[100%]'>
                        <Editlist />
                        <div className="box row-start-1 row-end-5 col-start-2 col-end-6 rounded-lg border-black bg-slate-700/90 backdrop-blur-md h-[100%] w-[100%]">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Uploaddoc