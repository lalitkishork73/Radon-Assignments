import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/auth'

const MenuBar = ({ active, showMenu }) => {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <nav className="relative h-full w-full ">
        <ul
          className={
            active
              ? "block  py-6 fixed inset-0  uppercase bg-black/20 backdrop-blur-lg md:hidden text-center"
              : "hidden"
          }
        > <FaWindowClose onClick={showMenu} className="mx-4 scale-120 z-20 mt-5" />
          <NavLink to='/'><li className='hover:text-cyan-300 cursor-pointer p-1 font-bold'>Home</li></NavLink>
          <NavLink to='/editdocument'><li className='hover:text-cyan-300 cursor-pointer p-1 font-bold'>Upload Documents</li></NavLink>
          {!auth.email ? <>
            <NavLink to='/login'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold'>Login</li></NavLink>
            <NavLink to='/signup'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold'>Signup</li></NavLink> </> : <><NavLink to='/'><li className='hover:text-cyan-300 cursor-pointer border-2 p-1 pl-4 pr-4 hover:border-cyan-300 font-bold' onClick={() => {
              setAuth('');
            }}>LogOut</li></NavLink></>}

        </ul>
      </nav>
    </>
  )
}

export default MenuBar