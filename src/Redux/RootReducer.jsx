import { combineReducers } from 'redux';
import TransactionsReducer from './Transactions/TransactionsReducer';

var RootReducer=combineReducers({
      transactions : TransactionsReducer
});

export default RootReducer;
