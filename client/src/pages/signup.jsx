import React, { useState, useReducer, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FcCheckmark } from 'react-icons/fc'
import { AiFillInfoCircle } from 'react-icons/ai'
import axios from '../api/axios';
const REGISTER_URL = `/signup`;
const USER_REGEX = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{3,23}$/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([-]?)\d{3}([-]?)\d{4})$/;
const FILE_REGEX = /\.(jpg|jpeg|png|gif)$/;
const input = `p-1 rounded-md bg-transparent border-b-2 text-white`;
const inputT = `text-red-500 text-sm p-1 bg-black rounded-xl `
const inputF = `absolute left-[-9999px]`
const d1 = `h-screen w-screen bg-[url(https://img.freepik.com/free-vector/gradient-abstract-background-design_23-2149066048.jpg?w=1380&t=st=1670789245~exp=1670789845~hmac=bc8f950b9599458127c92d1292fc5b9b1500428c917255b2552939426d950d11)] bg-cover`;
const navStrip = `bg-black h-12`;

const Signup = () => {
  //definde userRef and errRef
  const userRef = useRef(0);

  const phoneRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();


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
  const [isvalidFile, setIsvalidFile] = useState(false);

  const [post, setPost] = useState(false);


  const [preview, setPreview] = useState(null);


  useEffect(() => {
    userRef.current.focus();
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
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setErrMsg('');
  }, [user, password, matchPwd, email, phone, file])

  const setData = async (formData) => {
    try {
      setPost(true);

      let res = await axios.post(REGISTER_URL, formData);

      if (res?.data === undefined) {
        console.log('server error');
      }

      if (res?.data?.status === true) {
        setSuccess(true);
        setPost(false);
        setUser('');
        setPassword('');
        setPhone('');
        setEmail('');
        setFile();

      }



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
    console.log(v1, v2, v1 || v2)
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry!');
      return;
    }

    const formData = new FormData();

    formData.append('name', user);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('photo', file);
    setData(formData);


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
          {success ? <section className='rounded-lg bg-black/70 flex flex-col p-5 text-white'>
            <h1 className='text-2xl'>SuccessFully Created Account</h1>
            <p className='text-green-500'><Link to='/login'> please Login now</Link></p>
          </section> :
            < section className='rounded-lg bg-black/70 flex flex-col'>
              <div className='flex flex-col sm:flex-row'>
                <form action="" className='flex flex-col gap-3 p-5'>
                  <input type="text" placeholder='Username' className={input} value={user}
                    ref={userRef}
                    autoComplete="off"
                    required
                    focused="true"
                    id='username'
                    onFocus={() => { setUserFocus(true) }}
                    onBlur={() => { setUserFocus(false) }}
                    onChange={(e) => { setUser(e.target.value) }} />
                  <FcCheckmark className={validName ? "relative" : "absolute invisible"} />

                  <p id="uidnote" className={userFocus && user && !validName ? inputT : inputF}>
                    <AiFillInfoCircle /><span>name should be valid! </span>
                  </p>

                  <input type="email" placeholder='Email' className={input} value={email} onChange={(e) => { setEmail(e.target.value) }}
                    ref={emailRef}
                    autoComplete="off"
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => { setEmailFocus(true) }}
                    onBlur={() => { setEmailFocus(false) }}
                  />
                  <p id="emailnote" className={emailFocus && email && !validEmail ? inputT : inputF}>
                    Email must be valid example1@email.com
                  </p>
                  <input type="phone" placeholder='Phone' className={input} value={phone} onChange={(e) => { setPhone(e.target.value) }}
                    ref={phoneRef}
                    autoComplete="off"
                    required
                    aria-invalid={validPhone ? "false" : "true"}
                    aria-describedby="phonenote"
                    onFocus={() => { setPhoneFocus(true) }}
                    onBlur={() => { setPhoneFocus(false) }}
                  />

                  <p id="phonenote" className={phone && phoneFocus && !validPhone ? inputT : inputF}>
                    Phone Number Must be valid
                  </p>

                  <input type="Password" placeholder='Password' className={input} value={password} onChange={(e) => { setPassword(e.target.value) }}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />

                  <p id="pwdnote" className={passwordFocus && !validPassword ? inputT : inputF}>

                    8 to 24 characters.<br />
                    Must include uppercase and lowercase <br />letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                  </p>

                  <input
                    type="password"
                    className={input}
                    placeholder="Confirm password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p id="confirmnote" className={matchFocus && !validMatch ? inputT : inputF}>
                    Must match the first password input field.
                  </p>

                  <input type="file" name="file" className='text-white block w-full text-sm rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-cyan-400' onChange={imgprev} />
                </form>
                <div className='p-5 text-white'>
                  <div className='relative flex justify-center items-center h-[100%]'>
                    <h1 className={preview ? "invisible" : ""}>Set Profile Image'</h1>
                    <img src={preview} width="250" height="250" className='absolute text-center text-white rounded-full bg-cover' />
                  </div>
                </div>
              </div>
              <div className='flex justify-center p-3'>
                <button className='p-1 pl-5 pr-5 bg-red-500 rounded-md text-white hover:bg-green-400' onClick={signup}
                >SignUp</button>
              </div>

              {
                !post ? <><p className='text-red-400 text-center'>{errMsg}</p></> : <div className="flex flex-col justify-center items-center">
                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-cyan-400 border-b-white rounded-full" role="status">
                  </div></div>
              }

              <p className='text-white text-center p-5'>If you have already an account?<Link to='/login'>&nbsp;<span className='text-cyan-400'>Login</span></Link></p>
            </section>
          }
        </div>
      </div>
    </>
  )


}

export default Signup