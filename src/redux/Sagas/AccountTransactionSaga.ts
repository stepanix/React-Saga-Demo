import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionModel } from '../../shared/Models/ActionModel';
import { listAccountTransactions } from '../../components/AccountTransaction/Services/AccountTransactionService';
import { GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_ERROR, GET_TRANSACTIONS } from '../Actions/AccountTransactionAction';


function* fetchAccountTransactions(action: ActionModel) {
    try {
        const transactions = yield call(listAccountTransactions, action.payLoad.address);
        yield put({ type: GET_TRANSACTIONS_SUCCESS, result: transactions });
    } catch (e) {
        yield put({ type: GET_TRANSACTIONS_ERROR, result: e });
    }
}

export function* actionListTransactionWatcher() {
    yield takeLatest(GET_TRANSACTIONS, fetchAccountTransactions);
}
