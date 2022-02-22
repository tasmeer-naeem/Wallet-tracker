import { ADD_TRANSACTION , DELETE_TRANSACTION, UPDATE_TRANSACTION} from "./TransactionsConstant";

export var addtransaction=(transactionObj)=>({
    type : ADD_TRANSACTION,
    payload : {
        transaction : transactionObj
    }
});

export var deletetransaction=(transactionId)=>({
    type : DELETE_TRANSACTION,
    payload : {
        transactionId
    }
});

export var Updatetransaction=(transactionId,updateddata)=>({
    type : UPDATE_TRANSACTION,
    payload : {
        transactionId,
        updateddata
    }
});

export default addtransaction;
