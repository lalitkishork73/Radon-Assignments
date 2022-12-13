import React from 'react'

const UploadD = () => {
    return (
        <>
            <div className="box row-start-1 row-end-5 col-start-2 col-end-6 rounded-lg border-black bg-slate-700/90 backdrop-blur-md h-[100%] w-[100%]">
                <div className='flex justify-center items-center h-[100%] text-white rounded-md'>
                    <div className='bg-white text-cyan-400 p-5 rounded-md flex flex-col'>
                        <h1 className='mt-5 mb-5 font-bold text-4xl'>Upload Your Documents</h1>
                        <div className="flex items-center justify-center w-full">
                            <label class="block">
                                <span class="sr-only">Choose profile photo</span>
                                <input type="file" class="block w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-violet-50 file:text-cyan-500    
                                                        hover:file:bg-violet-100
                                                        "/>
                            </label>
                        </div>
                        <button className='text-white bg-cyan-400 p-2 rounded-md mt-5 hover:bg-cyan-500'>Upload</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadD