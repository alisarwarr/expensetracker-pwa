import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

interface TransactionProp {
    transaction: { id: number, text: string, amount: number };
}

function Transaction({ transaction }: TransactionProp) {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        <div>
            <li
              className={transaction.amount < 0 ? "minus" : "plus"}
              key={transaction.id}
            >
                <button
                   id="btnY"
                   onClick={() => deleteTransaction(transaction.id)}
                > x </button>
                {transaction.text} <span> {sign}${Math.abs(transaction.amount)} </span>
            </li>
        </div>
    )
}

export default Transaction;