import React from 'react'
import TransactionList from '../Components/TransactionList'
import TransactionForm from '../Components/TransactionForm'
import { Card} from '@material-ui/core'

const Home = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"  }} >Home Page</h1>
            
            <Card  style={{  marginLeft:"8%", backgroundColor:"white" , borderRadius:"0%" , boxShadow:"0 15px 20px blue"  , position:"fixed"  }}  >
            <TransactionForm/>
            </Card>
            <div  style={{  marginLeft:"50%" , backgroundColor:"white", borderStyle:"hidden", maxWidth:"30%" , boxShadow:"0 10px 20px blue", position:"relative" }}     >
            <TransactionList/>
            </div>
            
            
           
            
        </div>
    )
}

export default Home
