import React from 'react'
import useAuth from '../hooks/auth'
import axios from '../api/axios'

const EditDoc = () => {
    const { auth } = useAuth()
    const id=auth?.email;
    console.log(id)
    const URL = `/files/${id}`

    console.log(URL)
    const getData = async () => {
        try {
            const res = await axios.get(URL,)
            console.log(res.data)
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='text-white w-[100%] p-5'>
                <table className='w-full text-center table-auto'>
                    <thead className=''>
                        <tr className='bg-cyan-500 rounded-t-md' >
                            <th>Document Name</th>
                            <th>View</th>
                            <th>Download</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-sky-50 text-sky-700'>
                            <td>lua</td>
                            <td>lua</td>
                            <td download="true">lua</td>
                            <td><button className='hover:bg-red-500 rounded-xl p-2 bg-cyan-500 text-white'>Delete</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EditDoc