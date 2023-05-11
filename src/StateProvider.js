import { Children, createContext, useContext,useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./reducer";


export const StateContext = createContext();

const StateProvider = () =>{

    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {Children}
    </StateContext.Provider>
};

export const useStateValue = () => useContext(StateContext)
export default StateProvider