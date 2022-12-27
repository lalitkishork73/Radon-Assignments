import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/auth'
import axios from '../api/axios'

const EditDoc = () => {
    const { auth } = useAuth()
    const id = auth?.email;
    const token = auth?.accessToken;
    const URL = `/files/${id}`
    const [dataList, setData] = useState([]);

    console.log(URL)
    const getData = async () => {
        try {
            const res = await axios.get(URL, { headers: { Authorization: `Bearer ${token}` } })
            console.log(res.data.data)
            setData(res.data.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const [DocDel, setDocDel] = useState();


    const DEL_URL = `/files/${DocDel}`
    useEffect(() => {
        console.log(DocDel)
        console.log(dataList)


    }, [DocDel,dataList,setData])

    const dataDelete = async () => {
        try {

            const res = await axios.delete(DEL_URL, { headers: { Authorization: `Bearer ${token}` } })
            console.log(res.data.data)
            
        }
        catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getData();
    }, []);
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
                        {dataList.map((items) => (<>
                            <tr key={items._id.toString()} className='bg-sky-50 text-sky-700'>
                                <td className=''>{items.filename}</td>
                                <td><a href={items.file}>View</a></td>
                                <td><a href={items.file} download="true" className='text-green-500'>Download</a></td>
                                <td><button onClick={async (e) => {
                                    
                                    setDocDel(await items._id)
                                    await dataDelete();

                                }} className='hover:bg-red-500 rounded-xl p-2 bg-cyan-500 text-white'>Delete</button></td>
                            </tr>
                        </>))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EditDoc