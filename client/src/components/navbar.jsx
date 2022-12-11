import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <navbar className=" absolute z-10 text-white flex gap-2 justify-between w-[100%] p-2">
                <div className='ml-5'>
                    <Link to='/'><h1 className='font-signature font-bold text-xl'><span className='text-cyan-400'>Docum</span>&nbsp; Punlisher</h1></Link>
                </div>
                <ul className='flex gap-5    mr-5'>
                    <NavLink to='/'><li className='hover:text-cyan-300 cursor-pointer p-1 font-bold'>Home</li></NavLink>
                    <NavLink to='/editdocument'><li className='hover:text-cyan-300 cursor-pointer p-1 font-bold'>Upload Documents</li></NavLink>
                    <NavLink to='/login'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold'>Login</li></NavLink>
                    <NavLink to='/signup'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold'>signup</li></NavLink>
                </ul>
            </navbar>
        </>
    )
}

export default Navbar