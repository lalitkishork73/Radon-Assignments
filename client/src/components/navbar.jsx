import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import useAuth from '../hooks/auth'
import { FaBars } from 'react-icons/fa'
import MenuBar from './menuBar'
const Navbar = () => {

    const { auth, setAuth } = useAuth();
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    };
    return (
        <>
            <nav className=" absolute z-10 text-white flex gap-2 justify-between w-[100%] p-2">

                <div className='ml-5'>
                    <Link to='/'><h1 className='font-signature font-bold text-xl'><span className='text-cyan-400'>Docum</span>&nbsp; Publisher</h1></Link>
                </div>
                <div>
                    <FaBars
                        className="md:hidden text-2xl releaive"
                        onClick={showMenu}
                    />
                </div>
                <div>

                    <ul className='hidden md:flex gap-3 mr-5 text-center'>
                        <NavLink to='/'><li className='hover:text-cyan-300 cursor-pointer p-1 font-bold'>Home</li></NavLink>
                        <NavLink to='/editdocument'><li className='hover:text-cyan-300 cursor-pointer p-1 font-bold'>Upload Documents</li></NavLink>
                        {!auth.email ? <>
                            <NavLink to='/login'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold'>Login</li></NavLink>
                            <NavLink to='/signup'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold'>Signup</li></NavLink> </> : <><NavLink to='/'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold' onClick={() => {
                                setAuth('');
                            }}>LogOut</li></NavLink></>}
                    </ul>
                    <div className="">
                        <MenuBar showMenu={showMenu} active={active} />
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar