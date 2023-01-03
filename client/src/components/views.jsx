import React from 'react'
import { useParams } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa'

const Views = ({ Id, showMenuCreate, active }) => {
  

    return (
        <>
            <div className={active
                ? 'absolute w-[100%] inset-0 h-[100%] bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center'
                : "hidden"} >
                <FaWindowClose onClick={showMenuCreate} className='bg-red-500 scale-150 mt-2'/>
                <iframe src={Id} className='w-[100%] h-[100%] rounded-lg p-4'></iframe>
            </div>
        </>
    )
}

export default Views