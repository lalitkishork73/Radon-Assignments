import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/auth'
import axios from '../api/axios'
import { Link, NavLink } from 'react-router-dom'
import Views from './views'

const EditDoc = () => {
    const { auth } = useAuth()
    const id = auth?.email;
    const token = auth?.accessToken;
    const URL = `/files/${id}`
    const [dataList, setData] = useState([]);
    const [view, setView] = useState();
    const [active, setActive] = useState(false);
    const getData = async () => {
        try {
            const res = await axios.get(URL, { headers: { Authorization: `Bearer ${token}` } })
            setData(res.data.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const dataDelete = async (data) => {
        try {
            const DEL_URL = `/files/${data}`

            await axios.delete(DEL_URL, { headers: { Authorization: `Bearer ${token}` } });
            const res = await axios.get(URL, { headers: { Authorization: `Bearer ${token}` } })
            setData(res.data.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const showMenuCreate = () => {
        setActive(!active);
    }



    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className='relative text-white w-[100%] p-5'>
                <table className='w-full text-center table-auto'>
                    <thead className=''>
                        <tr className='bg-cyan-500 rounded-t-md' >
                            <th>Document Name</th>
                            <th>View/Download</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.length > 0 ?

                            dataList.map((items, i) => (<>
                                <tr key={i} className='bg-sky-50 text-sky-700'>
                                    <td className=''>{items.filename}</td>
                                    <td onClick={() => {
                                        setView(items.file)
                                        showMenuCreate()
                                    }}>
                                        View
                                    </td>
                                    <td><button onClick={async (e) => {
                                        e.preventDefault();
                                        await dataDelete(items._id);

                                    }} className='hover:bg-red-500 rounded-xl p-2 bg-cyan-500 text-white'>Delete</button></td>
                                </tr>
                            </>))
                            : <>
                                <p>You havn't any data!</p>
                            </>}


                    </tbody>
                </table>
            </div>
            <div className=" w-[100%] h-[100%] top-0 p-4">
                <Views Id={view} showMenuCreate={showMenuCreate} active={active} />
            </div>
        </>
    )
}

export default EditDoc