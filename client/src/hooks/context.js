import { useContext, createContext, useReducer } from "react";
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
