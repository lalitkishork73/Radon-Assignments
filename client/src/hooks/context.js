import { useContext, createContext, useReducer, useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import reducer from "./reducer";

const intialState = {
    isLoading: true,
    data: []
}

const AppContext = createContext();

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, intialState);

    return <AppContext.Provider>{children}</AppContext.Provider>
}

export default function useGlobelContext() {
    return useContext(AppContext);
}


let data={
    Name:"tony stark",
    age:"25",
    address:{
        city:"city",
        state:"CA",
        pincode:"12345"
    },
    biling:{
        city:"los angeles",
        state:"CA",
        pincode:"12345"
    },
}

const [name,setName]=useState('');
const [city,setCity]=useState('');