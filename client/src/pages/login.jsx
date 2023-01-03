import React, { useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from '../api/axios'
import { useState } from 'react'
import useAuth from '../hooks/auth'
const LOGIN_URL = '/login'

const inputT = `text-red-500 text-sm p-1 bg-black rounded-xl `
const inputF = `absolute left-[-9999px]`
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errmsg, setErrmsg] = useState('');


  useEffect(() => {
    userRef.current.focus()
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
    setErrmsg('')

  }, [email, password])
  let data = {
    email: email,
    password: password
  }

  const setData = async () => {
    try {
      const response = await axios.post(LOGIN_URL, data);
      const accessToken = response?.data?.token;

      setAuth({ email, accessToken })
      navigate(from, { replace: true });

      //  setAuth({ email, password, roles, accessToken });
      // const roles = response?.data?.roles;
      // setUser('');
      // setPwd('');


    }
    catch (err) {
      if (!err?.response) {
        setErrmsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrmsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrmsg('Unauthorized');
      } else {
        setErrmsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  const login = (e) => {
    e.preventDefault();
    setData();
  }




  return (
    <>
      <div className='h-screen w-screen bg-[url(https://img.freepik.com/free-vector/gradient-abstract-background-design_23-2149066048.jpg?w=1380&t=st=1670789245~exp=1670789845~hmac=bc8f950b9599458127c92d1292fc5b9b1500428c917255b2552939426d950d11)] bg-cover'>
        <div className="bg-black h-12"></div>


        <section className='flex justify-center items-center h-[50%]'>
          <div>
            <p ref={errRef} className={errmsg ? '' : ''}
              aria-live="assertive">{errmsg}</p>
            <form className='flex flex-col gap-5 p-5 rounded-lg bg-black/70'>
              <input type="text" placeholder='Username' className='p-1 rounded-md bg-transparent border-b-2 text-green-500' value={email} onChange={(e) => { setEmail(e.target.value) }}
                ref={userRef}
                required
                autoComplete='off'
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="userNote"
                onFocus={() => { setEmailFocus(true) }}
                onBlur={() => { setEmailFocus(false) }}

              />
              <p className={!validEmail && emailFocus && email ? inputT : inputF}>please Enter valid userName</p>
              <input type="Password" placeholder='Password' className='p-1 rounded-md bg-transparent border-b-2 text-green-500' value={password} onChange={(e) => { setPassword(e.target.value) }}
                aria-describedby="passNote"
                aria-invalid={validPassword ? "false" : "true"}
                onFocus={() => { setPasswordFocus(true) }}
                onBlur={() => { setPasswordFocus(false) }}
              />
              <p id="passNote" className={!validPassword && passwordFocus && password ? inputT : inputF}>please Enter valid password</p>
              <div className='flex justify-center p-3'>
                <button onClick={login} className='p-1 pl-5 pr-5 bg-red-500 rounded-md text-white'>Login</button>
              </div>
              <p className='text-white'>If you don't have account?<Link to='/signup'>&nbsp;<span className='text-cyan-400'>Signup</span></Link></p>
            </form>
          </div>
        </section>


      </div>
    </>
  )
}

export default Login