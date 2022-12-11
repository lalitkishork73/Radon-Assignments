import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let data = {
    email: email,
    password: password
  }

  const url = 'localhost:3001/login'

  const setData = async () => {
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }

  const login = (e) => {
    e.preventDefault();
    // setData();
    console.log(data);
  }




  return (
    <>
      <div className='h-screen w-screen bg-[url(https://img.freepik.com/free-vector/gradient-abstract-background-design_23-2149066048.jpg?w=1380&t=st=1670789245~exp=1670789845~hmac=bc8f950b9599458127c92d1292fc5b9b1500428c917255b2552939426d950d11)] bg-cover'>
        <div className="bg-black h-12"></div>
        <div className='flex justify-center items-center h-[50%]'>
          <div>
            <form className='flex flex-col gap-5 p-5 rounded-lg bg-black/70'>
              <input type="text" placeholder='Username' className='p-1 rounded-md bg-transparent border-b-2 text-green-500' value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <input type="Password" placeholder='Password' className='p-1 rounded-md bg-transparent border-b-2 text-green-500' value={password} onChange={(e) => { setPassword(e.target.value) }} />
              <div className='flex justify-center p-3'>
                <button onClick={login} className='p-1 pl-5 pr-5 bg-red-500 rounded-md text-white'>Login</button>
              </div>
              <p className='text-white'>If you don't have account?<Link to='/signup'>&nbsp;<span className='text-cyan-400'>Signup</span></Link></p>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login