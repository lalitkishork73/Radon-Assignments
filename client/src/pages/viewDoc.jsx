import React, { useState, useEffect } from 'react'
import axios from '../api/axios'


const ViewDoc = () => {

    const [dataList, setDataList] = useState([]);
    const [active, setActive] = useState(false);
    const [file, setFile] = useState('datalist ');
    const url = '/files'

    const getDocList = async () => {
        try {

            let res = await axios.get(url);
            setDataList(res.data.data)


        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getDocList();
    }, [])

    return (
        <>
            <div className='w-[100%] h-screen'>
                <div className="bg-black w-screen h-12"></div>
                <div className='p-4 h-[90%]'>
                    <div className="grid overflow-hidden grid-lines grid-cols-5 grid-rows-4 gap-3 h-[100%] ">
                        <div className="box row-start-1 row-end-5 col-start-1 col-end-1 border-black rounded-lg p-3 overflow-y-scroll bg-slate-500">
                            {dataList.map((items, i) => (<>
                                <div key={i} onClick={() => { setFile(items.file); setActive(true) }} className='h-auto w-auto bg-cyan-100  border-b-2 border-cyan-300 hover:shadow-md rounded-lg mb-3 cursor-pointer'>
                                    <div
                                    >
                                        <h1 className='pt-5 p-2'>{items.filename} </h1>

                                    </div>
                                </div>
                            </>))}
                        </div>
                        <div className="relative box row-start-1 row-end-5 col-start-2 col-end-6 rounded-lg border-black  bg-slate-500">
                            {
                                active ?
                                    <iframe src={file} className='w-[100%] h-[100%] rounded-lg'></iframe> :
                                    <><div className='flex justify-center items-center h-[100%] bg-slate-500 text-4xl text-white rounded-lg'><h1>Select any File for watch</h1></div></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDoc