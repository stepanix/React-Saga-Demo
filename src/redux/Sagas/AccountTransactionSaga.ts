import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionModel } from '../../shared/Models/ActionModel';

import { getTransactionsSuccess, getTransactionsError, getTransactions, GET_TRANSACTIONS } from '../Actions/AccountTransactionAction';
import { listAccountTransactions } from '../../containers/AccountTransaction/Services/AccountTransactionService';


function* fetchAccountTransactions(action: ActionModel) {
    try {
        const transactions = yield call(listAccountTransactions, action.payload);
        yield put(getTransactionsSuccess(transactions));
    } catch (error) {
        yield put(getTransactionsError(error));
    }
}

export function* actionListTransactionWatcher() {
    yield takeLatest(GET_TRANSACTIONS, fetchAccountTransactions);
}
