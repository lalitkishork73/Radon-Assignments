import React from 'react'
import { NavLink } from 'react-router-dom'

const Editlist = () => {
    return (
        <>
            <nav className="box row-start-1 row-end-5 col-start-1 col-end-1 border-black rounded-lg p-3  bg-[url('https://drive.google.com/uc?export=view&id=1JOSar49BbYEIs4wDuWIsz1FP7L8OcTcV')] bg-cover text-white pt-10">
                <ul className='flex flex-col gap-5 bg-black/40 backdrop-blur-sm rounded-md p-5'>
                    <NavLink to='uploadfile'> <li className='text-center hover:bg-white/10 p-2 rounded-md'>Upload Document</li></NavLink>
                    <NavLink to='viewdoc'> <li className='text-center hover:bg-white/10 p-2 rounded-md'>View All document</li></NavLink>
                    <NavLink to='editdoc'>  <li className='text-center hover:bg-white/10 p-2 rounded-md'>Your Documents</li></NavLink>
                </ul>
            </nav>

        </>
    )
}

export default Editlist