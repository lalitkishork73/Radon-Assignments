import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState();

  let data = {
    name: user,
    email: email,
    phone: phone,
    password: password,
  }

  const url = 'localhost:3001/signup'

  const setData = async () => {
    try {
      let res = axios.post(url, data);
      console.log(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const signup = (e) => {
    e.preventDefault();
    // setData();
    // navigate('/login');
    console.log(data);
  }

  return (
    <>
      <div className='h-screen w-screen bg-[url(https://img.freepik.com/free-vector/gradient-abstract-background-design_23-2149066048.jpg?w=1380&t=st=1670789245~exp=1670789845~hmac=bc8f950b9599458127c92d1292fc5b9b1500428c917255b2552939426d950d11)] bg-cover'>
        <div className="bg-black h-12"></div>
        <div className='flex justify-center items-center h-[50%]'>
          <div>
            <form action="" className='flex flex-col gap-5 p-5 rounded-lg bg-black/70'>
              <input type="text" placeholder='Username' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={user} onChange={(e)=>{setUser(e.target.value)}} />
              <input type="email" placeholder='Email' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <input type="phone" placeholder='Phone' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
              <input type="Password" placeholder='Password' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <input type="file" id="myFile" name="filename" className='text-white block w-full text-sm rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-cyan-400' value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
              <div className='flex justify-center p-3'>
                <button className='p-1 pl-5 pr-5 bg-red-500 rounded-md text-white' onClick={signup}>SignUp</button>
              </div>
              <p className='text-white'>If you have already an account?<Link to='/login'>&nbsp;<span className='text-cyan-400'>Login</span></Link></p>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup