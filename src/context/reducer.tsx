import { initialState } from './GlobalState';

function reducer(state = initialState, action: any) {

    switch(action.type) {
        case "DELETE_TRANSACTION" :
            return {
                ...state,
                transactions : state.transactions.filter((x: { id: number, text: string, amount: number }) => x.id !== action.payload)
            }

        case "ADD_TRANSACTION" :
            return {
                ...state,
                transactions : [
                    action.payload,
                    ...state.transactions
                ] 
            }

        default:
            return state;
    }
}

export default reducer;