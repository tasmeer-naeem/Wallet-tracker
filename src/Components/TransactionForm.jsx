import React from 'react'
import {v4 as uuid} from 'uuid' 
import {connect} from 'react-redux'
import addtransaction from '../Redux/Transactions/TransactionsAction';
import  {Updatetransaction} from '../Redux/Transactions/TransactionsAction';
import { withRouter } from 'react-router';
import { Input, InputAdornment, InputBase, InputLabel, Select , Button} from '@material-ui/core';


class TransactionForm extends React.Component {

    state={
        description : this.props.defaultvalues ? this.props.defaultvalues.description : "",
        amount : this.props.defaultvalues ? this.props.defaultvalues.amount : "" ,
        transactiontype : this.props.defaultvalues ? this.props.defaultvalues.transactiontype :"Expense"
    }

    // HandleDescriptionInput=(e)=>{
    //     var value = e.target.value
    //     this.setState({
    //         description:value
    //     });
    // };
    // HandleAmountInput=(e)=>{
    //     var value = e.target.value
    //     this.setState({
    //         amount:value
    //     });
    // };
    // HandleTransactiontypeInput=(e)=>{
    //     var value = e.target.value
    //     this.setState({
    //         transactiontype:value
    //     });
    // };

    HandleFormInput=(e)=>{
      var {name,value}=e.target
      this.setState({
          [name]:value
      })
      //console.log(name,value)
    };
    HandleFormSubmit=(e)=>{
        e.preventDefault();   
    if(this.props.defaultvalues){
        var {match :{params : {transactionId}},Updatetransaction,history:{goBack}}=this.props
        Updatetransaction(transactionId,this.state)
        goBack()
    }
    else{
        //add
        var transactionObj={
            ...this.state,
            amount : parseInt(this.state.amount),
            id : uuid()
        }
        //console.log(transactionObj)
        this.props.addtransaction(transactionObj)
    }     
    }
    render=()=>{
        //console.log(this.props.defaultvalues)
        return (
            <div>
            <form onSubmit={this.HandleFormSubmit}   >
                <Input style={{ width:"30rem"}} name="description" type="description" placeholder="description" onChange={this.HandleFormInput} value={this.state.description} autoComplete="off"  /><br/>
                <Input style={{width:"30rem"}} name="amount" type="amount" placeholder="amount" onChange={this.HandleFormInput} value={this.state.amount} autoComplete="off"/><br/>
                <select style={{width:"50%" , height:"2rem"}} name="transactiontype" onChange={this.HandleFormInput} value={this.state.transactiontype} >
                <option>Expense</option>
                <option>Income</option>
                </select><br/>
                {this.props.defaultvalues ? <button style={{width:"50%" , height:"30px" , backgroundColor:"lightblue"}}   >Update</button> : <button style={{width:"50%" , height:"30px" , backgroundColor:"lightblue"}}  >Add</button>}   
            </form>
            </div>
        )
    }
    }
  
var actions={
    addtransaction,
    Updatetransaction
}

export default connect(null,actions)(withRouter(TransactionForm))
