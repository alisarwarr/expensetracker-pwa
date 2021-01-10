import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3 className="underlined"> History </h3>
            <ul id="transactionList">
                {
                    transactions.map((x: { id: number, text: string, amount: number }) =>
                        <Transaction
                            key={x.id}
                            transaction={x}
                        />
                    )
                }
            </ul> 
        </>
    )
}

export default TransactionList
