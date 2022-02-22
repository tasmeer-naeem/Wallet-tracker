import { ADD_TRANSACTION, DELETE_TRANSACTION ,UPDATE_TRANSACTION} from "./TransactionsConstant";

var initialstate = [];

var TransactionsReducer = (state = initialstate, actions) => {
  var { type, payload } = actions;
  switch (type) {
    case ADD_TRANSACTION:
      return [...state, payload.transaction];
    case DELETE_TRANSACTION:
      return state.filter((trans)=>trans.id !== payload.transactionId)
    case UPDATE_TRANSACTION:
      return state.map(trans=>{
        if(trans.id === payload.transactionId){
            return{
                ...trans,
                ...payload.updateddata
            }
        }
        else{
            return{
            ...trans
            }
        }
      })
    default:
      return state;
  }
};
export default TransactionsReducer;
