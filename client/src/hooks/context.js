import { useContext, createContext, useReducer, useState,useEffect } from "react";
// import { AiOutlineGooglePlus } from "react-icons/ai";
import reducer from "./reducer";
import axios from "../api/axios";
import useAuth from "./auth";

const intialState = {
    isLoading: true,
    data: []
}

const AppContext = createContext();

export function AppProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, intialState);


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


    }, [DocDel, dataList, setData])

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

    return <AppContext.Provider>{children}</AppContext.Provider>
}

export default function useGlobelContext() {
    return useContext(AppContext);
}

