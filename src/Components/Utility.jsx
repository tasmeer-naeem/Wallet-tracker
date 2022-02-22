//import React from 'react'

const calculateamount=(transactions)=>{
    var sum=0;
    for(var transaction of transactions){
        var {transactiontype , amount}=transaction
        if(transactiontype === "Income") 
        {
            sum+=amount
        }
        else
             sum-=amount
    }
    return sum;
}

export default calculateamount;

// export var updatetransactiondata=(transactions,transactionId,updateddata)=>{
    // return transactions.map(trans=>{
    //     if(trans.id === transactionId){
    //         return{
    //             ...trans,
    //             ...payload.updateddata
    //         }
    //     }
    //     else{
    //         return{
    //         ...trans
    //         }
    //     }
    //   })
// }
