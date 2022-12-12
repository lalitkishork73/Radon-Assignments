import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar-edit';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);


  const url = 'http://localhost:3001/signup'

  const setData = async (formData) => {
    try {

      let res = axios.post(url, formData);
      console.log(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const signup = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name', user);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('photo', file);
    setData(formData);
    navigate('/login');
    console.log(formData);
  }

  const imgprev = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files.length !== 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  }



  return (
    <>
      <div className='h-screen w-screen bg-[url(https://img.freepik.com/free-vector/gradient-abstract-background-design_23-2149066048.jpg?w=1380&t=st=1670789245~exp=1670789845~hmac=bc8f950b9599458127c92d1292fc5b9b1500428c917255b2552939426d950d11)] bg-cover'>
        <div className="bg-black h-12"></div>
        <div className='flex justify-center items-center h-[70%]'>
          <div className='rounded-lg bg-black/70 flex flex-col'>
            <div className='flex flex-col sm:flex-row'>
              <form action="" className='flex flex-col gap-5 p-5'>
                <input type="text" placeholder='Username' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={user} onChange={(e) => { setUser(e.target.value) }} />
                <input type="email" placeholder='Email' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="phone" placeholder='Phone' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                <input type="Password" placeholder='Password' className='p-1 rounded-md bg-transparent border-b-2 text-white' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input type="file" name="file" className='text-white block w-full text-sm rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-cyan-400' onChange={imgprev} ></input>
              </form>
              <div className='p-5'>
                <img src={preview} width="250" height="250" alt='Set Profile Image' className='text-center text-white rounded-full bg-cover border-2 border-cyan-300' />
              </div>
            </div>
            <div className='flex justify-center p-3'>
              <button className='p-1 pl-5 pr-5 bg-red-500 rounded-md text-white hover:bg-green-400' onClick={signup}>SignUp</button>

            </div>
            <p className='text-white text-center p-5'>If you have already an account?<Link to='/login'>&nbsp;<span className='text-cyan-400'>Login</span></Link></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signup