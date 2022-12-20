//Store 

import { createContext,useContext,useState } from "react";

const initialState = { auth: true }

const authContext = createContext(initialState);

export function AuthProvider({children}) {
    return <authContext.Provider value={initialState}>{children}</authContext.Provider>
}

export default function AuthConsumer(){
    return useContext(authContext);
}