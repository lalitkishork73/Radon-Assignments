import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import useAuth from '../hooks/auth';


const UploadD = () => {
    const { auth } = useAuth();
    const [file, setFile] = useState();
    const formdata = new FormData();
    const [respo, setRespo] = useState(false);
    const [post, setPost] = useState(false);
    const id = auth?.email;
    const token = auth?.accessToken;
    const [errMsg, setErrMsg] = useState('');

    const URL = `/uploadfile/${id}`

    formdata.append('file', file);

    const imgu = (e) => {
        setFile(e.target.files[0])
    }

    const uploadData = async () => {
        try {
            const res = await axios.post(URL, formdata, { headers: { Authorization: `Bearer ${token}` } })
            if(res?.status===500){
                setErrMsg('Invalid Entry!');
            }
            if (res?.status === 201) {
                setPost(false);
                setRespo(true);
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    const uploadfile = (e) => {
        e.preventDefault();
        setPost(true);
        uploadData();
        setFile();
        setRespo(false);
    }
    return (
        <>
            <div className='flex justify-center items-center h-[100%] text-white rounded-md'>
                <div className='bg-white text-cyan-400 p-5 rounded-md flex flex-col'>
                    <h1 className='mt-5 mb-5 font-bold text-4xl'>Upload Your Documents</h1>
                    <div className="flex items-center justify-center w-full">
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" name="file" onChange={imgu} className="block w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-cyan-50 file:text-cyan-500    
                                                        hover:file:bg-cyan-100
                                                        "/>
                        </label>
                    </div>
                    <button onClick={uploadfile} className='text-white bg-cyan-400 p-2 rounded-md mt-5 hover:bg-cyan-500'>Upload</button>
                    {
                        post ? <> <div className="flex flex-col justify-center items-center">
                            <div className="spinner-border animate-spin inline-block w-8 h-8 mt-2 border-4 border-cyan-400 border-b-white rounded-full" role="status">
                            </div></div> </> : <><p className='text-red-400 text-center'>{errMsg}</p></>
                    }
                    <p className={respo ? "text-green-500 text-center" : "invisible"} > SuccessFully added!</p>
                </div>
            </div>
        </>
    )
}

export default UploadD