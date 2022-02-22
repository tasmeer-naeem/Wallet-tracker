import React from 'react'
import {connect} from 'react-redux'
import TransactionCard from './TransactionCard';

const TransactionList = ({transactions }) => {
    console.log(transactions);
    return (
        <div  >
            <h1>List</h1>
            {transactions.map((transaction)=>
            <TransactionCard key={transaction.id}
             transaction={transaction}/> )}
        </div>
    )
}
var mapState=(state)=>({
    transactions:state.transactions
});


export default connect(mapState)(TransactionList)
