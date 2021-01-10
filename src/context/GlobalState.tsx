import React, { createContext, useReducer } from 'react';
import reducer from './reducer';



//Initial State
export interface transactions { id: number, text: string, amount: number }
export const initialState = {
    transactions: [] as transactions[]
}



//Create Context
export const GlobalContext = createContext<any>(initialState);



//Provider Component
interface GlobalProviderProp {
    children: JSX.Element | JSX.Element[];
}
export const GlobalProvider = ({ children }: GlobalProviderProp) => {  
    const [ state, dispatch ] = useReducer(reducer, initialState);
  
    //Actions
    function deleteTransaction(id: number): void {
        dispatch({
            type    : "DELETE_TRANSACTION",
            payload : id
        })
    }
    function addTransaction(transaction: { id: number, text: string, amount: number }): void {
        dispatch({
            type    : "ADD_TRANSACTION",
            payload : transaction
        })
    }
  
    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        } as {
            transactions: transactions[],
            deleteTransaction: () => void,
            addTransaction: () => void
        }}>
           {
              children
           }
        </GlobalContext.Provider>
    )
}