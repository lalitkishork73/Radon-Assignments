import React from 'react'
import { useState } from 'react'
import UploadD from '../components/uploadD'
import bgimg from '../assets/bgTree.jpg'
import Editlist from '../components/editlist'
import { Router, Routes } from 'react-router-dom'

const Uploaddoc = () => {
    const [upload, setUpload] = useState(false);



    return (
        <>
            <div className='h-screen w-screen'>
                <div className="bg-black w-screen h-12"></div>
                <div className="p-4 h-[90%]">
                    <div className='grid overflow-hidden grid-cols-5 grid-rows-4 gap-3 h-[100%]'>
                        <Editlist />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Uploaddoc