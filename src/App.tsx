
import React, { Component } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

class App extends Component {
    render() {
        return (
            <GlobalProvider>
                <div id="app">
                    <Header/>
                    <div className="container">
                        <Balance/>
                        <IncomeExpenses/>
                        <TransactionList/>
                        <AddTransaction/>
                    </div>
                </div>
            </GlobalProvider>
        )
    }
}

export default App;