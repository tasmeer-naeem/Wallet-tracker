import React from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../Components/TransactionForm'
import { Card } from '@material-ui/core'
import TransactionList from '../Components/TransactionList'

// const Info = ({match : {params :{transactionId}}}) => {
//     return (
//         <div>
//             <h1>Info Page</h1>
//             <h2>{transactionId}</h2>
//         </div>
//     )
// }     return  <h2>{transactionId}</h2>

const Info = ({transaction}) => {
    //console.log(transaction)
    return (
        <div>
            <h1 style={{textAlign:"center"}} >Info Page</h1>
            <Card  style={{ marginLeft:"8%",position:"fixed" ,backgroundColor:"white" , borderRadius:"0%" , boxShadow:"0 15px 20px blue" }}  >
            <TransactionForm defaultvalues={transaction} />
            </Card>
            
            
        </div>
    )
}

var mapState=(state,{match : {params : {transactionId}}})=>({
    transaction: state.transactions.find(transaction=>transaction.id===transactionId)
})

export default connect(mapState)(Info)
