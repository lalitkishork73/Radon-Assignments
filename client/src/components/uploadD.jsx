import React, { useState, useEffect } from 'react';
import axios from '../api/axios';



const UploadD = () => {
    const [file, setFile] = useState();
    const formdata = new FormData();
    const [respo, setRespo] = useState(false);
    const URL = "/uploadfile"

    formdata.append('file', file);

    const imgu = (e) => {
        setFile(e.target.files[0])
    }

    const uploadData = async () => {
        try {

            const res = await axios.post(URL, formdata)
            if (res?.status === 201) {
                setRespo(true);
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    const uploadfile = (e) => {
        e.preventDefault();
        uploadData();
        setFile();
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
                    <p className={respo ? "text-green-500 text-center" : "invisible"} > SuccessFully added!</p>
                </div>
            </div>
        </>
    )
}

export default UploadD