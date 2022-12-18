import React, { useState, useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar-edit';
// import { FcCheckmark } from 'react-icons/fc'
import axios from 'axios';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([-]?)\d{3}([-]?)\d{4})$/;

const d1 = `h-screen w-screen bg-[url(https://img.freepik.com/free-vector/gradient-abstract-background-design_23-2149066048.jpg?w=1380&t=st=1670789245~exp=1670789845~hmac=bc8f950b9599458127c92d1292fc5b9b1500428c917255b2552939426d950d11)] bg-cover`;
const navStrip = `bg-black h-12`;
const input = `p-1 rounded-md bg-transparent border-b-2 text-white`;


const Signup = () => {
  //definde userRef and errRef
  const useRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [file, setFile] = useState();


  const [preview, setPreview] = useState(null);


  useEffect(() => {
    useRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd)
  }, [password, matchPwd])


  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone])

  useEffect(() => {
    setValidPhone(EMAIL_REGEX.test(phone));
  }, [email])

  useEffect(() => {
    setErrMsg('');
  }, [user, password, matchPwd, email, phone])



  const url = 'http://localhost:3001/signup'

  const setData = async (formData) => {
    try {

      let res = axios.post(url, formData);

      console.log(res?.data);

      setSuccess(true);

      setUser('');
      setPassword('');
      setPhone('');
      setEmail('');
      setFile();
    }
    catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus();
    }
  }

  const signup = (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

    const formData = new FormData();

    formData.append('name', user);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('photo', file);
    setData(formData);
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
      <div className={d1}>
        <div className={navStrip}></div>
        <div className='flex justify-center items-center h-[70%]'>
          {success ? <section className=''>
            <h1>SuccessFully Created Account</h1>
            <p><Link to='login'> please Login now</Link></p>
          </section> :
            < section className='rounded-lg bg-black/70 flex flex-col'>
              <div className='flex flex-col sm:flex-row'>
                <form action="" className='flex flex-col gap-5 p-5'>
                  <input type="text" placeholder='Username' className={input} value={user} onChange={(e) => { setUser(e.target.value) }} />
                  <input type="email" placeholder='Email' className={input} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  <input type="phone" placeholder='Phone' className={input} value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                  <input type="Password" placeholder='Password' className={input} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  <input type="file" name="file" className='text-white block w-full text-sm rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-cyan-400' onChange={imgprev} ></input>
                </form>
                <div className='p-5 '>
                  <img src={preview} width="250" height="250" alt='Set Profile Image' className='text-center text-white rounded-full bg-cover' />
                </div>
              </div>
              <div className='flex justify-center p-3'>
                <button className='p-1 pl-5 pr-5 bg-red-500 rounded-md text-white hover:bg-green-400' onClick={signup}>SignUp</button>

              </div>
              <p className='text-white text-center p-5'>If you have already an account?<Link to='/login'>&nbsp;<span className='text-cyan-400'>Login</span></Link></p>
            </section>
          }
        </div>
      </div>
    </>
  )
}

export default Signup