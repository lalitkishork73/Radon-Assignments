import React, { useState, useEffect } from 'react'
import docim from '../assets/doc.png'
import axios from '../api/axios'


const ViewDoc = () => {

    let [dataList, setDataList] = useState([]);
    const [file, setFile] = useState('');
    const url = '/files'

    const getDocList = async () => {
        try {

            let res = await axios.get(url);
            setDataList(res.data.data)
            console.log(dataList)


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
                        <div className="box row-start-1 row-end-5 col-start-1 col-end-1 border-black rounded-lg p-3 overflow-y-scroll bg-cyan-400">
                            {dataList.map((items, i) => (<>
                                <div key={items.i} onClick={() => { setFile(items.file) }} className='h-auto w-auto bg-cyan-100  border-b-2 border-cyan-300 hover:shadow-md rounded-lg mb-3 cursor-pointer'>
                                    <div className='flex'>
                                        <img src={docim} />
                                        <h1 className='pt-5 p-2'>{items.filename} </h1>
                                    </div>
                                </div>
                            </>))}
                        </div>
                        <div className="box row-start-1 row-end-5 col-start-2 col-end-6 rounded-lg border-black">
                            {
                                file!=="undefined" ?
                                    <iframe src={file} className='w-[100%] h-[100%] rounded-lg'></iframe> : <h1 className='w-[100%] h-[100%] rounded-lg'>...IsLoading </h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDoc