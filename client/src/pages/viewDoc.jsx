import React from 'react'
import docim from '../assets/doc.png'

const ViewDoc = () => {
    return (
        <>
            <div className='w-[100%] h-screen'>
                <div className="bg-black w-screen h-12"></div>
                <div className='p-4 h-[90%]'>
                    <div class="grid overflow-hidden grid-lines grid-cols-5 grid-rows-4 gap-3 h-[100%] ">
                        <div class="box row-start-1 row-end-5 col-start-1 col-end-1 border-black rounded-lg p-3 overflow-y-scroll bg-cyan-400">
                            <div className='h-auto w-auto bg-cyan-100  border-b-2 border-cyan-300 hover:shadow-md rounded-lg mb-3'>
                                <div className='flex'>
                                    <img src={docim} />
                                    <h1 className='pt-5 p-2'>Title of rama rav sev </h1>
                                </div>
                            </div>
                            <div className='h-auto w-auto bg-cyan-100  border-b-2 border-cyan-300 hover:shadow-md rounded-lg mb-3'>
                                <div className='flex'>
                                    <img src={docim} />
                                    <h1 className='pt-5 p-2'>Title of rama rav sev </h1>
                                </div>
                            </div>
                            <div className='h-auto w-auto bg-cyan-100  border-b-2 border-cyan-300 hover:shadow-md rounded-lg mb-3'>
                                <div className='flex'>
                                    <img src={docim} />
                                    <h1 className='pt-5 p-2'>Title of rama rav sev </h1>
                                </div>
                            </div>
                          
                            
                        </div>
                        <div class="box row-start-1 row-end-5 col-start-2 col-end-6 rounded-lg border-black">
                            <iframe src="https://drive.google.com/uc?export=view&id=1XoLahvYI99_dKPYZgbI3j305heHgpRfo" className='w-[100%] h-[100%] rounded-lg'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDoc