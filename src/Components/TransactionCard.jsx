import React from 'react'
import { connect } from 'react-redux'
import { deletetransaction } from '../Redux/Transactions/TransactionsAction'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@material-ui/icons'

const TransactionCard = ({deletetransaction ,transaction : {description , amount , transactiontype ,id}}) => {
    return (
        <div>
            <h3>{description}-{amount}-{transactiontype}___<Delete onClick={()=>deletetransaction(id)}>Delete</Delete>  <Link to={`/transaction/${id}`}><Edit >Edit</Edit></Link>   </h3>
        </div>
    )
}

var actions=({
    deletetransaction
})

export default connect(null,actions)(TransactionCard)
