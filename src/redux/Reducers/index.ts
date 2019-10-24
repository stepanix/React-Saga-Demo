import { combineReducers } from 'redux';
import { accountTransactionReducer } from './AccountTransactionReducer';

const rootReducer = combineReducers({
	accountTransactions: accountTransactionReducer
});

export default rootReducer;