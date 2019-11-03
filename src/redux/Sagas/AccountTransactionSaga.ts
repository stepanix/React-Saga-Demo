/**
 *  Saga watchers are special functions that listen to actions dispatched 
 *  from components or any other client and take action based on
 *  the particular action dispatched.
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionModel } from '../../shared/Models/ActionModel';

import { getTransactionsSuccess, getTransactionsError, getTransactions, GET_TRANSACTIONS } from '../Actions/AccountTransactionAction';
import { listAccountTransactions } from '../../containers/AccountTransaction/Services/AccountTransactionService';

/**
 * fetchAccountTransactions is a special saga function that performs an application side effect
 * by invoking listAccountTransactions function service and sending an action payload. 
 * Please note: * the action payload contains an address paramter of type string
 * which is an argument in the listAccountTransactions function used by the service.
 */
function* fetchAccountTransactions(action: ActionModel) {
    try {
        // call to invoke service via listAccountTransactions function. Returns all transactions
        const transactions = yield call(listAccountTransactions, action.payload);
        // put function dispatches the list of transactions (result) via getTransactionsSuccess action
        yield put(getTransactionsSuccess(transactions));
    } catch (error) {
        // put function dispatches error via getTransactionsError action
        yield put(getTransactionsError(error));
    }
}

/** Watcher function is a special function that maps actions dispatched from a client / component / container 
 *  to an internally implemented function.
 *  e.g actionListTransactionWatcher listens to GET_TRANSACTIONS action dispatched and in turn
 *  fetchAccountTransactions is invoked.
 */
export function* actionListTransactionWatcher() {
    yield takeEvery(GET_TRANSACTIONS, fetchAccountTransactions);
}
